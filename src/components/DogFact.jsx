/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// DogFact Component
export const DogFact = ({ fact }) => {
  // const loadingFact = () => {
  //   fact
  //     ? !loading && <p>Loading... </p>
  //     : loading &&
  // };
  return (
    <div>
      <h1>dog fact here.</h1>
      <p>fact={fact}</p>
    </div>
  );
};
// Hint: Extract the 'body' from 'attributes' of the 'fact' prop
// Hint: Render the 'cleanFact' if available, otherwise show a loading message
// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
