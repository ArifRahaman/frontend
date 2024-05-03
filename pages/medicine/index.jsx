import React, { useState } from "react";
import axios from "axios";

const DrugInfoComponent = () => {
  const [drugName, setDrugName] = useState("");
  const [drugInfo, setDrugInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    const options = {
      method: "GET",
      url: "https://drug-info-and-price-history.p.rapidapi.com/1/druginfo",
      params: { drug: drugName },
      headers: {
        "X-RapidAPI-Key": "d3ccd88d55msh61403232b3e8b50p10480ejsnb6b97bc4f7f6",
        "X-RapidAPI-Host": "drug-info-and-price-history.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setDrugInfo(response.data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Search Drug Information</h2>
        <div className="flex items-center border-b border-gray-300 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter drug name"
            value={drugName}
            onChange={(e) => setDrugName(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {error && (
          <div className="text-red-500 mt-2">Error: {error.message}</div>
        )}
        {drugInfo && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Drug Information</h3>
            <p>
              <strong>Generic Name:</strong> {drugInfo[0].generic_name}
            </p>
            <p>
              <strong>Labeler Name:</strong> {drugInfo[0].labeler_name}
            </p>
            <p>
              <strong>Active Ingredients:</strong>
            </p>
            <ul>
              {drugInfo[0].active_ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name}: {ingredient.strength}
                </li>
              ))}
            </ul>
            <p>
              <strong>Packaging:</strong>
            </p>
            <p>{drugInfo[0].packaging[0].description}</p>
            <p>
              <strong>Marketing Start Date:</strong>{" "}
              {drugInfo[0].marketing_start_date}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrugInfoComponent;
