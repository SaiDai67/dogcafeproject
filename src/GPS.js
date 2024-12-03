import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Define custom dog icon
const dogIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/emoji/48/dog-emoji.png",
  iconSize: [35, 35],
});

// Initial dog locations
const initialDogs = [
  { id: 1, name: "Judy", lat: 37.7749, lng: -122.4194 }, // San Francisco
  { id: 2, name: "Max", lat: 34.0522, lng: -118.2437 }, // Los Angeles
  { id: 3, name: "Bella", lat: 40.7128, lng: -74.006 }, // New York
  { id: 4, name: "Charlie", lat: 41.8781, lng: -87.6298 }, // Chicago
  { id: 5, name: "Lucy", lat: 29.7604, lng: -95.3698 }, // Houston
  { id: 6, name: "Cooper", lat: 39.7392, lng: -104.9903 }, // Denver
  { id: 7, name: "Daisy", lat: 47.6062, lng: -122.3321 }, // Seattle
  { id: 8, name: "Milo", lat: 25.7617, lng: -80.1918 }, // Miami
  { id: 9, name: "Luna", lat: 33.4484, lng: -112.074 }, // Phoenix
  { id: 10, name: "Buddy", lat: 32.7767, lng: -96.797 }, // Dallas
  { id: 11, name: "Rocky", lat: 39.9526, lng: -75.1652 }, // Philadelphia
  { id: 12, name: "Zoe", lat: 38.9072, lng: -77.0369 }, // Washington DC
  { id: 13, name: "Lola", lat: 36.1627, lng: -86.7816 }, // Nashville
  { id: 14, name: "Bear", lat: 42.3601, lng: -71.0589 }, // Boston
  { id: 15, name: "Sadie", lat: 37.3382, lng: -121.8863 }, // San Jose
];

function GPS() {
  const [dogs, setDogs] = useState(initialDogs);

  // Simulate real-time location updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDogs((prevDogs) =>
        prevDogs.map((dog) => ({
          ...dog,
          lat: dog.lat + (Math.random() - 0.5) * 0.01, // Random latitude adjustment
          lng: dog.lng + (Math.random() - 0.5) * 0.01, // Random longitude adjustment
        }))
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>Dog GPS Tracker 🐾</h1>
      <MapContainer
        center={[37.7749, -122.4194]} // Default map center (San Francisco)
        zoom={4}
        style={{ height: "80vh", width: "90%", margin: "0 auto" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {dogs.map((dog) => (
          <Marker
            key={dog.id}
            position={[dog.lat, dog.lng]}
            icon={dogIcon}
          >
            <Popup>
              <strong>{dog.name}</strong>
              <br />
              Lat: {dog.lat.toFixed(4)}, Lng: {dog.lng.toFixed(4)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default GPS;