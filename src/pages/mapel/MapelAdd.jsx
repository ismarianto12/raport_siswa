import Karyawantable from "../../components/karyawan";
import { useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'


import TextField from '@mui/material/TextField'

import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import { Form, Formik, Field } from 'formik'
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import {
    createmapel, updatemapel
} from '../../actions/Mapel'
import Masterdata from "../../components/Masterdata";


export default function MapelAdd() {

    const [reqdata, setReqdata] = useState([]);
    const [karyawandata, setkaryawandata] = useState();
    const [action, setActon] = useState([])

    let params = useParams()
    let navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        const pathnya = params['*'].split('/')
        console.log(pathnya[0])
        if (pathnya == 'edit') {
            setActon('Edit')
        } else {
            setActon('Tambah Data')
        }

        const karyawan = {
            nama: reqdata.nama,
            jk: reqdata.jk,
            alamat: reqdata.alamat,
            level: reqdata.level,
            status_pegawai: reqdata.status_pegawai
        }
        setkaryawandata(karyawan)
        console.log(karyawandata, 'data karyawan')
    }, []);

    const back = () => {
        navigate('/app/karyawan')
    }

    const options = ['Pria', 'Wanita'];
    return (
        <>
            <Formik
                initialValues={
                    {
                        id_pegawai: '',
                        kode: '',
                        mapel: '',
                        kkm: '',
                        kurikulum: '',
                    }
                }
                validate={(values) => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values) => {
                    // console.log(values, 'formik value get ..')
                    toast('🦄 Data berhasil di simpan!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    dispatch(createmapel(values))
                    navigate('/master/mapel')

                }}
            >

                {({ values, onSubmit, errors }) => {

                    return (
                        <>
                            <Form>
                                <div className="card card-body" style={{ 'backgrond': '#ffd', 'margin-left': '10px' }}>
                                    {`${action} Mata Pelajaran`}
                                    <hr />
                                    <Grid container spacing={2} columns={18}>
                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                type="text"
                                                label="kode"
                                                margin="normal"
                                                name="kode"
                                                required
                                                fullWidth
                                                id="email"
                                                autoFocus
                                            />
                                        </Grid>


                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                type="text"
                                                label="Mata Pelajaran"
                                                margin="normal"
                                                name="mapel"
                                                required
                                                fullWidth
                                                autoFocus
                                            />

                                        </Grid>
                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                margin="kkm"
                                                required
                                                fullWidth
                                                id="kkm"
                                                label='KKM Mata Pelajaran'
                                                name="kkm"
                                                autoComplete="email"
                                                autoFocus

                                            />

                                        </Grid>
                                        <Grid xs={8}>
                                            <Masterdata
                                                name={`pengampu`}
                                                placeholder={'Pilih guru pengampu'}
                                                id={`id_pengampu`}
                                                multiple={true}
                                                fieldname={'pegawai'} />
                                        </Grid>

                                        <hr />
                                        <br /><br />                                        <br /><br />                                        <br /><br />

                                        <Container component="main" maxWidth="xs">

                                            <Button
                                                type="submit"
                                                color="primary"
                                                onSubmit={onSubmit}
                                                variant="contained"
                                            // sx={{ mt: 5, mb: 2 }}
                                            >
                                                Save
            </Button>
&nbsp;
                                        <Button
                                                type="submit"
                                                fullWidth
                                                onClick={back}
                                                color="secondary"
                                                variant="contained"
                                            >
                                                Batal
            </Button>
                                        </Container>
                                    </Grid>
                                </div>
                            </Form>
                        </>
                    )
                }}
            </Formik>
            <ToastContainer />

        </>
    );
}