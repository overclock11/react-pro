import {useCounter} from "../hooks/useCounter";

export const CounterHook = () => {
    const {number, elementToAnimate, handleClick} = useCounter(15);
    return (
      <>
          <h1>Counter Hook</h1>
          <h2 ref={elementToAnimate}>{number}</h2>
          <button onClick={handleClick}>+1</button>
      </>
    );
}
