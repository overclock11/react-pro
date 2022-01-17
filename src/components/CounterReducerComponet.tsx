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
            let newState = {
                counter: 0,
                previous: 0,
                changes: 0
            }
            newState.counter = state.counter + action.payload.value;
            newState.previous = state.counter;
            newState.changes = state.changes + 1;
            return newState;
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

    const handleClickReset = () => {
        dispatch({type:'reset'});
    }
    const handleClickResetIncrease = () => {
        dispatch({type:'increaseBy', payload:{value: 5}});
    }
    return (
      <>
          <h1>CounterReducerComponent</h1>
          <p>{counter}</p>
          <button onClick={handleClickReset}>reset</button>
          <button onClick={handleClickResetIncrease}>sumar 5</button>
      </>
    );
}
