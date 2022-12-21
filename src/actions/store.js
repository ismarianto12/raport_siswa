import { configureStore } from '@reduxjs/toolkit'
import SiswaAction from '../actions/Siswa'
export default configureStore({
    reducer: {
        siswa: SiswaAction,
    },
})