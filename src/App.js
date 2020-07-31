import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [count, setCount] = useState(0);
  const notify = () => toast("Wow so easy !");

  return (
    <div className="App">
      <header>
        <h1>Counter App using State</h1>
      </header>
      <h2>Current Value of Count is: {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => (count >= 10 ? setCount(0) : setCount(count + 1))}>
        Increase Counter
      </button>

      <button onClick={() => setCount(count - 1)}>Decraese Counter</button>
      <button onClick={notify}>Show Toast </button>
      <ToastContainer />
    </div>
  );
};

export default App;
