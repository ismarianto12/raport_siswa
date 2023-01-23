import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import axios from 'axios'
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {
    createsiswa, deletesiswa, updatesiswa
} from '../../actions/Siswa'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet";
import Action from "../../components/Action";

class Mapel extends React.Component {
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

        // const levelakses = localStorage.getItem('token')  
        const local = localStorage.getItem('token')
        const localstorage = JSON.parse(local)
        console.log(localstorage, 'detail local')
        const level = localstorage.level

        this.array = this.state.data.map(result => [result.kode, result.mapel, result.kkm, result.nama ?? 'Kosong', result.id_mapel]);
        const columns = [
            { name: 'Kode' }, { name: 'mapel' }, { name: 'KKM' }, { name: 'Pengampu' }, {
                name: "Action",
                options: {
                    filter: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (

                            level !== 'guru' ?
                                <>
                                    <button className="btn btn-danger btn-sm" onClick={() => {
                                        this.delete(tableMeta.rowData[4])
                                    }} >
                                        Delete
                            </button>
                                    <Action url={`/master/mapel/edit/${tableMeta.rowData[4]}`} title="Edit" classname="btn btn-warning btn-sm" />
                                </>
                                : <>

                                    <button className="btn btn-danger btn-sm" onClick={() => {
                                        this.delete(tableMeta.rowData[4])
                                    }} >
                                        View
                            </button>
                                </>
                        )
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
                            <br />
                            <b>Data Mata pelajaran</b>
                            <br />
                            {level !== 'guru' ?

                                <>
                                    <NavLink
                                        to='/master/mapel/add'
                                        className={'btn btn-primary'}
                                    >
                                        Tambah data
                      </NavLink>
                                </>

                                : ''}
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

export default connect(null, mapDispatchToProps)(Mapel)
