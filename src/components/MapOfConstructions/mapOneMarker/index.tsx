import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

const MapOneMarkerComponent = ({lat, long} :{ lat:number, long:number}) => {
  const [loaded, setLoaded] = useState(false);
  const [center, setCenter] = useState({ lat: lat || -23.5248, lng: long || -46.1871 });

  const ZOOM_LEVEL = 14;

  const haveWindow = typeof window != "undefined";

  useEffect(() => {
    setLoaded(true);
  }, []);

  const icon = L.divIcon({ className: "icon-marker" });

  return (
    <div style={{ height: "200px", width: "100%", zIndex: 0 }}>
      {loaded && haveWindow && (
        <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          scrollWheelZoom={false}
          className="map-one-marker-style"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[lat ? lat : -23.5248, long ? long : -46.1871]} icon={icon}></Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default MapOneMarkerComponent;
