export interface Gadget {
    id: string; // UUID v4
    name: string;
    status: Status;
};

export enum Status {
    AVAILABLE = "available",
    DECOMMISSIONED = "decommissioned",
    DESTROYED = "destroyed",
    DEPLOYED = "deployed"
};