import React, { useEffect, useState } from "react";
import axios from "axios";
import BreedCard from "./Breedcard"; 

export default function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios
      .get("https://dogapi.dog/api/v2/breeds?page[size]=8") 
      .then((res) => {
        const data = res.data.data.map((b) => {
          const { name, description, life, weight, hypoallergenic } = b.attributes;
          return {
            id: b.id,
            name,
            description,
            lifespan: life ? `${life.min} - ${life.max} years` : "N/A",
            weightRange: weight ? weight.metric : "N/A",
            hypoallergenic: hypoallergenic ? "Yes" : "No",
          };
        });
        setBreeds(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
     
      <header className="bg-violet-100 py-6 shadow">
        <h1 className="text-5xl font-bold text-violet-700 text-center">
           Dog Breed Explorer
        </h1>
      </header>

     
      <main className="p-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {breeds.map((b) => (
            <BreedCard key={b.id} breed={b} />
          ))}
        </div>
      </main>
    </div>
  );
}
