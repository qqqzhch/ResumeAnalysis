import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

type initialStateType={
    resume:string
    isloading:boolean
}

const initialState:initialStateType = {
    resume: '',
    isloading:false
};

export const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        setData: (state:initialStateType,action:PayloadAction<string>) => {
            state.resume = action.payload;
            console.log('set resume = ', state.resume)
        },
        setIsloading:(state:initialStateType,action:PayloadAction<boolean>)=>{
            state.isloading=action.payload
        }
        
    },
})

export const { setData ,setIsloading} = resumeSlice.actions;