import React from 'react'

class Semester extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            error: false,
            data: []
        }

    }

    componentDidMount() {
        this.fetchdata()
    }

    fetchdata() {
        const datanya = [];
        const data_row_array = [];

        axios.get(`${process.env.REACT_APP_API_URL}/v1/raport`)
            .then(response => {
                this.setState({ data: response?.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <>
                <select className="form-control">

                    {this.state.data.map((a,k)=>{
                        return(
                            <>
                            <option>{a.semester}</option>
                            </>
                        )
                    })}
                </select>
            </>
        )
    }
}

export default Semester