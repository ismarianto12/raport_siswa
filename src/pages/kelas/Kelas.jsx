import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import axios from 'axios'
import Swal from 'sweetalert2';

import { useSelector, useDispatch } from 'react-redux'
import {
    createsiswa, deletesiswa, updatesiswa
} from '../../actions/Siswa'
import { connect } from 'react-redux'
import Action from "../../components/Action"
import { NavLink } from 'react-router-dom'


class Karyawan extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.array = [];
    }
    componentDidMount() {
        this.fetdata()
    }
    componentDidUpdate() {
        // this.fetdata()
    }


    async kelasDelete(id) {
        const options = {
            method: 'POST',
            data: JSON.parse(JSON.stringify(id)),
            url: `${process.env.REACT_APP_API_URL}/v1/kelas/delete/${id}`,
            headers: {
                'Content-type': 'Application/json',
            }
        }
        await axios(options)
            .then(response => {
                this.fetdata()
            }).catch(function (error) {
                console.log(error)
            })
    }
    fetdata() {
        const datanya = [];
        const data_row_array = [];
        axios.get(`${process.env.REACT_APP_API_URL}/v1/kelas`)
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
                this.kelasDelete(e)
                this.fetdata()
            }
        })
    }
    render() {

        this.array = this.state.data.map(result => [result.kelas, result.kode, result.nama ?? 'Kosong', result.id_kelas]);
        const columns = [
            { name: 'Nama' }, { name: 'Kode' }, { name: 'Wali Kelas' }, {
                name: "Action",
                options: {
                    filter: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                            <>
                                <button className="btn btn-danger btn-sm" onClick={() => {
                                    this.delete(tableMeta.rowData[3])
                                }} >
                                    Delete
                            </button>
                                {/* <Action url={`/master/karyawan/edit/${tableMeta.rowData[3]}`} title="Edit" classname="btn btn-warning btn-sm" /> */}

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
                title={<>

                    <NavLink
                        to='/app/kelas/add'
                        className={'btn btn-primary'}
                    >
                        Tambah Kelas
                                </NavLink>

                </>}
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

export default connect(null, mapDispatchToProps)(Karyawan)
