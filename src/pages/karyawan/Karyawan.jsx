import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import axios from 'axios'
import Swal from 'sweetalert2';

import { useSelector, useDispatch } from 'react-redux'
import {
    createsiswa, karyawandelete, updatesiswa
} from '../../actions/Karyawan'

import { connect } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import Action from "../../components/Action";

class Karyawan extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.array = [];
    }
    componentDidMount() {
        this.fetdata()
    }
    componentWillUnmount() {
        this.fetdata()
    }
    fetdata() {
        const datanya = [];
        const data_row_array = [];
        axios.get(`${process.env.REACT_APP_API_URL}/v1/pegawai`)
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
                this.karyawandelete(e)
                this.fetdata()
            }
        })
    }
    async karyawandelete(id) {
        const config = {
            url: `${process.env.REACT_APP_API_URL}/v1/pegawai/delete/${id}`,
            data: {
                id: id
            },
            method: 'post',
            headers: {
                'Content-type': 'Application/json',
            }

        }
        await axios(config).then(r => {
            this.fetdata()
        }).catch(function (error) {
            console.log(error)
        })
    }



    render() {


        this.array = this.state.data.map(result => [result.nama, result.jk, result.nip, result.status_pegawai, result.tahun_masuk, result.id]);
        const columns = [
            { name: 'Nama' }, { name: 'J/K' }, { name: 'NIP' }, { name: 'Status Pegawai' }, { name: 'Tahun Masuk' }, {
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
                                <Action url={`/app/karyawan/edit/${tableMeta.rowData[5]}`} title="Edit" classname="btn btn-warning btn-sm" />
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
                        <br />
                        <center>
                            <b>Data Master Guru</b>
                        </center>
                        <br />
                        <NavLink
                            to='/app/karyawan/add'
                            className={'btn btn-primary'}
                        >
                            Tambah data
    </NavLink>
                    </>

                }
                data={datanya}
                columns={columns}
                options={options}
            />
        );
    }
}
// const mapDispatchToProps = dispatch => ({
//     karyawandelete: e => {
//         dispatch(karyawandelete(e));
//     }
// });
export default Karyawan
