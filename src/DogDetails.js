import React from "react";
import { useParams } from "react-router-dom";

const dogs = [
  { id: 1, name: "Judy", breed: "Airedale Terrier", age: 5, description: "Judy loves to play fetch!" },
  { id: 2, name: "Max", breed: "German Shepherd", age: 4, description: "Max is a great guard dog." },
  { id: 3, name: "Bella", breed: "Labrador Retriever", age: 3, description: "Bella enjoys swimming." },
  { id: 4, name: "Charlie", breed: "Poodle", age: 6, description: "Charlie is very smart and loves puzzles." },
  { id: 5, name: "Lucy", breed: "Beagle", age: 2, description: "Lucy is always sniffing around for treats." },
];

function DogDetails() {
  const { id } = useParams();
  const dog = dogs.find((dog) => dog.id === parseInt(id));

  if (!dog) {
    return <h2 style={{ textAlign: "center" }}>Dog not found!</h2>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{dog.name} 🐕</h1>
      <p><strong>Breed:</strong> {dog.breed}</p>
      <p><strong>Age:</strong> {dog.age} years old</p>
      <p>{dog.description}</p>
    </div>
  );
}

export default DogDetails;
