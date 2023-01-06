import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import * as React from "react";
import Dashboard from './components/Dashboard'
import Error from './components/Error'
import SharedLayout from './pages/SharedLayout'
import ProtectedRoute from './lib/Protectedroute'
import Login from './pages/Login';
import MasterData from './pages/MasterData'
import User from './pages/User'
import Profile from './pages/user/Profile'
import { Level } from './pages/level/Index';
import FormLevel from './pages/level/Form';
import Siswa from './pages/siswa/Siswa';
import Mapel from './pages/mapel/Mapel'
// action add mapel 
import MapelAdd from './pages/mapel/MapelAdd'

import Kurikulum from './pages/kurikulum/Kurikulum';
import Karyawan from './pages/karyawan/Karyawan';

import Raport from './pages/raport/Raport';
import Laporan from './pages/laporan/Laporan';
import SiswaForm from './pages/siswa/SiswaForm';
import KaryawanForm from './pages/karyawan/KaryawanForm';
import Identitas from './pages/Identitas';
import Kelas from './pages/kelas/Kelas';
import KelasForm from './pages/kelas/KelasForm';
import RaportForm from './pages/raport/RaportForm';
import PrintLaporan from './pages/PrintLaporan'

export default function Web() {
    const [user, setUser] = useState(null);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
                    <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                </Route>

                <Route path='/app' element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
                    <Route index element={<ProtectedRoute><MasterData /></ProtectedRoute>} />
                    <Route path='/app/kurikulum' element={<ProtectedRoute><Kurikulum /></ProtectedRoute>} />
                    <Route path='/app/karyawan' element={<ProtectedRoute><Karyawan /></ProtectedRoute>} />
                    <Route path='/app/karyawan/*' element={<ProtectedRoute><KaryawanForm /></ProtectedRoute>} />


                    <Route path='/app/kelas' element={<ProtectedRoute><Kelas /></ProtectedRoute>} />
                    <Route path='/app/kelas/*' element={<ProtectedRoute><KelasForm /></ProtectedRoute>} />

                    <Route path='/app/user' element={<ProtectedRoute><User /></ProtectedRoute>} />
                    <Route path='/app/raport' element={<ProtectedRoute><Raport /></ProtectedRoute>} />
                    <Route path='/app/raport/*' element={<ProtectedRoute><RaportForm /></ProtectedRoute>} />

                    <Route path='/app/identitas' element={<ProtectedRoute><Identitas /></ProtectedRoute>} />
                    <Route path='/app/user' element={<ProtectedRoute><User /></ProtectedRoute>} />
                    <Route path='/app/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path='/app/level' element={<ProtectedRoute><Level /></ProtectedRoute>} />
                    <Route path='/app/level/create' element={<ProtectedRoute><FormLevel /></ProtectedRoute>} />
                    {/* <Route path='/app/cetak/raport' element={<ProtectedRoute><cetakRaport /></ProtectedRoute>} /> */}
                    <Route path='/app/persentase/penilaian' element={<ProtectedRoute><Laporan /></ProtectedRoute>} />

                </Route>


                <Route path='/master' element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
                    <Route index element={<ProtectedRoute><MasterData /></ProtectedRoute>} />
                    <Route path='/master/barang' element={<ProtectedRoute><User /></ProtectedRoute>} />
                    <Route path='/master/jenisbarang' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path='/master/purchaseoorder' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path='/master/siswa' element={<ProtectedRoute><Siswa /></ProtectedRoute>} />
                    <Route path='/master/siswa/*' element={<ProtectedRoute><SiswaForm /></ProtectedRoute>} />
                    <Route path='/master/mapel' element={<ProtectedRoute><Mapel /></ProtectedRoute>} />
                    <Route path='/master/mapel/*' element={<ProtectedRoute><MapelAdd /></ProtectedRoute>} />
                    <Route path='/master/laporan' element={<ProtectedRoute><Laporan /></ProtectedRoute>} />

                </Route>

                <Route>
                    <Route path='login' element={<Login setUser={setUser}></Login>} />
                </Route>

                <Route>
                    <Route path='/master/laporan/print/*' element={<PrintLaporan />} />

                </Route>
                <Route>
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter >

    );

}