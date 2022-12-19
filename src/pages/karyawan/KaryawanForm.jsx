import Karyawantable from "../../components/karyawan";
import { useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import { Formik } from 'formik'
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Autocomplete from '@mui/material/Autocomplete';


export default function KaryawanForm() {

    const [reqdata, setReqdata] = useState([]);
    const [karyawandata, setkaryawandata] = useState({});
    const [action, setActon] = useState('')

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
        navigate('/app/karyawan')
    }

    const options = ['Pria', 'Wanita'];
    return (
        <>
            <Formik
                initialValues={karyawandata}
                validate={(values) => {
                    const errors = {};
                    // if (!values.comboboxField) {
                    //     errors.comboboxField = 'Required';
                    // }
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

                {({ handleSubmit, errors }) => {
                    console.log(errors)

                    return (
                        <>
                            <div className="card card-body" style={{ 'backgrond': '#ffd', 'margin-left': '10px' }}>
                                {`${action} Pegawai`}
                                <Grid container spacing={2} columns={18}>
                                    <Grid xs={8}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Nama"
                                            name="nama"
                                            autoComplete="email"
                                            autoFocus

                                        />

                                    </Grid>
                                    <Grid xs={8}>
                                        <Autocomplete
                                            margin="normal"
                                            fullWidth
                                            value={null}
                                            id="controllable-states-demo"
                                            options={options}
                                            renderInput={(params) => <TextField {...params} label="Jenis Kelamin" />}
                                        />
                                    </Grid>

                                    <Grid xs={8}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Alamat"
                                            name="alamat"
                                            autoComplete="email"
                                            autoFocus

                                        />

                                    </Grid>
                                    <Grid xs={8}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label='Status Kepegawaian'
                                            name="status_pegawai"
                                            autoComplete="email"
                                            autoFocus

                                        />

                                    </Grid>

                                    <Grid xs={8}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="NIK"
                                            name="nik"
                                            autoComplete="email"
                                            autoFocus

                                        />

                                    </Grid>

                                    <Grid xs={8}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="NIP"
                                            name="nip"
                                            autoComplete="email"
                                            autoFocus

                                        />

                                    </Grid>

                                    <Grid xs={8}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus

                                        />


                                    </Grid>
                                    <Grid xs={8}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="No Hanphone  "
                                            name="hp"
                                            autoComplete="email"
                                            autoFocus

                                        />


                                    </Grid>

                                </Grid>
                                <Container component="main" maxWidth="xs">

                                    <Button
                                        type="submit"
                                        fullWidth
                                        color="primary"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Simpan data
            </Button>

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
                            </div>
                        </>
                    )
                }}
            </Formik>
        </>
    );
}