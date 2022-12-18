import { NavLink } from 'react-router-dom'
import TableSiswa from "../../components/TableSiswa"

export default function Siswa() {
    return (
        <>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{`Data Master Siswa`}</h4>
                        <div className="table-responsive">
                            <NavLink
                                to='/master/siswa/add'
                                className={'btn btn-primary'}
                            >
                                Tambah data
                                </NavLink>
                            <TableSiswa />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}