import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export const useCounter = (limit: number) => {
    const[number, setNumber] = useState(5);
    const elementToAnimate = useRef<HTMLHeadingElement>(null);
    const tl = gsap.timeline();

    useEffect(()=>{
        if(number <= 10) return;
        console.log("%cEl valor mas alto","color:red");
        tl.to(elementToAnimate.current,{y: -20, duration: 0.2, ease: "ease.out"})
            .to(elementToAnimate.current,{y: 20, duration: 1, ease: "bounce.out"});
    },[number])

    const handleClick = () => {
        if(number < limit){
            //setNumber(previousValue => previousValue+1);
            setNumber((previousValue) => {
                const value =  Math.min(previousValue + 1, limit);
                console.log(value);
                return value;
            });
        }
    }

    return {
        number,
        elementToAnimate,
        handleClick
    }
}
