import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import axios from 'axios'
import Swal from 'sweetalert2';

import { useSelector, useDispatch } from 'react-redux'
import {
    createsiswa, karyawandelete, updatesiswa
} from '../actions/Karyawan'

import { connect } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import Action from "../components/Action";
import * as  Icon from 'react-feather'
// import Action from "."
import Carilaporan from "../components/Carilaporan";
import FilterUser from "../components/FilterUser";
import * as Icons from "react-feather";

class User extends React.Component {
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
        axios.get(`${process.env.REACT_APP_API_URL}/v1/login`)
            .then(response => {
                console.log(response.data, 'detail data response')
                this.setState({ data: response.data?.data })
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

        const resdata = this.state.data.length > 0 ? this.state.data : []
        this.array = resdata.map(result => [result.username, result.level ? result.level.toUpperCase() : "Kosong", result.id])
        const columns = [
            { name: 'Username' }, { name: 'Level Akses' }, {
                name: "Action",
                options: {
                    filter: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                            <>
                                <button className="btn btn-danger btn-sm" onClick={() => {
                                    this.delete(tableMeta.rowData[2])
                                }} >
                                    Delete
                            </button>
                                <NavLink
                                    to={`/app/user/edit/${tableMeta.rowData[2]}`}
                                    className={'btn btn-primary btn-sm'}
                                >
                                    Edit
                          </NavLink>
                                {/* <Action url={`/app/karyawan/edit/${tableMeta.rowData[2]}`} title="Edit" classname="btn btn-warning btn-sm" /> */}
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
                        <h5>
                            <b><Icons.User />Data User Login </b>
                        </h5>
                        {/* <Carilaporan 
                        semester={this.semester} tahun_akademik={this.tahun_akademik} /> */}
                        <FilterUser semester={this.semester} tahun_akademik={this.tahun_akademik} />
                        <NavLink
                            to='/app/user/add'
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
export default User
