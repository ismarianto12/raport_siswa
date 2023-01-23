import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Identitas = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className={`container`}>
                    <div className="row">
                        <h4>{`Sistem informasi akademik v.1.Beta`}</h4>

                        <table className={'table table-striped'}>
                            <tr>
                                <td>Aplikasi</td><td>Sistem raport siswa</td></tr>
                            <tr> <td>version</td><td>V1.1</td></tr>
                            <tr> <td>Alamat</td><td>Jl. </td></tr>
                        </table>
                    </div>

                    <Button
                        color="secondary"
                        variant="contained"

                    >Update Data</Button>

                </div>
            </CardContent>
        </Card>
    )
}

export default Identitas