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
import { useSelector, useDispatch } from 'react-redux'
import {
    createsiswa, updatesiswa
} from '../../actions/Siswa'


export default function SiswaForm() {

    const [reqdata, setReqdata] = useState([]);
    const [karyawandata, setkaryawandata] = useState();
    const [action, setActon] = useState([])
    const dispatch = useDispatch()


    let params = useParams()
    let navigate = useNavigate()


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
        navigate('/master/siswa')
    }
    const options = ['Pria', 'Wanita'];
    return (
        <>
            <Formik
                initialValues={
                    {
                        nama: '',
                        nisn: '',
                        jk: '',
                        alamat: '',
                        ttl: '',
                        kelas: '',
                        tahun_masuk: '',
                        nama_ibu: '',
                        nama_ayah: '',
                    }
                }
                validate={(values) => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values) => {
                    const app = dispatch(createsiswa(values))
                    navigate('/master/siswa')
                    console.log(app, 'asdada')

                }}
            >

                {({ values, onSubmit, errors }) => {

                    return (
                        <>

                            <Form>
                                <div className="card card-body" style={{ 'backgrond': '#ffd', 'margin-left': '10px' }}>
                                    {`${action} Siswa / Pelajar`}
                                    <hr />
                                    <Grid container spacing={2} columns={18}>
                                        <Grid xs={8}>
                                            <Field size={'small'}

                                                as={TextField}
                                                type="text"
                                                label="nama"
                                                margin="normal"
                                                name="nama"
                                                required
                                                fullWidth
                                                id="email"
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={Autocomplete}
                                                margin="normal"
                                                fullWidth
                                                name="jk"
                                                value={null}
                                                id="controllable-states-demo"
                                                options={options}
                                                renderInput={(params) => <TextField {...params} label="Jenis Kelamin" />}
                                            />
                                        </Grid>

                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                type="text"
                                                label="Nisn Siswa"
                                                margin="normal"
                                                name="nisn"
                                                required
                                                fullWidth
                                                id="email"
                                                autoFocus
                                            />

                                        </Grid>
                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label='Alamat tempat tinggal'
                                                name="alamat"
                                                autoComplete="email"
                                                autoFocus

                                            />

                                        </Grid>

                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Tempat tanggal lahir"
                                                name="ttl"
                                                autoComplete="email"
                                                autoFocus

                                            />

                                        </Grid>

                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Kelas"
                                                name="kelas"
                                                autoComplete="email"
                                                autoFocus

                                            />

                                        </Grid>

                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Tahun Masuk"
                                                name="tahun_masuk"
                                                autoComplete="email"
                                                autoFocus

                                            />


                                        </Grid>
                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="text"
                                                label="Nama Ibu"
                                                name="nama_ibu"
                                                autoComplete="email"
                                                autoFocus

                                            />

                                        </Grid>

                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="text"
                                                label="Nama Ayah"
                                                name="nama_ayah"
                                                autoComplete="email"
                                                autoFocus
                                            />

                                        </Grid>

                                    </Grid>
                                    <hr />
                                    <Container component="main" maxWidth="xs">

                                        <Button
                                            type="submit"
                                            // fullWidth
                                            color="primary"
                                            onSubmit={onSubmit}
                                            variant="contained"
                                        // sx={{ mt: 5, mb: 2 }}
                                        >
                                            Simpan data
            </Button>
&nbsp;
                                        <Button
                                            type="submit"
                                            // fullWidth
                                            onClick={back}
                                            color="secondary"
                                            variant="contained"
                                        >
                                            Batal
            </Button>
                                    </Container>
                                </div>
                            </Form>


                        </>
                    )
                }}
            </Formik>
        </>
    );
}