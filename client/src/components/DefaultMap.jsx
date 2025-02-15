import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import PropTypes from "prop-types";

// ChangeMapView component for dynamic center changes
function ChangeMapView({ coords }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, 7);
  }, [coords, map]);
  return null;
}

ChangeMapView.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
};

// Custom fire icon
const fireIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Sample California wildfire data
const wildfires = [
  {
    id: 1,
    name: "Dixie Fire",
    coords: [40.2521, -121.2311],
    date: "2023-07-13",
  },
  {
    id: 2,
    name: "Caldor Fire",
    coords: [38.7729, -120.5234],
    date: "2023-08-14",
  },
  {
    id: 3,
    name: "Creek Fire",
    coords: [37.1911, -119.2563],
    date: "2023-09-04",
  },
];

const DefaultMap = () => {
  const californiaCenter = [36.7783, -119.4179]; // California coordinates

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      className="relative grid col-span-2 "
    >
      <MapContainer
        center={californiaCenter}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          maxZoom={19}
        />
        {wildfires.map((fire) => (
          <Marker key={fire.id} position={fire.coords} icon={fireIcon}>
            <Popup>
              <strong>{fire.name}</strong>
              <br />
              Reported: {fire.date}
            </Popup>
          </Marker>
        ))}
        <ChangeMapView coords={californiaCenter} />
      </MapContainer>
    </div>
  );
};

export default DefaultMap;
