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
import Masterdata from '../../components/Masterdata'
import axios from 'axios'


export default function KaryawanForm() {

    const [reqdata, setReqdata] = useState([]);
    const [karyawandata, setkaryawandata] = useState();
    const [action, setActon] = useState([])
    const [jk, setJk] = useState('');
    const [status, setStatus] = useState('');
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
    const status_peg = ['PNS', 'HONORER', 'KEPALA SEKOLAH'];

    return (
        <>
            <Formik
                initialValues={
                    {
                        nama: '',
                        jk: '',
                        alamat: '',
                        level: '',
                        status_pegawai: ''
                    }
                }
                validate={(values) => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values, { setFieldValue }) => {
                    setFieldValue('jk', jk)

                    const options = {
                        method: 'POST',
                        data: JSON.parse(JSON.stringify(values)),
                        url: `${process.env.REACT_APP_API_URL}/v1/pegawai/insert`,
                        headers: {
                            'Content-type': 'Application/json',
                        }
                    }
                    axios(options)
                        .then(response => {
                            navigate('/app/karyawan')

                        }).catch(function (error) {
                            console.log(error)
                        })


                }}
            >

                {({ values, onSubmit, errors, setFieldValue }) => {

                    return (
                        <>
                            <Form>
                                <div className="card card-body" style={{ 'backgrond': '#ffd', 'margin-left': '10px' }}>
                                    {`${action} Pegawai`}
                                    <hr />
                                    <Grid container spacing={2} columns={18}>
                                        <Grid xs={8}>
                                            <Field size={'small'}

                                                as={TextField}
                                                type="text"
                                                label="Nama Guru"
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
                                                onChange={(e, val) => {
                                                    setJk(val)
                                                }
                                                }
                                                value={jk}
                                                id="controllable-states-demo"
                                                options={options}
                                                renderInput={(params) => <TextField {...params} label="Jenis Kelamin" />}
                                            />
                                        </Grid>


                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={Autocomplete}
                                                margin="normal"
                                                fullWidth
                                                onChange={(e, val) => {
                                                    setStatus(val)
                                                }
                                                }
                                                name="status_pegawai"
                                                value={status}
                                                id="controllable-states-demo"
                                                options={status_peg}
                                                renderInput={(params) => <TextField {...params} label="Status Kepegawaian" />}
                                            />
                                        </Grid>


                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
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
                                            <Field size={'small'}
                                                as={TextField}
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
                                            <Field size={'small'}
                                                as={TextField}
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
                                            <Field size={'small'}
                                                as={TextField}
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