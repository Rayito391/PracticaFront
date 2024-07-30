import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// URL del icono del marcador en base64
const markerIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgOCA4Ij48cGF0aCBmaWxsPSIjMDI2NmFlIiBkPSJNNCAwQzIuMzQgMCAxIDEuMzQgMSAzYzAgMiAzIDUgMyA1czMtMyAzLTVjMC0xLjY2LTEuMzQtMy0zLTNtMCAxYTIgMiAwIDAgMSAyIDJjMCAxLjExLS44OSAyLTIgMmEyIDIgMCAxIDEgMC00Ii8+PC9zdmc+';
const customMarkerIcon = L.icon({
    iconUrl: markerIconUrl,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -36]
});

// Define los tipos para los datos de las tiendas
interface Store {
    id: number;
    name: string;
    type: string;
    address: string;
    hours: string;
    position: [number, number];
}

interface NominatimResponse {
    place_id: number;
    display_name: string;
    lat: string;
    lon: string;
    address: {
        road?: string;
        suburb?: string;
        city?: string;
        state?: string;
        county?: string;
        country?: string;
    };
}

interface MapComponentProps {
    onStoresLoaded: (stores: Store[]) => void;
}

// Función para extraer el nombre y reemplazar 'Coppel' por 'Koppel'
const formatStoreName = (displayName: string) => {
    // Reemplaza 'Coppel' por 'Koppel'
    const formattedName = displayName.replace(/Coppel/i, 'Koppel');

    // Obtiene la primera parte del nombre, eliminando 'Calle' si está presente
    const parts = formattedName.split(', ');
    let name = parts[0];

    // Elimina la palabra 'Calle' al inicio del nombre si está presente
    if (name.startsWith('Calle ')) {
        name = name.replace('Calle ', '');
    }

    return name;
};



const MapComponent: React.FC<MapComponentProps> = ({ onStoresLoaded }) => {
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [stores, setStores] = useState<Store[]>([]);
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            setPosition([latitude, longitude]);

            const query = 'coppel culiacán';
            fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=20&lat=${latitude}&lon=${longitude}`)
                .then(response => response.json())
                .then((data: NominatimResponse[]) => {
                    const userState = data[0]?.address?.state || "";
                    const places: Store[] = data
                        .filter(place => place.address.state === userState)
                        .map((place) => ({
                            id: place.place_id,
                            name: formatStoreName(place.display_name), // Usa la función para formatear el nombre
                            type: 'Tiendas Koppel', // Ajustar si es necesario
                            address: [
                                place.address.road || '',
                                place.address.suburb || '',
                                place.address.city || '',
                                place.address.state || '',
                                place.address.country || ''
                            ].filter(Boolean).join(', '), // Construye la dirección con los campos disponibles
                            hours: '8:00', // Ajustar si es necesario
                            position: [parseFloat(place.lat), parseFloat(place.lon)]
                        }));

                    setStores(places);
                    onStoresLoaded(places); // Llama al callback para pasar los datos
                })
                .catch(error => console.error('Error fetching data:', error));
        });
    }, [onStoresLoaded]);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.invalidateSize();
        }
    }, [position]);

    if (!position) {
        return <p>Cargando mapa...</p>;
    }

    return (
        <MapContainer 
            center={position} 
            zoom={12} 
            className="h-full w-full mt-6 rounded-r-lg" 
            ref={(map) => { if (map) mapRef.current = map }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customMarkerIcon}>
                <Popup>Estás aquí.</Popup>
            </Marker>
            {stores.map(store => (
                <Marker key={store.id} position={store.position} icon={customMarkerIcon}>
                    <Popup>{store.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapComponent;
