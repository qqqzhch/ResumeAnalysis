import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

type initialStateType={
    value:number
}

const initialState:initialStateType = {
    value: 0,
};

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        increment: (state:initialStateType) => {
            state.value += 1;
            console.log('increment state value = ', state.value)
        },
        decrement: (state:initialStateType) => {
            state.value -= 1;
            console.log('decrement state value = ', state.value)
        },
        incrementByAmount: (state:initialStateType, action:PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
})

export const { increment, decrement, incrementByAmount } = homeSlice.actions;