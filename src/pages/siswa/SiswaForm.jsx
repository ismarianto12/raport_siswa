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
    createsiswa, Updatedata
} from '../../actions/Siswa'
import * as Icon from 'react-feather'
import axios from 'axios'
import Masterdata from "../../components/Masterdata";


export default function SiswaForm() {

    const [reqdata, setReqdata] = useState([]);
    const [siswadata, setSiswadata] = useState({});
    const [action, setActon] = useState([])
    const [path, setPath] = useState('');
    const dispatch = useDispatch()
    const [kelamin, setKelamin] = useState();

    let params = useParams()
    let navigate = useNavigate()
    useEffect(() => {
        const pathnya = params['*'].split('/')
        setPath(pathnya)
        if (pathnya[0] === 'edit') {
            setActon('Edit')
            const IdgetParam = pathnya[1] ?? 0
            const getdetaildata = async (IdgetParam) => {
                const options = {
                    method: 'GET',
                    url: `${process.env.REACT_APP_API_URL}/v1/siswa/show/${IdgetParam}`,
                    headers: {
                        'Content-type': 'Application/json',
                    }
                }
                await axios(options)
                    .then(response => {
                        const datanya = response.data
                        return setReqdata(datanya)

                    }).catch(function (error) {
                        return setReqdata([])
                    })
            }

            getdetaildata(IdgetParam)
        } else {
            setActon('Tambah')
        }
        setSiswadata({
            nama: reqdata[0] ? reqdata[0].nama : '',
            nisn: reqdata[0] ? reqdata[0].nisn : '',
            jk: reqdata[0] ? reqdata[0].jk : '',
            alamat: reqdata[0] ? reqdata[0].alamat : '',
            ttl: reqdata[0] ? reqdata[0].ttl : '',
            kelas: reqdata[0] ? reqdata[0].kelas : '',
            tahun_masuk: reqdata[0] ? reqdata[0].tahun_masuk : '',
            nama_ibu: reqdata[0] ? reqdata[0].nama_ibu : '',
            nama_ayah: reqdata[0] ? reqdata[0].nama_ayah : ''
        })
    }, [])
    const back = () => {
        navigate('/master/siswa')
    }
    const options = ['Pria', 'Wanita']
    console.log(siswadata, 'datanya mas')
    return (
        <>
            <Formik
                initialValues={siswadata}
                enableReinitialize={true}
                validate={(values) => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values, { setFieldValue }) => {
                    setFieldValue('jk', kelamin)
                    if (action === 'Tambah') {
                        dispatch(createsiswa(values, navigate))
                    }
                    if (action === 'Edit') {
                        dispatch(Updatedata(values, path[1], navigate))
                    }
                }}
            >

                {({ values, onSubmit, setFieldValue, errors }) => {
                    return (
                        <>

                            <Form>
                                <div className="card card-body" style={{ 'backgrond': '#ffd', 'margin-left': '10px' }}>
                                    <Icon.Users /> {`${action} Siswa / Pelajar`}
                                    <hr />
                                    <Grid container spacing={2} columns={18}>
                                        <Grid xs={8}>
                                            <Field size={'small'}

                                                as={TextField}
                                                type="text"
                                                // label="nama"
                                                placeholder="Nama Siswa"
                                                margin="normal"
                                                name="nama"
                                                required
                                                fullWidth
                                                id="email"
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid xs={8}>
                                            <div style={{ 'marginTop': '15 px' }}>
                                                <Field size={'small'}
                                                    as={Autocomplete}
                                                    margin="normal"
                                                    fullWidth
                                                    name="jk"
                                                    onChange={(e, value) => {
                                                        console.log(value)
                                                        // setFieldValue('jk', )
                                                        setKelamin(value)
                                                    }}
                                                    id="controllable-states-demo"
                                                    options={options}
                                                    renderInput={(params) => <TextField {...params} value={kelamin} label="Jenis Kelamin" />}
                                                />
                                            </div>
                                        </Grid>

                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                type="text"
                                                placeholder="Nisn Siswa"
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
                                                placeholder='Alamat tempat tinggal'
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
                                                placeholder="Tempat tanggal lahir"
                                                name="ttl"
                                                autoComplete="email"
                                                autoFocus

                                            />

                                        </Grid>

                                        <Grid xs={8}>
                                            {/* <Field size={'small'}
                                                as={TextField}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                placeholder="Kelas"
                                                name="kelas"
                                                autoComplete="email"
                                                autoFocus
                                            /> */}


                                            <Masterdata

                                                name={'kelas'}
                                                placeholder={'Kelas'}
                                                id={'kelas'}
                                                // value={}
                                                setFieldValue={setFieldValue}
                                                fieldname={'kelas'}
                                                multiple={false}
                                            />
                                        </Grid>

                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                placeholder="Tahun Masuk"
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
                                                placeholder="Nama Ibu"
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