import React, { Component } from 'react'
import axios from 'axios'
//  import /
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'
import { Form, Formik, Field, swap } from 'formik'
import Swal from 'sweetalert2';


class Masterdata extends React.Component {

    constructor(props) {
        super(props)

        this.name = this.props.name
        this.placeholder = this.props.placeholder
        this.id = this.props.id
        this.fieldname = this.props.fieldname
        this.multiple = this.props.multiple
        this.setFieldValue = this.props.setFieldValue


        this.state = {
            data: [],
            loading: true,
            error: '',
            datacomp: ''
        }
    }

    componentDidMount() {
        console.log(`${process.env.REACT_APP_API_URL}/v1/${this.fieldname}`, 'detail datanya')
        this.callapi(this.props)

    }
    componentDidUpdate() {
        // this.callapi(this.props)
    }
    callapi = async () => {
        this.setState({
            loading: true,
        })
        const payload = {
            parameter: this.props.parameter,
            id: this.props.id
        }
        const backurl = this.fieldname === 'pegawai_login' ? 'pegawai' : this.fieldname
        const options = {
            method: 'GET',
            data: JSON.parse(JSON.stringify(payload)),
            url: `${process.env.REACT_APP_API_URL}/v1/${backurl}`,
            headers: {
                'Content-type': 'Application/json',
            }
        }
        await axios(options)
            .then(response => {
                const datanya = response?.data
                const dataapp = datanya?.length > 0 ?
                    datanya?.map((a, j) => {
                        if (this.fieldname === 'siswa') {
                            return ({
                                'value': a.id, 'label': `${a.nama} - ${a.nisn}`
                            })

                        } else if (this.fieldname === 'mapel') {
                            return ({
                                'value': a.id, 'label': `${a.kode} - ${a.mapel}`
                            })
                        } else if (this.fieldname === 'siswa') {
                            return ({
                                'value': a.id, 'label': `${a.nama} - ${a.nisn}`
                            })
                        }
                        else if (this.fieldname === 'kelas') {
                            return ({
                                'value': a.id, 'label': `${a.kelas} - ${a.kode}`
                            })
                        } else if (this.fieldname === 'pegawai') {
                            return ({
                                'value': a?.id, 'label': `${a?.nama} - ${a?.nip}`
                            })
                        } else if (this.fieldname === 'pegawai_login') {
                            return ({
                                'value': a?.nip, 'label': `${a?.nama} - ${a?.nip}`
                            })

                        } else if (this.fieldname === 'level_akses') {
                            return ({
                                'value': a?.id, 'label': `${a?.label}`
                            })
                        } else {
                            return ({
                                'value': a.id, 'label': a.name
                            })
                        }
                    }) :
                    ({
                        'value': '', 'label': ''
                    })

                this.setState({
                    data: dataapp ? dataapp : [],
                    loading: false,
                })
            }).catch(function (error) {
                return ({
                    'value': '', 'label': ''
                })
            })

    }


    render() {

        return (
            <>

                { this.props.setMasterdata ?
                    <Field
                        {...this.props}
                        size={'small'}
                        as={Autocomplete}
                        margin="normal"
                        fullWidth
                        name={this.props.name} s
                        onChange={(e, value) => {

                            this.props.setMasterdata(value.value)
                            this.setFieldValue(`${this.name}`, value.value)
                        }}
                        id="controllable-states-demo"
                        options={this.state.data.length > 0 ? this.state.data : []}
                        renderInput={(params) => <TextField {...params} value={this.state.datacomp?.value} label={`${this.placeholder}`} />}
                    />

                    :

                    <Field
                        {...this.props}
                        size={'small'}
                        as={Autocomplete}
                        margin="normal"
                        fullWidth
                        name={this.props.name} s
                        onChange={(e, value) => {
                            this.setFieldValue(`${this.name}`, value.value)
                        }}
                        id="controllable-states-demo"
                        options={this.state.data.length > 0 ? this.state.data : []}
                        renderInput={(params) => <TextField {...params} value={this.state.datacomp?.value} label={`${this.placeholder}`} />}
                    />

                }
            </>

        )
    }
}
export default Masterdata