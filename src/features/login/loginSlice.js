import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

let initialState = {
    token: '',
    status: 'idle',
    error: null
};

export const postLogin = createAsyncThunk("login/postlogin", async (props) => {

    const response = await client.post('https://localhost:44382/api/auth/brokerpass',{"email": props.email,"password": props.password});
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
            }
            
        }
});


export default loginSlice.reducer;