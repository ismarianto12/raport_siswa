import React from 'react';
import style from '../../src/components/template/assets/css/style.module.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

class PrintLaporan extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            datas: [],
            error: false,
            loading: true
        }
    }
    componentDidMount() {
        this.fetchdata(41)
    }
    async fetchdata(id) {
        const config = {
            url: `${process.env.REACT_APP_API_URL}/v1/raport/show/${id}`,
            method: 'GET',
            headers: {
                'Content-type': 'Application/json',
            }
        }
        await axios(config).then((restdata) => {
            console.log(restdata.data.data[0].nama, 'data element')
            this.setState({
                data: restdata.data.data[0],
                datas: restdata.data.data,
                loading: false,
                error: false,
            })
            // Swal.fire('error', 'Error Fetch data', 'error')

        }).catch((error) => {
            this.setState({
                loading: true,
                error: false,
            })
            Swal.fire('error', error.message, 'error')
        })
    }

    render() {

        // console.log(this.state.datas.length, 'totaly')
        return (

 
            <>

                { this.state.loading ? 'Loading ... please wait' :
                    <div style={{
                        'size': 'A4',
                        'margin': '0 auto',
                        'width': '210mm',
                        'height': '297mm'
                    }}>

                        <img src="/logo.png" alt="logo" style={{ 'width': '90px', 'textAlign': 'center', 'margin': '0 auto', 'position': 'fixed' }} />
                        <br />
                        <div className={style.heading}>
                            <h4>Print Laporan Hasil Belajar Siswa</h4>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <p style={{ 'textAlign': 'center' }}>{`Semester Genap Tahun  Ajaran ${(new Date().getFullYear())} / ${(new Date().getFullYear()) + 1}`}</p>

                        <table className={style.table_raport} border={'0.1'}>
                            <tbody>
                                <tr>
                                    <td style={{ 'width': '50%', 'marginLeft': '10px' }}>
                                        <tr><th>Nama</th><td>&nbsp;&nbsp;{this.state.data.nama ? this.state.data.nama : ''}</td></tr>
                                        <tr><th>NISN</th><td>&nbsp;&nbsp;{this.state.data.nisn ? this.state.data.nisn : ''}</td></tr>
                                        <tr><th>Kelas</th><td>&nbsp;&nbsp;{this.state.data.kelas ? this.state.data.kelas : ''}</td></tr>
                                    </td>

                                    <td style={{ 'width': '50%', 'marginLeft': '30px' }}>
                                        <tr><th>Semester</th><td>{this.state.data.semester ? this.state.data.semester : ''}</td></tr>
                                        <tr><th>Nama / Orang Tua</th><td>{this.state.data.semester ? this.state.data.semester : ''}</td></tr>
                                        <tr><th>Status Siswa</th><td>Nama</td></tr>

                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <br />

                        <table classname="table-striped" border={1} cellPadding={1} cellSpacing={1} style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td colSpan={1} rowSpan={2}>NO</td>
                                    <td colSpan={1} rowSpan={2} style={{ textAlign: 'center' }}>Nama Mata Pelajaran</td>
                                    <td rowSpan={2} style={{ textAlign: 'center' }}>KKM</td>
                                    <td colSpan={2} rowSpan={1} style={{ textAlign: 'center' }}>Bobot</td>
                                    <td colSpan={1} rowSpan={2} style={{ textAlign: 'center' }}>Ket</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>Angka</td>
                                    <td style={{ textAlign: 'center' }}>Huruf</td>
                                </tr>
                                {
                                    // const f = 1 
                                    this.state.datas.map((j, k) => {
                                        console.log(k, 'detail datany')
                                        return (
                                            <>

                                                <tr>
                                                    <td>{k + 1}</td>
                                                    <td>{j.kode}</td>
                                                    <td>{j.mapel}</td>
                                                    <td>{j.kkm}</td>
                                                    <td>&nbsp;</td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                            </>
                                        )
                                    })


                                }


                                <tr>
                                    <td colSpan={3} rowSpan={1}>Rata Rata Nilai</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td colSpan={3} rowSpan={1}>Total Nilai</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>Peringkat&nbsp; Ke&nbsp; &nbsp;..........&nbsp; Dari ....... / Siswa</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>&nbsp;</p>

                        <table border={1} cellPadding={1} cellSpacing={1} style={{ width: 500 }}>
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>Mengetahui&nbsp;Kepala Sekolah</td>
                                    <td style={{ textAlign: 'center' }}>Mengetahui Walik Kelas</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>(..................................................)<br />
        NIP</td>
                                    <td>
                                        <p style={{ textAlign: 'center' }}>(...........................................)</p>
                                        <p style={{ textAlign: 'center' }}>NIP</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                        <p>&nbsp;</p>


                    </div>
                }
            </>
        );
    }
}

export default PrintLaporan