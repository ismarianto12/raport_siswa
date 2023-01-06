import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { Navigate, useNavigate, NavLink, redirect } from 'react-router-dom';
import Swal from 'sweetalert2';


import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const getsiswa = createAsyncThunk(
    'users/fetchUser',
    async (id, thunkAPI) => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/v1/siswa/show/${id}`)
        return response.json();
    }
);

export const SiswaAction = createSlice({
    name: 'siswa',
    initialState: {
        loading: [],
        dataSiswa: {},
        error: false,

    },
    reducers: {
        editsiswa: async (state, action) => {
            console.log(action, 'log id get acccess')
            const options = {
                method: 'GET',
                data: JSON.parse(JSON.stringify(action.payload)),
                url: `${process.env.REACT_APP_API_URL}/v1/siswa/show/${action.payload}`,
                headers: {
                    'Content-type': 'Application/json',
                }
            }
            await axios(options)
                .then(response => {
                    const datanya = response.data
                    return datanya
                }).catch(function (error) {
                    const datanya = []
                    return datanya
                })
        },
        updatesiswa: async (state, action) => {
            const id = action.payload
            const options = {
                method: 'POST',
                data: JSON.parse(JSON.stringify(action.payload)),
                url: `${process.env.REACT_APP_API_URL}/v1/siswa/update/${id}`,
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
        },
        deletesiswa: async (state, action) => {
            const id = action.payload
            const options = {
                method: 'POST',
                data: JSON.parse(JSON.stringify(action.payload)),
                url: `${process.env.REACT_APP_API_URL}/v1/siswa/delete/${id}`,
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
        },
    },
    extraReducers: {
        [getsiswa.pending]: (state, action) => {
            state.loading = true;
        },
        [getsiswa.fulfilled]: (state, action) => {
            state.loading = false;
            state.dataSiswa = action.payload;
        },
        [getsiswa.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    }
})


export const {
    updatesiswa,
    deletesiswa,
    editsiswa,

} = SiswaAction.actions
// export const SiswaAction
export default SiswaAction.reducer
export const createsiswa = (data, navigate) => async dispatch => {

    const options = {
        method: 'POST',
        data: JSON.parse(JSON.stringify(data)),
        url: `${process.env.REACT_APP_API_URL}/v1/siswa/insert`,
        headers: {
            'Content-type': 'Application/json',
        }
    }
    await axios(options)
        .then(response => {
            console.log(response)
            Swal.fire('Info', 'Data Karyawan berhasil di tambahakan', 'success')
            navigate('/master/siswa')
        }).catch(function (error) {
            console.log(error)
        })
}
export const Updatedata = (data, path, navigate) => async dispatch => {
    try {
        const options = {
            method: 'POST',
            data: JSON.parse(JSON.stringify(data)),
            url: `${process.env.REACT_APP_API_URL}/v1/siswa/update/${path}`,
            headers: {
                'Content-type': 'Application/json',
            }
        }
        await axios(options)
            .then(response => {
                navigate('/master/siswa')
                Swal.fire('success', 'data siswa berhasil di simpan', 'success')

            }).catch(function (error) {
                console.log(error)
            })

    } catch (error) {
        Swal.fire('error', 'username dan password salah', 'error')
    }
};
