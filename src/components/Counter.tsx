import {useState} from "react";
interface CounterProps {
    initialValue: number;
}
//export const Counter = ({initialValue}: {initialValue: number}) => {
export const Counter = ({initialValue}:CounterProps) => {
    const[number, setNumber] = useState(initialValue);

    const handleClick = () => {
        setNumber(number+1);
    }
    return (
      <>
          <h1>Counter</h1>
          <p>{number}</p>
          <button onClick={handleClick}>+1</button>
      </>
    );
}
