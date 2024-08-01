import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgOCA4Ij48cGF0aCBmaWxsPSIjMDI2NmFlIiBkPSJNNCAwQzIuMzQgMCAxIDEuMzQgMSAzYzAgMiAzIDUgMyA1czMtMyAzLTVjMC0xLjY2LTEuMzQtMy0zLTNtMCAxYTIgMiAwIDAgMSAyIDJjMCAxLjExLS44OSAyLTIgMmEyIDIgMCAxIDEgMC00Ii8+PC9zdmc+';
const customMarkerIcon = L.icon({
    iconUrl: markerIconUrl,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -36]
});

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

const formatStoreName = (displayName: string) => {
    const formattedName = displayName.replace(/Coppel/i, 'Koppel');
    const parts = formattedName.split(', ');
    let name = parts[0];
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
            const url = `${import.meta.env.VITE_NOMINATIM_URL}?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=20&lat=${latitude}&lon=${longitude}`;
            console.log('Fetch URL:', url);

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data: NominatimResponse[]) => {
                    console.log('API Response:', data);
                    const userState = data[0]?.address?.state || "";
                    const places: Store[] = data
                        .filter(place => place.address.state === userState)
                        .map((place) => ({
                            id: place.place_id,
                            name: formatStoreName(place.display_name),
                            type: 'Tiendas Koppel',
                            address: [
                                place.address.road || '',
                                place.address.suburb || '',
                                place.address.city || '',
                                place.address.state || '',
                                place.address.country || ''
                            ].filter(Boolean).join(', '),
                            hours: '8:00',
                            position: [parseFloat(place.lat), parseFloat(place.lon)]
                        }));

                    setStores(places);
                    onStoresLoaded(places);
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
