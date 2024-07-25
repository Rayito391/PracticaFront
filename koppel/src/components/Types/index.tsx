export interface Store {
    id: number;
    name: string;
    address: string;
    distance: string;
    isOpen: boolean;
    closingTime: string;
    position: [number, number];
}
