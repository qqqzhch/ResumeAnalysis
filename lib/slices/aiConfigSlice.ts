import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import OpenAI from "openai";
type apiApiValueType={
    endPoint:string,
    apiKey:string,
    mpdelName:string
}

type initialStateType={
    aiApiName:string,
    apiApiValue?:apiApiValueType,
}

const initialState:initialStateType = {
    aiApiName: '',

};
export const aiConfigSlice = createSlice({
    name: "aiConfig",
    initialState,
    reducers: {
        setApiValue: (state:initialStateType, action:PayloadAction<apiApiValueType>) => {
            state.apiApiValue = action.payload;
            
        },
        setApiName: (state:initialStateType, action:PayloadAction<string>) => {
            state.aiApiName =action.payload;
         
        },

    },
})

export const { setApiValue, setApiName } = aiConfigSlice.actions;