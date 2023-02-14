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


class FilterUser extends React.Component {
    constructor(props) {
        super(props)

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
                            }).catch(function (error) {
                                console.log(error, 'errorc')
                            })


                    }}
                >

                    {({ values, onSubmit, setFieldValue, errors }) => {
                        return (
                            <>

                                <br />

                                <Form>

                                    <Grid container spacing={2} columns={18}>
                                        <Grid xs={8}>
                                            <Masterdata
                                                setMasterdata={this.props.setMasterdata}
                                                name={'level_akses'}
                                                placeholder={'Pilih level akses'}
                                                id={'level'}
                                                setFieldValue={setFieldValue}
                                                fieldname={'level_akses'}
                                                multiple={false}
                                            />
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

export default FilterUser

