import {useState} from "react";
interface CounterState {
    counter: number;
    clicks: number;
}
export const CounterBy = ({initialValue}: {initialValue: number}) => {
    const[number, setNumber] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });

    const handleClick = (sumval: number) => {
        setNumber(({clicks, counter}) => ({
            counter: counter + sumval,
            clicks: clicks + 1
        }));
    }
    return (
      <>
          <h1>Counter</h1>
          <p>{number.counter}</p>
          <p>{number.clicks}</p>
          <button onClick={()=>handleClick(3)}>+3</button>
      </>
    );
}
