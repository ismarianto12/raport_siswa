import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import { Navigate, useNavigate, NavLink, redirect } from 'react-router-dom';
// const navigate = useNavigate()
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const MapelAction = createSlice({
    name: 'mapel',
    initialState: { value: [] },
    reducers: {
        createmapel: async (state, action) => {
            const options = {
                method: 'POST',
                data: JSON.parse(JSON.stringify(action.payload)),
                url: `${process.env.REACT_APP_API_URL}/v1/mapel/insert`,
                headers: {
                    'Content-type': 'Application/json',
                }
            }
            await axios(options)
                .then(response => {
                    console.log(response)
                }).catch(function (error) {
                    console.log(error)
                })
        },
        updatemapel: (state, action) => {

        },
        deletemapel: async (state, action) => {
            const id = action.payload
            const options = {
                method: 'POST',
                data: JSON.parse(JSON.stringify(action.payload)),
                url: `${process.env.REACT_APP_API_URL}/v1/mapel/delete/${id}`,
                headers: {
                    'Content-type': 'Application/json',
                }
            }
            await axios(options)
                .then(response => {
                    history.push('/master/mapel')
                }).catch(function (error) {
                    console.log(error)
                })
        }
    }
})


export const {
    createmapel,
    updatemapel,
    deletemapel,
} = MapelAction.actions
export default MapelAction.reducer