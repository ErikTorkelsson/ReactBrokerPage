import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

let initialState = {
    token: '',
    status: 'idle',
    error: null
};

export const postLogin = createAsyncThunk("login/postlogin", async (props) => {

    const response = await client.post('https://realtyfirmapi2.azurewebsites.net/api/auth/brokerpass',{"email": props.email,"password": props.password});
    return response.token;
});

export const googleLogin = createAsyncThunk("login/googlelogin", async(props) =>
{
    console.log("props:", props)
    const response = await client.post('https://realtyfirmapi2.azurewebsites.net/api/auth/brokergoogle', {"tokenId": props.tokenId});
    return response.token;
});


const loginSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {},
    extraReducers:
        {
            [postLogin.fulfilled]: (state, action) =>
            {
                // console.log(action.payload)
                state.token = action.payload
            },
            [googleLogin.fulfilled]: (state, action)=>
            {
                state.token = action.payload;
                window.localStorage.setItem('token', action.payload)
            }
            
        }
});


export default loginSlice.reducer;