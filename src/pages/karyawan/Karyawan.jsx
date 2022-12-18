import Karyawantable from "../../components/karyawan";

export default function Karyawan() {
    return (
        <>

            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{`Data Karyawan`}</h4>
                        <div className="table-responsive">
                            <Karyawantable />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}