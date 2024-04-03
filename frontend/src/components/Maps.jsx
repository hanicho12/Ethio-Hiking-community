import React from 'react';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
  

const Maps = () => {
  const position = [9.153631, 39.196590];
  const [elevation, setElevation] = useState(null);
  useEffect(() => {
    // Fetch elevation data when component mounts
    const fetchElevationData = async () => {
      try {
        const response = await fetch(
          `https://api.open-elevation.com/api/v1/lookup?locations=${position[0]},${position[1]}`
        );
        const data = await response.json();
        const { elevation } = data.results[0];
        setElevation(elevation);
      } catch (error) {
        console.error('Error fetching elevation data:', error);
      }
    };

    fetchElevationData();
  }, [position]);
  return (
    <MapContainer center={position} zoom={8} style={{width:'40%', height:'50vh', float: 'right', position:'absolute', top:'800px', left:'750px'}} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Kassam Gorge /<br /> Maru Waterfall.
              Elevation: {elevation ? elevation.toFixed(2) : 'Loading...'}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;