import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const popUpSlice = createSlice({
    name:'popUp',
    initialState:{
        loginPopUp:false,
        signinPopUp:false
    },
    reducers:{
        loginPopUpOpen:(state) =>{
            state.loginPopUp = true;
        },
        loginPopUpClose:(state) => {
            state.loginPopUp = false;
        },
        signinPopUpOpen:(state) => {
            state.signinPopUp =true;
        },
        signinPopUpClose:(state) => {
            state.signinPopUp = false;
        }
    }
})

export const { loginPopUpOpen, loginPopUpClose, signinPopUpOpen, signinPopUpClose } = popUpSlice.actions;

export default popUpSlice.reducer;