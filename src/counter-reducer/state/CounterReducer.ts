import {CounterState} from "../interfaces/CounterInterface";
import {CounterAction} from "../actions/Actions";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
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
