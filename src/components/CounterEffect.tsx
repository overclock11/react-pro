import {useEffect, useState} from "react";

export const CounterEffect = () => {
    const[number, setNumber] = useState(5);
    const MAXIMUM = 12;
    useEffect(()=>{
        if(number <= 10) return;

        console.log("%cEl valor mas alto","color:red");
    },[number])
    const handleClick = () => {
        if(number < MAXIMUM){
            //setNumber(previousValue => previousValue+1);
            setNumber((previousValue) => {
                const value =  Math.min(previousValue + 1, MAXIMUM);
                console.log(value);
                return value;
            });
        }
    }
    return (
      <>
          <h1>CounterEffect</h1>
          <p>{number}</p>
          <button onClick={handleClick}>+1</button>
      </>
    );
}
