import React from 'react';
import style from '../../src/components/template/assets/css/style.module.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { withRouter } from '../lib/withRouter'

class PrintLaporan extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            datas: [],
            JumlahSiswa: '',
            error: false,
            loading: true
        }
    }
    componentDidMount() {
        const id = this.props.match.params['*']
        console.log(id, 'pathname')
        this.fetchdata(id)
        this.jumlahSiswa()
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
            this.setState({
                data: restdata.data.data[0],
                datas: restdata.data.data,
                loading: false,
                error: false,
            })

        }).catch((error) => {
            this.setState({
                loading: true,
                error: false,
            })
            Swal.fire('error', error.message, 'error')
        })
    }
    async jumlahSiswa() {
        const config = {
            url: `${process.env.REACT_APP_API_URL}/v1/siswa`,
            method: 'GET',
            headers: {
                'Content-type': 'Application/json',
            }
        }
        await axios(config).then((restdata) => {
            // count(restdata.data.),
            this.setState({
                JumlahSiswa: restdata.data?.length,
            })
        }).catch((error) => {
            this.setState({
                loading: true,
                error: false,
            })
            Swal.fire('error', error.message, 'error')
        })
    }

    render() {

        const Fperingkat = '';
        const Peringkat = ""
        const Jsiswa = this.state.JumlahSiswa ? this.state.JumlahSiswa : 0





        let ratanya = 0
        console.log(this.state.datas, 'detail console')
        this.state.datas.forEach((a, b) => {
            ratanya += parseInt(a.bobot)
        })
        console.log(ratanya, 'status')

        const WaliKelas = this.state.datas.nama
        const KepalaSekolah = this.state.datas.nama
        const RataNilai = ratanya / this.state.datas?.length
        const TotalNilai = ratanya

        return (
            this.state.datas?.length > 0 ?

                <>
                    {this.state.loading ? <>
                        <div style={{
                            'margin': '0 auto'


                        }}>

                            <img src="https://flevix.com/wp-content/uploads/2019/12/Quarter-Circle-Loading-Image-1.gif" />
                        </div>





                    </> :
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
                                        this.state.datas?.length > 0 ?
                                            this.state.datas.map((j, k) => {
                                                console.log(k, 'detail datany')
                                                return (
                                                    <>

                                                        <tr>
                                                            <td>{k + 1}</td>
                                                            <td>{j.mapel}</td>
                                                            <td>{j.kkm}</td>
                                                            <td>{j.nilai}</td>
                                                            <td>{j.nilai}</td>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                            : <div style={{ 'textAlign': 'center' }}>
                                                Data Penilaian belum tersedia
                                            </div>
                                    }


                                    <tr>
                                        <td colSpan={3} rowSpan={1}>Rata Rata Nilai</td>
                                        <td>{RataNilai}</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3} rowSpan={1}>Total Nilai</td>
                                        <td>{TotalNilai}</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>Peringkat&nbsp; Ke {Peringkat} &nbsp;..........&nbsp; Dari {Jsiswa} / Siswa</td>
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
                                        <td style={{ textAlign: 'center' }}>Mengetahui Wali Kelas</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>({WaliKelas})<br />
                                            NIP</td>
                                        <td>
                                            <p style={{ textAlign: 'center' }}>({KepalaSekolah})</p>
                                            <p style={{ textAlign: 'center' }}>NIP</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                            <p>&nbsp;</p>


                        </div>
                    }
                </>

                : <div style={{ 'margin': '0 auto', 'textAlign': 'center' }}>
                    <img src="https://cloudweeb.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-25-at-09.44.19.png" />
                    <br />
                    <h4>
                        Data penilaian belum di set oleh wali kelas</h4>
                </div>
        );
    }
}

export default withRouter(PrintLaporan)