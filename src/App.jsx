import { useState } from "react";

import UserInput from "./Components/Input.jsx";
import Calculation from "./Components/Calculations.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <main>
      <>
        <UserInput onChange={handleChange} userInput={userInput} />
        {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
        {inputIsValid && <Calculation input={userInput} />}
      </>
    </main>
  );
}

export default App;
