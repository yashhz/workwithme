export interface ProofOfWorkItem {
    id: string;
    number: string;
    title: string;
    oneLiner: string;
    tags: string[];
    description: string;
    what: string[];
    stack: string[];
    outcome: string;
    buttonText: string;
    buttonLink: string;
    mediaUrl?: string;
    mediaType?: 'image' | 'video';
    note?: string;
}

export interface PackageInclude {
    label: string;
    detail: string;
}

export interface ServicePackage {
    id: string;
    name: string;
    tagline: string;
    price: number;
    timeline: string;
    includes: PackageInclude[];
}

export interface AlaCarteItem {
    id: string;
    name: string;
    price: number;
    isStarting?: boolean;
}

export interface OrderStep {
    status: string;
    title: string;
    time: string;
    description: string;
    detail: string;
}
