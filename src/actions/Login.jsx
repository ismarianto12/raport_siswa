import { useContext } from 'react'
import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import { createBrowserHistory } from 'history';
import Swal from 'sweetalert2';
import { Navigate, useNavigate, NavLink, redirect } from 'react-router-dom';


const history = createBrowserHistory()
export const LoginActions = createSlice({
    name: 'login',
    initialState: {
        loading: false,
        error: null,
        token: null,
        user: null
    },
    reducers: {
        loginStart: state => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }

    },
    loginFailure: (state, action) => {
        state.loading = false;
        state.error = 400;
    },
})

export const {
    loginStart, loginSuccess, loginFailure
} = LoginActions.actions
export default LoginActions.reducer

export const loginAcc = (data, navigate) => async dispatch => {
    try {
        dispatch(loginStart());
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/v1/login`, data)
        const resdata = response.data
        let session = {
            "id": resdata.id,
            "level": resdata.level,
            "username": resdata.username
        }
        localStorage.setItem('token', JSON.stringify(session))
        dispatch(loginSuccess(response.data))
        console.log(session)
        navigate('/')

    } catch (error) {
        Swal.fire('error', 'username dan password salah', 'error')
    }
};

