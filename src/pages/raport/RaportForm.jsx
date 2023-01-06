import Karyawantable from "../../components/karyawan";
import { useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'


import TextField from '@mui/material/TextField'

import TextareaAutosize from '@mui/base/TextareaAutosize';

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
import Textarea from "../../components/Textarea";
import Swal from "sweetalert2";


export default function RaportForm() {

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
            kelas: reqdata.kelas,
            id_siswa: reqdata.id_siswa,
            nilai: reqdata.nilai,
            mapel: reqdata.mapel,
            nilai_kehadiran: reqdata.nilai_kehadiran,
            catatan_penilaian: reqdata.catatan_penilaian,
        })
    }, [])
    const back = () => {
        navigate('/app/raport')
    }
    const options = ['Pria', 'Wanita']
    return (
        <>
            <Formik
                initialValues={siswadata}
                enableReinitialize={true}
                validate={(values) => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={async (values, { setFieldValue }) => {
                    setReqdata(values)
                    console.log(values, 'nilai raport')

                    const options = {
                        method: 'POST',
                        data: JSON.parse(JSON.stringify(values)),
                        url: `${process.env.REACT_APP_API_URL}/v1/raport/save`,
                        headers: {
                            'Content-type': 'Application/json',
                        }
                    }
                    await axios(options)
                        .then(response => {
                            Swal.fire('Success', `Siswa ${response.data.nama} di simpan`, 'success')
                            navigate('persentase/penilaian')
                        }).catch(function (error) {
                            // console.log(error, 'errorc')
                        })


                }}
            >

                {({ values, onSubmit, setFieldValue, errors }) => {
                    return (
                        <>

                            <Form>
                                <div className="card card-body" style={{ 'backgrond': '#ffd', 'margin-left': '10px' }}>
                                    <Icon.Users /> {`${action} Penilaian`}
                                    <hr />
                                    <Grid container spacing={2} columns={18}>
                                        <Grid xs={8}>
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
                                            <div style={{ 'marginTop': '15 px' }}>
                                                <Masterdata
                                                    name={'id_siswa'}
                                                    placeholder={'Siswa'}
                                                    id={'siswa'}
                                                    setFieldValue={setFieldValue}

                                                    fieldname={'siswa'}
                                                    multiple={false}
                                                />

                                            </div>
                                        </Grid>

                                        <Grid xs={8}>
                                            <Masterdata
                                                name={'nilai'}
                                                placeholder={'Pilih Nilai'}
                                                id={'nilai'}
                                                setFieldValue={setFieldValue}

                                                fieldname={'nilai'}
                                                multiple={false}
                                            />

                                        </Grid>
                                        <Grid xs={8}>
                                            <Masterdata
                                                name={'mapel'}
                                                placeholder={'Mata Pelajaran'}
                                                id={'mapel'}
                                                setFieldValue={setFieldValue}

                                                fieldname={'mapel'}
                                                multiple={false}
                                            />
                                        </Grid>


                                    </Grid>
                                    <br />
                                    <h4>Status penilaian</h4>
                                    <hr />

                                    <Grid container spacing={2} columns={18}>

                                        <Grid xs={8}>
                                            <Masterdata
                                                name={'nilai_kehadiran'}
                                                placeholder={'Pilih Nilai'}
                                                id={'nilai_kehadiran'}
                                                fieldname={'nilai'}
                                                setFieldValue={setFieldValue}

                                                multiple={false}
                                            />

                                        </Grid>

                                        <Grid xs={8}>
                                            <Masterdata
                                                name={'nilai_tugas'}
                                                placeholder={'Nilai Tugas'}
                                                id={'nilai_tugas'}
                                                fieldname={'nilai'}
                                                setFieldValue={setFieldValue}
                                                multiple={false}
                                            />

                                        </Grid>

                                        <Grid xs={8}>

                                            <p>Catatan Penilaian yang di perlukan </p>
                                            

                                            <Field size={'small'}
                                                onChange={(e) => setFieldValue('catatan_penilaian', e.target.value)
                                                }
                                                as={Textarea}
                                                type="text"
                                                label="Catatan Penilaian"
                                                margin="normal"
                                                name="catatan_penilaian"
                                                required
                                                fullWidth
                                                id="email"
                                                autoFocus
                                            />


                                        </Grid>
                                    </Grid>
                                    <hr />
                                    <Container component="main" maxWidth="xs">

                                        <Button
                                            type="submit"
                                            color="primary"
                                            onSubmit={onSubmit}
                                            variant="contained"
                                        >
                                            Simpan
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