// Define los tipos para los datos de las tiendas
export interface Store {
    name: string;
    type: string;
    address: string;
    hours: string;
    id: number; // Añadido para que sea único
    position: [number, number]; // Añadido para el mapa
}

