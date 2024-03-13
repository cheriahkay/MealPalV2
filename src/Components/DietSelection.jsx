import React, { useState } from "react";
import DietOption from "./DietOption";

const DietSelection = () => {
  // State to keep track of selected diet options
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Function to handle selection of diet options
  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const dietOptions = [
    "Classic",
    "Vegetarian",
    "Flexitarian",
    "Vegan",
    "Pescetarian",
    "Low Carb",
    "Lactose Intolerant",
    "Keto",
  ];

  return (
    <div className="min-h-screen mx-[10%] flex flex-col justify-center items-center">
      <h2 className="mb-8 w-full text-3xl font-bold text-left">
        Pick your Diet
      </h2>
      <div className="space-y-2 flex flex-col w-full">
        {dietOptions.map((option) => (
          <DietOption
            key={option}
            name={option}
            selected={selectedOptions.includes(option)}
            onSelect={handleOptionSelect}
          />
        ))}
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold w-full py-4 px-4 rounded-md mt-5">
        Continue
      </button>
    </div>
  );
};

export default DietSelection;