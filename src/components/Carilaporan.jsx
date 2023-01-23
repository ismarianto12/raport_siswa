import React from 'react'
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
import * as Icon from 'react-feather'
import axios from 'axios'
import Masterdata from "../components/Masterdata";
import Swal from "sweetalert2";


class Carilaporan extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''

        }
    }


    render() {
        return (

            <>
                <Formik
                    initialValues={{
                        tahun_akademik: '',
                        semester: ''
                    }}
                    enableReinitialize={true}
                    validate={(values) => {
                        const errors = {};
                        return errors;
                    }}
                    onSubmit={async (values, { setFieldValue }) => {
                        // setReqdata(values)
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
                                // navigate('/app/raport')
                            }).catch(function (error) {
                                console.log(error, 'errorc')
                            })


                    }}
                >

                    {({ values, onSubmit, setFieldValue, errors }) => {
                        return (
                            <>

                                <Form>
                                    <Icon.Users /> {`Penilaian`}
                                    <hr />
                                    <Grid container spacing={2} columns={18}>
                                        <Grid xs={8}>
                                            <Masterdata

                                                name={'semester'}
                                                placeholder={'Pilih Semester'}
                                                id={'semester'}
                                                setFieldValue={setFieldValue}
                                                fieldname={'semester'}
                                                multiple={false}
                                            />
                                        </Grid>
                                        <Grid xs={8}>
                                            <div style={{ 'marginTop': '15 px' }}>
                                                <Masterdata
                                                    name={'tahun_akademik'}
                                                    placeholder={'Tahun Akademik'}
                                                    id={'tahun_akademik'}
                                                    setFieldValue={setFieldValue}
                                                    fieldname={'tahun_akademik'}
                                                    multiple={false}
                                                />

                                            </div>
                                        </Grid>



                                    </Grid>
                                    <br />
                                </Form>


                            </>
                        )
                    }}
                </Formik>
            </>
        )
    }
}

export default Carilaporan

