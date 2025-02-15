import { useEffect } from "react";
import { MapContainer, TileLayer, Circle, Popup, useMap } from "react-leaflet";
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
// const fireIcon = new L.Icon({
//   iconUrl:
//     "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
//   shadowSize: [41, 41],
// });

// Sample California wildfire data with more locations
const wildfires = [
  {
    id: 1,
    name: "Dixie Fire",
    coords: [40.2521, -121.2311],
    date: "2023-07-13",
    radius: 50000,
    containment: 45,
  },
  {
    id: 2,
    name: "Caldor Fire",
    coords: [38.7729, -120.5234],
    date: "2023-08-14",
    radius: 35000,
    containment: 60,
  },
  {
    id: 3,
    name: "Creek Fire",
    coords: [37.1911, -119.2563],
    date: "2023-09-04",
    radius: 30000,
    containment: 30,
  },
  {
    id: 4,
    name: "Glass Fire",
    coords: [38.5706, -122.4888],
    date: "2023-08-25",
    radius: 45000,
    containment: 25,
  },
  {
    id: 5,
    name: "LNU Lightning Complex",
    coords: [38.4766, -122.1],
    date: "2023-09-01",
    radius: 55000,
    containment: 15,
  },
  {
    id: 6,
    name: "SCU Lightning Complex",
    coords: [37.4161, -121.3233],
    date: "2023-08-30",
    radius: 40000,
    containment: 35,
  },
  {
    id: 7,
    name: "August Complex",
    coords: [39.8744, -122.9588],
    date: "2023-09-10",
    radius: 60000,
    containment: 20,
  },
  {
    id: 8,
    name: "North Complex",
    coords: [39.8111, -121.3333],
    date: "2023-08-28",
    radius: 42000,
    containment: 40,
  },
  {
    id: 9,
    name: "River Complex",
    coords: [41.1876, -123.1029],
    date: "2023-09-05",
    radius: 38000,
    containment: 28,
  },
  {
    id: 10,
    name: "Monument Fire",
    coords: [40.7484, -123.2834],
    date: "2023-08-22",
    radius: 33000,
    containment: 55,
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
          <Circle
            key={fire.id}
            center={fire.coords}
            radius={fire.radius}
            pathOptions={{
              color: "red",
              fillColor: "#f03434",
              fillOpacity: 0.5,
              weight: 2,
            }}
          >
            <Popup>
              <div className="text-center">
                <strong className="text-lg">{fire.name}</strong>
                <br />
                Reported: {fire.date}
                <br />
                Containment: {fire.containment}%
                <br />
                Spread: {(fire.radius / 1000).toFixed(1)} km
              </div>
            </Popup>
          </Circle>
        ))}
        <ChangeMapView coords={californiaCenter} />
      </MapContainer>
    </div>
  );
};

export default DefaultMap;
