import {useReducer} from 'react';
import {CounterState} from "./interfaces/CounterInterface";
import {counterReducer} from "./state/CounterReducer";
import {doIncreaseBy, doReset} from "./actions/Actions";
const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}


export const CounterReducerComponent = () => {
    const [{counter}, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleClickReset = () => {
        dispatch(doReset());
    }
    const handleClickResetIncrease = (value: number) => {
        dispatch(doIncreaseBy(value));
    }
    return (
      <>
          <h1>CounterReducerSegmentado</h1>
          <p>{counter}</p>
          <button onClick={handleClickReset}>reset</button>
          <button onClick={()=> handleClickResetIncrease(5)}>sumar 5</button>
      </>
    );
}
