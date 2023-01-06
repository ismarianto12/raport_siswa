import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import axios from 'axios'
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2'
import {
    createsiswa, deletesiswa, updatesiswa
} from '../actions/Siswa'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet";
import Action from "../components/Action";
import Masterdata from '../components/Masterdata'
import { Form, Formik, Field } from 'formik'
import SearchRaport from "./SearchRaport"
import * as  Icon from 'react-feather'


class Tablelaporan extends React.Component {
    constructor(props) {
        super(props);
        this.semester = ''
        this.kelas = ''

        this.state = {
            data: [],
            array: []
        }
    }
    componentDidMount() {
        this.fetdata()
    }
    componentDidUpdate() {
        this.fetdata()
    }

    fetdata() {
        const datanya = [];
        const data_row_array = [];
        axios.get(`${process.env.REACT_APP_API_URL}/v1/mapel`)
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }


    delete = async (e) => {
        return Swal.fire({
            title: 'Kamu yakin ?',
            text: "Hapus data ini",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.deletesiswa(e)
                this.fetdata()
            }
        })
    }
    render() {

        this.array = this.state.data.map(result => [result.kode, result.mapel, result.kkm, result.kurikulum, result.kurikulum, result.id]);
        const columns = [
            { name: 'Nama' }, { name: 'NISN' }, { name: 'JK' }, { name: 'Rerata' }, { name: 'Semester' }, {
                name: "Action",
                options: {
                    filter: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                            <>
                                <Action blank={true} url={`/master/laporan/print/${tableMeta.rowData[5]}`} title={`Print data`} classname="btn btn-warning btn-sm" />
                                <Action url={`/master/laporan/requestnilai/${tableMeta.rowData[5]}`} title={`Ubah Penilaian`} classname="btn btn-info btn-sm" />
                            </>
                        );
                    }

                }
            }
        ]
        const options = {
            filter: true,
            filterType: "dropdown",
            responsive: "",
            selectableRows: false
        };

        const datanya = this.array
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`Mata Pelajaran`}</title>
                </Helmet>
                <MUIDataTable
                    title={
                        <>

                            <p><Icon.List />{`Silahkan pilih data penilaian seusuai semester`}</p>
                            {/* <SearchRaport
                                semester={this.semester}
                                kelas={this.kelas}

                            /> */}
                        </>
                    }
                    data={datanya}
                    columns={columns}
                    options={options}
                />

            </>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    deletesiswa: e => {
        dispatch(deletesiswa(e));
    }
});

export default connect(null, mapDispatchToProps)(Tablelaporan)
