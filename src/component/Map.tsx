import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon, DivIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { Stop, Location } from '../types/Geolocation';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

type MapProps = {
  currentLocation: Location;
  stops: Stop[];
  nextStop: Stop;
};

const stopIcon = new DivIcon({
  className: '',
  html: `
    <div style="
      background-color: #3b82f6;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 0 4px rgba(0,0,0,0.3);
    "></div>
  `,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

const busIcon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" stroke="white" stroke-width="2">
      <path d="M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2"/>
      <path d="M14 17H9"/>
      <circle cx="6.5" cy="17.5" r="2.5"/>
      <circle cx="16.5" cy="17.5" r="2.5"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

function RoutingMachine({ stops }: { stops: Stop[] }) {
  const map = useMap();

  useEffect(() => {
    if (!map || stops.length < 2) return;

    const waypoints = stops.map(stop =>
      L.latLng(stop.location.lat, stop.location.lng)
    );

    const routingControl = L.Routing.control({
      waypoints,
      routeWhileDragging: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      lineOptions: {
        styles: [
          { color: '#3b82f6', opacity: 0.8, weight: 4 },
          { color: 'white', opacity: 0.3, weight: 6 }
        ],
        extendToWaypoints: false,
        missingRouteTolerance: 0
      }
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, stops]);

  return null;
}

function MapUpdater({ location }: { location: Location }) {
  const map = useMap();

  

  useEffect(() => {
    map.setView([location.lat, location.lng], 13);
  }, [location, map]);



  return null;
}

export function Map({ currentLocation, stops, nextStop }: MapProps) {
  return (
    <div className="h-[400px] z-0 rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[currentLocation.lat, currentLocation.lng]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RoutingMachine stops={stops} />

        {stops.map((stop) => (
          <Marker
            key={stop.id}
            position={[stop.location.lat, stop.location.lng]}
            icon={stopIcon}
          >
            <Popup>
              <div className="text-sm font-medium">
                <span className="block text-gray-900">{stop.name}</span>
                {stop.id === nextStop.id && (
                  <span className="block text-blue-600 text-xs mt-1">Next Stop</span>
                )}
              </div>
            </Popup>
          </Marker>
        ))}

        <Marker position={[currentLocation.lat, currentLocation.lng]} icon={busIcon}>
          <Popup>
            <div className="text-sm">
              <strong className="block mb-1">Current Location</strong>
              <span className="block text-gray-600">Next Stop: {nextStop.name}</span>
              <span className="block text-gray-600">Distance: {nextStop.distance}</span>
            </div>
          </Popup>
        </Marker>

        
        {/* <MapUpdater location={currentLocation} /> */}
      </MapContainer>
    </div>
  );
}