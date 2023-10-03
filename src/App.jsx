// Import required  hooks
import { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const DogData = () => {
    useEffect(() => {
      fetch("https://dogapi.dog/api/v2/facts")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  };

  // Hint: Initialize state for storing the dog fact
  // Hint: Define the API endpoint
  // Hint: Create a function to fetch the dog fact
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts

  return (
    <div className="App">
      <DogFact fact={DogData()} />
    </div>
  );
};
