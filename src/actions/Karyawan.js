import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 
const initialState = [];

export const createKaryawan = createAsyncThunk(
    "karyawans/create",
    async ({ title, description }) => {
        const res = await [] //KaryawanDataService.create({ title, description });
        return res.data;
    }
);

export const retrieveKaryawans = createAsyncThunk(
    "karyawans/retrieve",
    async () => {
        const res = await []
        return res.data;
    }
);

export const updateKaryawan = createAsyncThunk(
    "karyawans/update",
    async ({ id, data }) => {
        const res = await []
        return res.data;
    }
);

export const deleteKaryawan = createAsyncThunk(
    "karyawans/delete",
    async ({ id }) => {
        return []
    }
);

export const deleteAllKaryawans = createAsyncThunk(
    "karyawans/deleteAll",
    async () => {
        // const res = await KaryawanDataService.removeAll();
        return []
    }
);

export const findKaryawansByTitle = createAsyncThunk(
    "karyawans/findByTitle",
    async ({ title }) => {
        return []
    }
);

const KaryawanAction = createSlice({
    name: "karyawan",
    initialState,
    extraReducers: {
        [createKaryawan.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [retrieveKaryawans.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        [updateKaryawan.fulfilled]: (state, action) => {
            const index = state.findIndex(Karyawan => Karyawan.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload,
            };
        },
        [deleteKaryawan.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            state.splice(index, 1);
        },
        [deleteAllKaryawans.fulfilled]: (state, action) => {
            return [];
        },
        [findKaryawansByTitle.fulfilled]: (state, action) => {
            return [...action.payload];
        },
    },
});

const { reducer } = KaryawanAction;
export default reducer;