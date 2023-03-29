import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "../data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <div className="App">
        <section className="container">
          <h1>{people.length}birthday Today</h1>
          <List people={people} />
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople([])}
          >
            clear all
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
