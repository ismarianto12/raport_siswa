import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { useParams, useSearchParams } from 'react-router-dom'
import * as Icon from 'react-feather'

const MapelAdd = () => {
    let params = useParams()
    const [title, setTitle] = useState('')

    useEffect(() => {
        const pathnya = params['*'].split('/')
        console.log(pathnya[0])
        if (pathnya == 'edit') {
            setTitle('Edit')
        } else {
            setTitle('Tambah Data')

        }

    }, []);
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <h3><Icon.Users />{title}</h3>


                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div className="container">
                                    <TextField
                                        id="standard-password-input"
                                        label="Kode Mapel"
                                        type="text"
                                        autoComplete="current-password"
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-password-input"
                                        label="Nama Mapel"
                                        type="text"
                                        autoComplete="current-password"
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-password-input"
                                        label="Standar KKM Mapel"
                                        type="text"
                                        autoComplete="current-password"
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-password-input"
                                        label="Guru Pengampu KKM Mapel"
                                        type="text"
                                        autoComplete="current-password"
                                        variant="standard"
                                    />
                                    <hr />
                                    <Button variant="contained" >
                                        Save
</Button>
&nbsp;
                            <Button variant="contained" style={{ "background": "orange" }}>
                                        Cancel
</Button>


                                </div>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default MapelAdd