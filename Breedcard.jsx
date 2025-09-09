import React from "react";

export default function BreedCard({ breed }) {
  const { name, description, lifespan, weightRange, hypoallergenic } = breed;

  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{name}</h2>
      <p className="text-black-600 text-sm mb-3">
        {description || "No description available"}
      </p>
      <p className="text-blue-600 text-sm">
        <strong>Lifespan:</strong> {lifespan}
      </p>
      <p className="text-blue-600 text-sm">
        <strong>Weight Range:</strong> {weightRange}
      </p>
      <p className="text-blue-600 text-sm">
        <strong>Hypoallergenic:</strong> {hypoallergenic}
      </p>
    </div>
  );
}
