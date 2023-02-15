
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import TableSiswa from "../../components/TableSiswa"
import { Midleware } from '../../lib/token'

export default function Siswa() {
    const [param, setParam] = useState('')
    let params = useParams()
    useEffect(() => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('ref');
        console.log(foo, 'detail data ')
        setParam(foo)

    }, [])

    return (
        <>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        {param === 'laporan' ?
                            (<><h4 className="card-title">{`Lapron`}</h4></>) :
                            (<><h4 className="card-title">{`Data Master Siswa`}</h4> </>)}

                        <div className="table-responsive">
                            {Midleware() === 'admin' ?
                                <NavLink
                                    to='/master/siswa/add'
                                    className={'btn btn-primary'}
                                >
                                    Tambah data
                                </NavLink> : ''
                            }

                            <TableSiswa />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}