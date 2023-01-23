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
import Masterdata from "../../components/Masterdata";
import axios from 'axios'

export default function KelasForm() {

    const [reqdata, setReqdata] = useState([]);
    const [karyawandata, setkaryawandata] = useState();
    const [action, setActon] = useState([])

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
        navigate('/app/kelas')
    }

    const options = ['Pria', 'Wanita'];
    return (
        <>
            <Formik
                initialValues={
                    {
                        kelas: '',
                        kode: '',
                        id_pegawai: '',
                    }
                }
                validate={(values) => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={async (values) => {
                    const options = {
                        method: 'POST',
                        data: JSON.parse(JSON.stringify(values)),
                        url: `${process.env.REACT_APP_API_URL}/v1/kelas/insert`,
                        headers: {
                            'Content-type': 'Application/json',
                        }
                    }
                    await axios(options)
                        .then(response => {
                            console.log(response)
                            navigate('/app/kelas')

                        }).catch(function (error) {
                            console.log(error)
                        })

                }}
            >

                {({ values, onSubmit, errors }) => {

                    return (
                        <>
                            <Form>
                                <div className="card card-body" style={{ 'backgrond': '#ffd', 'margin-left': '10px' }}>
                                    {`${action} Master Kelas`}
                                    <hr />
                                    <Grid container spacing={2} columns={18}>
                                        <Grid xs={8}>
                                            <Field size={'small'}

                                                as={TextField}
                                                type="text"
                                                label="Nama Kelas"
                                                margin="normal"
                                                name="kelas"
                                                required
                                                fullWidth
                                                id="kelas"
                                                autoFocus
                                            />
                                        </Grid>


                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                type="text"
                                                label="Kode"
                                                margin="normal"
                                                name="kode"
                                                required
                                                fullWidth
                                                id="kode"
                                                autoFocus
                                            />

                                        </Grid>
                                        <Grid xs={8}>
                                            <Field size={'small'}
                                                as={TextField}
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="deskripsi"
                                                label='Deskripsi'
                                                name="desc"
                                                autoComplete="email"
                                                autoFocus

                                            />

                                        </Grid>
                                        <Grid xs={8}>
                                            <div style={{ 'marginTop': '15px' }}>
                                                <Masterdata
                                                    name={`id_pegawai`}
                                                    placeholder={'Pilih Wali kelas'}
                                                    id={`id_pegawai`}
                                                    multiple={true}
                                                    fieldname={'pegawai'} />
                                            </div>
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