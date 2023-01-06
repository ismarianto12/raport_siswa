import { configureStore } from '@reduxjs/toolkit'
import SiswaAction from '../actions/Siswa'
import MapelAction from '../actions/Mapel'
import LoginActions from '../actions/Login'
import KaryawanAction from '../actions/Karyawan'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
export default configureStore({
    reducer: {
        siswa: SiswaAction,
        mapel: MapelAction,
        login: LoginActions,
        karyawan: KaryawanAction
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})