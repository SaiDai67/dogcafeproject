import React from "react";
import { Link } from "react-router-dom";

const dogs = [
  { id: 1, name: "Judy", breed: "Golden Retriever" },
  { id: 2, name: "Max", breed: "German Shepherd" },
  { id: 3, name: "Bella", breed: "Labrador Retriever" },
  { id: 4, name: "Charlie", breed: "Poodle" },
  { id: 5, name: "Lucy", breed: "Beagle" },
];

function DogInfo() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Meet Our Dogs! 🐾</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {dogs.map((dog) => (
          <li key={dog.id} style={{ margin: "10px 0" }}>
            <Link to={`/dog-info/${dog.id}`} style={{ textDecoration: "none", color: "#333" }}>
              <strong>{dog.name}</strong> - {dog.breed}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogInfo;