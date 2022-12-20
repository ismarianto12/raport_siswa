import { NavLink } from 'react-router-dom'
import Mapeltable from '../../components/mapeltable';
import Title from "../../components/Title";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Mapel() {
    return (
        <>
            <Title params={'Mata Pelajaran'} />
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">

                        <NavLink
                            to='/master/mapel/add'
                            className={'btn btn-primary'}
                        >
                            Tambah data
                                </NavLink>
                        <div className="table-responsive">
                            <Mapeltable />

                        </div>
                    </div>
                </div>
                <ToastContainer />

            </div>

        </>
    )
}