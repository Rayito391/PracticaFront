import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// URL del icono del marcador
const markerIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgOCA4Ij48cGF0aCBmaWxsPSIjMDI2NmFlIiBkPSJNNCAwQzIuMzQgMCAxIDEuMzQgMSAzYzAgMiAzIDUgMyA1czMtMyAzLTVjMC0xLjY2LTEuMzQtMy0zLTNtMCAxYTIgMiAwIDAgMSAyIDJjMCAxLjExLS44OSAyLTIgMmEyIDIgMCAxIDEgMC00Ii8+PC9zdmc+';
const customMarkerIcon = L.icon({
    iconUrl: markerIconUrl,
    iconSize: [24, 36], // Tamaño del icono
    iconAnchor: [12, 36], // Punto del icono que se alinea con la posición del marcador
    popupAnchor: [0, -36] // Punto desde el cual se abrirá el popup en relación al icono
});

// Define los tipos para los datos de las tiendas
interface Store {
    id: number;
    name: string;
    position: [number, number];
}

interface NominatimResponse {
    place_id: number;
    display_name: string;
    lat: string;
    lon: string;
    address: {
        state: string;
        city?: string;
        county?: string;
    };
}

const MapComponent: React.FC = () => {
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [stores, setStores] = useState<Store[]>([]);
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            setPosition([latitude, longitude]);

            // Consultar Nominatim API para buscar tiendas cercanas
            const query = 'Coppel tienda'; // Puedes ajustar esto para más flexibilidad
            fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=20&lat=${latitude}&lon=${longitude}`)
                .then(response => response.json())
                .then((data: NominatimResponse[]) => {
                    console.log('Datos de la API:', data);

                    // Verifica la dirección de las tiendas
                    console.log('Direcciones de tiendas:', data.map(place => place.address));

                    // Obtener el estado del usuario a partir de la ubicación actual
                    // En este caso, el estado del usuario se obtiene con la geolocalización
                    const userState = data[0]?.address?.state || ""; // Ajusta según la respuesta

                    // Filtrar por estado
                    const places: Store[] = data
                        .filter(place => place.address.state === userState) // Filtra por el estado del usuario
                        .map((place) => ({
                            id: place.place_id,
                            name: place.display_name,
                            position: [parseFloat(place.lat), parseFloat(place.lon)] // Asegúrate de que lat y lon son números
                        }));

                    console.log('Tiendas filtradas:', places); // Verifica qué tiendas se están agregando

                    setStores(places);
                })
                .catch(error => console.error('Error fetching data:', error));
        });
    }, []);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.invalidateSize();
        }
    }, [position]);

    if (!position) {
        return <p>Cargando mapa...</p>;
    }

    return (
        <MapContainer center={position} zoom={15} className="h-full w-full mt-6 rounded-r-lg" whenCreated={(map: L.Map) => { mapRef.current = map }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customMarkerIcon}>
                <Popup>
                    Estás aquí.
                </Popup>
            </Marker>
            {stores.map(store => (
                <Marker key={store.id} position={store.position} icon={customMarkerIcon}>
                    <Popup>
                        {store.name}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapComponent;
