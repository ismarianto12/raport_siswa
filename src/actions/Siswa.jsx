import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import { Navigate, useNavigate, NavLink, redirect } from 'react-router-dom';


// const navigate = useNavigate()
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const SiswaAction = createSlice({
    name: 'siswa',
    initialState: { value: [] },
    reducers: {
        createsiswa: async (state, action) => {
            const options = {
                method: 'POST',
                data: JSON.parse(JSON.stringify(action.payload)),
                url: `http://localhost/skripsi_api/public/v1/siswa/insert`,
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
        updatesiswa: (state, action) => {

        },
        deletesiswa: async (state, action) => {
            const id = action.payload
            const options = {
                method: 'POST',
                data: JSON.parse(JSON.stringify(action.payload)),
                url: `http://localhost/skripsi_api/public/v1/siswa/delete/${id}`,
                headers: {
                    'Content-type': 'Application/json',
                }
            }
            await axios(options)
                .then(response => {
                    history.push('/master/siswa')
                }).catch(function (error) {
                    console.log(error)
                })
        }
    }
})


export const {
    createsiswa,
    updatesiswa,
    deletesiswa,
} = SiswaAction.actions

export default SiswaAction.reducer