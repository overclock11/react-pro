export type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset'}
export const doReset = (): CounterAction =>{
    return {
        type: "reset"
    }
}
export const doResetV2 = (): CounterAction =>({
        type: "reset"
})
export const doIncreaseBy = (value: number): CounterAction => ({
    type: "increaseBy",
    payload: {value}
})
