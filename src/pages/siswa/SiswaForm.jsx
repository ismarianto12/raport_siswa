import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
// import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';



import Title from '../../components/Title'

export default function SiswaForm() {
    let params = useParams()

    const [action, setActon] = useState('')
    useEffect(() => {
        const pathnya = params['*'].split('/')
        console.log(pathnya[0])
        if (pathnya == 'edit') {
            setActon('Edit')
        } else {
            setActon('Tambah Data')

        }
    }, []);

    return (
        <>
            <Title params={`${action} Siswa`} />
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{`${action} Siswa`}</h4>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Nama"

                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="NISN /NIM"

                                />
                                <TextField
                                    required
                                    id="Jenis Kelamin"
                                    label=""

                                /><TextField
                                    required
                                    id="outlined-required"
                                    label="Tempat tanggal lahir"

                                /><TextField
                                    required
                                    id="outlined-required"
                                    label=""

                                /><TextField
                                    required
                                    id="outlined-required"
                                    label="Kelas"

                                /><TextField
                                    required
                                    id="outlined-required"
                                    label="Status Siswa"

                                />
                            </div>
                            <hr />
                            <Button variant="contained" >
                                Save
</Button>
&nbsp;
                            <Button variant="contained" style={{ "background": "orange" }}>
                                Cancel
</Button>

                        </Box>
                    </div>
                </div>
            </div>

        </>
    )
}