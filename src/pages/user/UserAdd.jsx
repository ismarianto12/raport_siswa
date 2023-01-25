import Karyawantable from "../../components/karyawan";
import { useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'


import TextField from '@mui/material/TextField'

import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import { Form, Formik, Field } from 'formik'
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import Autocomplete from '@mui/material/Autocomplete'
import Masterdata from '../../components/Masterdata'
import axios from 'axios'
import Swal from "sweetalert2";
import * as Icons from 'feather-icons'
import Alert from '@mui/material/Alert'
export default function UserAdd() {
    const [reqdata, setReqdata] = useState([]);
    const [karyawandata, setkaryawandata] = useState();
    const [action, setActon] = useState([])
    const [jk, setJk] = useState('');
    const [status, setStatus] = useState('')
    const [level, setLevel] = useState('')
    const [akseslevel, setAkseslevel] = useState('')
    const [masterdata, setMasterdata] = useState('')

    let params = useParams()
    let navigate = useNavigate()
    useEffect(() => {
        const pathnya = params['*'].split('/')
        console.log(pathnya[0])
        if (pathnya === 'edit') {
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

    }, [])


    const back = () => {
        navigate('/app/user')
    }

    const options = ['Pria', 'Wanita'];
    const status_peg = ['PNS', 'HONORER'];

    const level_aksesdata = [
        { 'id': 'admin', 'label': 'Administrator' },
        { 'id': 'tata_usaha', 'label': 'Tata Usaha' },
        { 'id': 'guru', 'label': 'Guru' },
        { 'id': 'walikelas', 'label': 'Wali Kelas' },
        { 'id': 'siswa', 'label': 'Siswa' },
    ]

    return (
        <>
            <Formik
                initialValues={
                    {
                        // username: '',
                        // fk_id: '',
                        // password: '',
                        // // level: '',
                        // email: ''
                    }
                }
                validate={(values) => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values, { setFieldValue }) => {
                    console.log(values)
                    const options = {
                        method: 'POST',
                        data: JSON.parse(JSON.stringify(values)),
                        url: `${process.env.REACT_APP_API_URL}/v1/login/insert`,
                        headers: {
                            'Content-type': 'Application/json',
                        }
                    }
                    axios(options)
                        .then(response => {
                            navigate('/app/user')

                        }).catch(function (error) {
                            console.log(error)
                        })
                }}
            >

                {({ values, onSubmit, errors, setFieldValue, getFieldValue }) => {
                    console.log(akseslevel, 'akses master')

                    if (level === 'admin') {
                        setAkseslevel('pegawai_login')
                    } else if (level === 'tata_usaha') {
                        setAkseslevel('pegawai_login')
                    } else if (level === 'guru') {
                        setAkseslevel('pegawai_login')
                    } else if (level === 'siswa') {
                        setAkseslevel('siswa')
                    } else if (level === 'walikelas') {
                        setAkseslevel('pegawai_login')
                    }
                    return (
                        <>
                            <Form>
                                <div className="card card-body" style={{ 'backgrond': '#ffd', 'margin-left': '10px' }}>
                                    {`${action} User`}
                                    <hr />
                                    {level && <Alert severity="success">Level Akses {level}</Alert>}
                                    <Grid container spacing={2} columns={18}>
                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                type="text"
                                                label="Username"
                                                margin="normal"
                                                name="username"
                                                required
                                                fullWidth
                                                id="email"
                                                value={masterdata}
                                                autoFocus
                                                inputProps={
                                                    { readOnly: true, }
                                                }
                                            />
                                        </Grid>

                                        <Grid xs={8}>
                                            <div style={{ 'marginTop': '16px' }}>
                                                <Field size={'small'}
                                                    as={Autocomplete}
                                                    margin="normal"
                                                    fullWidth
                                                    name="level_akses"
                                                    onChange={(e, value) => {
                                                        setAkseslevel('')
                                                        setLevel(value.id)

                                                    }}
                                                    id="controllable-states-demo"
                                                    options={level_aksesdata}
                                                    renderInput={(params) => <TextField {...params} value={level} label="Level akses" />}
                                                />
                                            </div>
                                        </Grid>


                                        {/* {console.log(akseslevel.length > 0, 'console detail')} */}

                                        {
                                            akseslevel.length > 0 ?

                                                <Grid xs={8}>
                                                    <div style={{ 'marginTop': '15px' }}>
                                                        <Masterdata
                                                            name={`${akseslevel}`}
                                                            placeholder={`${akseslevel} Pilih`}
                                                            id={`${akseslevel}`}
                                                            setFieldValue={setFieldValue}
                                                            fieldname={`${akseslevel}`}
                                                            multiple={false}
                                                            setMasterdata={setMasterdata}
                                                        />
                                                    </div>
                                                </Grid>
                                                : ''
                                        }


                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="password"
                                                label="Password"
                                                name="password"
                                                autoComplete="text"
                                                autoFocus
                                                type="password"

                                            />

                                        </Grid>

                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="ulangin_password"
                                                label="Ulangi Password"
                                                name="ulangin_password"
                                                autoComplete="email"
                                                autoFocus
                                                type="password"

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