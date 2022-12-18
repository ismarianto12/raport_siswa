import Tablelaporan from '../../components/Tablelaporan'

export default function Laporan() {
    return (
        <>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Laporan Data Penilaian</h4>
                        <div className="table-responsive">
                            <Tablelaporan />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}