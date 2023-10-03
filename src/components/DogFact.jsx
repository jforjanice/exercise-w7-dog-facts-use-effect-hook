/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// DogFact Component
export const DogFact = ({ fact , loading }) => {


const cleanFact = loading ? "Loading..." : fact[0].attributes.body


  
  return (
    <div className="card text-center">
      <h1 className="card-header">dog facts</h1>
      <p className="card-text">{cleanFact}</p>
    </div>
  );
};
// Hint: Extract the 'body' from 'attributes' of the 'fact' prop
// Hint: Render the 'cleanFact' if available, otherwise show a loading message
// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
