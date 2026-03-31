import { useState, useEffect } from 'react';

export type Region = 'IN' | 'US' | 'EU' | 'OTHER';

interface RegionConfig {
    currency: string;
    locale: string;
    multiplier: number;
    rateFromINR: number;
}

const REGION_CONFIG: Record<Region, RegionConfig> = {
    IN:    { currency: 'INR', locale: 'en-IN', multiplier: 1,   rateFromINR: 1 },
    US:    { currency: 'USD', locale: 'en-US', multiplier: 2,   rateFromINR: 1 / 95 },
    EU:    { currency: 'EUR', locale: 'de-DE', multiplier: 2,   rateFromINR: 1 / 108 },
    OTHER: { currency: 'USD', locale: 'en-US', multiplier: 2,   rateFromINR: 1 / 95 },
};

export const useRegion = (): Region => {
    const [region, setRegion] = useState<Region>('IN');
    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(r => r.json())
            .then(d => {
                const code: string = d.country_code ?? '';
                if (code === 'IN') setRegion('IN');
                else if (code === 'US') setRegion('US');
                else if (['DE','FR','IT','ES','NL','BE','AT','PT','FI','IE','GR','LU','SK','SI','EE','LV','LT','CY','MT'].includes(code)) setRegion('EU');
                else setRegion('OTHER');
            })
            .catch(() => setRegion('IN'));
    }, []);
    return region;
};

export const formatRegionPrice = (baseINR: number, region: Region): string => {
    const cfg = REGION_CONFIG[region];
    const converted = baseINR * cfg.multiplier * cfg.rateFromINR;
    const rounded = Math.ceil(converted / (region === 'IN' ? 1000 : 100)) * (region === 'IN' ? 1000 : 100);
    return new Intl.NumberFormat(cfg.locale, {
        style: 'currency',
        currency: cfg.currency,
        maximumFractionDigits: 0,
    }).format(rounded);
};
