import TableRaport from '../../components/TableRaport'

export default function Raport() {

    return ( 
        <>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Raport Dan Penilaian</h4>
                        <p className="card-description">
                        </p>
                        <div className="table-responsive">
                            <TableRaport />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}