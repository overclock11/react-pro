import {useReducer, useState} from 'react';
interface CounterState {
    counter: number,
    previous: number,
    changes: number
}
const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}
type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset'}

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'increaseBy':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
        default:
            return state;
    }
}
export const CounterReducerComponent = () => {
    const [{counter}, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleClick = (action: string) => {
        dispatch({type:'reset'});
    }
    return (
      <>
          <h1>CounterReducerComponent</h1>
          <p>{counter}</p>
          <button onClick={()=> handleClick('reset')}>reset</button>
          <button onClick={()=> handleClick('increaseBy')}>sumar</button>
      </>
    );
}
