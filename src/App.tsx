import React from "react";
import {Counter} from "./components/Counter";
import {CounterBy} from "./components/CounterBy";
import {CounterEffect} from "./components/CounterEffect";


function App() {
  return (
      <>
        <h1>React</h1>
         <Counter initialValue={22} />
         <CounterBy initialValue={-12} />
         <hr/>
          <CounterEffect/>
      </>
  );
}

export default App;
