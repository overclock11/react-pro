import {useEffect, useRef, useState} from "react";
import {gsap} from 'gsap';
export const CounterEffect = () => {
    const[number, setNumber] = useState(5);
    const numberCounter = useRef<HTMLHeadingElement>(null);
    const MAXIMUM = 12;
    const tl = gsap.timeline();

    useEffect(()=>{
        if(number <= 10) return;
        console.log("%cEl valor mas alto","color:red");
        tl.to(numberCounter.current,{y: -20, duration: 0.2, ease: "ease.out"})
            .to(numberCounter.current,{y: 20, duration: 1, ease: "bounce.out"});
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
          <h2 ref={numberCounter}>{number}</h2>
          <button onClick={handleClick}>+1</button>
      </>
    );
}
