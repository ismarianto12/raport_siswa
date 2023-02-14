import React from 'react'


interface Nilai {
    nilai: number
}

type State = {
    data: [],
    nama: String
    alamat: String
    ttl: String
    tempatlahir: String
    ket: String
}
type Props = {
    nama: String
    alamat: String
    ttl: String
    tempatlahir: String
    ket: String
}
class Ubahnilai extends React.Component<Props, State>{

    constructor(props: {}) {
        super(props)
        this.state = {
            data: [],
            error: false,
            ket: '',
        }
    }
    render() {
        return (<div>


                


        </div>)
    }

}
export default Ubahnilai

