/* The line `import { useState } from "react";` is importing the `useState` function from the React
library. The `useState` function is a built-in React hook that allows you to add state to functional
components. It returns a stateful value and a function to update that value. In this code, the
`useState` function is used to create a state variable called `counter` and a function called
`setCounter` to update the `counter` value. */
import { useState } from "react";

/* The `function App()` is a functional component in React. It is a JavaScript function that returns
JSX (JavaScript XML) code, which describes the structure and content of the component. */
function App() {
  let [ counter, setCounter ] = useState(0);

  return (
    <>
     <h1>Chapter 1</h1>
     <p>Counter: {counter}</p>
     <button onClick={() => setCounter(counter + 1)}>Increment</button>
     <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  )
}

export default App
