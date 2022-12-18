import * as Icon from 'react-feather';
import Template from '../pages/Template';


const Error = () => {
    return (<>
        <Template Outlet={<>
            <div className="align-center">
                <div className="row">
                    <div className="alert alert-danger">
                        <h1 className='text-center'>    <Icon.Navigation />Halaman Yang anda cari tidak ditemukan</h1>
                    </div>
                </div>
            </div>
        </>
        } />
    </>);
}

export default Error;  