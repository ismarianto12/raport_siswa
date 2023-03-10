import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import axios from 'axios'
import Swal from 'sweetalert2';

import { useSelector, useDispatch } from 'react-redux'
import {
    createsiswa, deletesiswa, updatesiswa
} from '../actions/Siswa'
import { connect } from 'react-redux'
import Action from './Action'
import { NavLink } from 'react-router-dom'


class TableRaport extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.array = [];
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
        axios.get(`${process.env.REACT_APP_API_URL}/v1/siswa`)
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

        this.array = this.state.data.map(result => [result.nama, result.jk, result.nisn, result.kelas, result.tahun_masuk, result.id]);
        const columns = [
            { name: 'Nama' }, { name: 'J/K' }, { name: 'NISN' }, { name: 'Kelas' }, { name: 'Tahun Masuk' }, {
                name: "Action",
                options: {
                    filter: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                            <>
                                <button className="btn btn-danger btn-sm" onClick={() => {
                                    this.delete(tableMeta.rowData[5])
                                }} >
                                    Delete
                            </button>
                                <Action url={`/master/siswa/edit/${tableMeta.rowData[5]}`} title="Edit" classname="btn btn-warning btn-sm" />
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
            <MUIDataTable
                title={
                    <>
                        <p>Data Penilaian siswa</p>
                        <br />
                        <NavLink to={`/app/raport/add/`} className="btn btn-primary">Tambah Penilaian</NavLink>
                    </>
                }
                data={datanya}
                columns={columns}
                options={options}
            />
        );
    }
}
const mapDispatchToProps = dispatch => ({
    deletesiswa: e => {
        dispatch(deletesiswa(e));
    }
});

export default connect(null, mapDispatchToProps)(TableRaport)
