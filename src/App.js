// App.js
import { useState } from "react";

function App() {
  // Step 1: create a state variable to track checkbox status
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  // Step 2: function to update state when checkbox changes
  function togglePepperoni(e) {
    setPepperoniIsChecked(e.target.checked);
  }

  return (
    <div>
      <h1>Select Pizza Toppings</h1>

      {/* Step 3: checkbox input controlled by state */}
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked}
        aria-checked={pepperoniIsChecked}
        onChange={togglePepperoni}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      {/* Step 4: display list of toppings */}
      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {/* Step 5: if checkbox is checked, show Pepperoni */}
        {pepperoniIsChecked ? <li>Pepperoni</li> : null}
      </ul>
    </div>
  );
}

export default App;
