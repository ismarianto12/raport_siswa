import { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { useNavigate, useLocation, NavLink, useParams } from 'react-router-dom'

import { SidebarData, Guru, Murid } from '../components/SidebarData';
import style from '../../src/components/template/assets/css/style.css'

function Navbar() {
    const [state, setState] = useState({});
    const [level, setLevel] = useState(null)
    const [datanya, setDatanya] = useState([]);
    const [urlpath, setUrlpath] = useState('')
    let params = useLocation()
    useEffect((e) => {
        console.log(params.pathname, 'pathname location')

        const session = async () => {
            const local = await localStorage.getItem('token')

            const localstorage = JSON.parse(local)
            console.log(localstorage.level)
            setLevel(localstorage.level)
            if (level == 'admin') {
                setDatanya(SidebarData)
            } if (level == 'guru') {
                setDatanya(Guru)
            } if (level == 'siswa') {
                setDatanya(Murid)
            }
        }
        session()
    }, [level])
    const handleClick = (e, item) => {
        e.preventDefault();
        setState((state) => ({
            ...state,
            [item]: !state[item]
        }));
    }

    return (<nav className={`fixed_navbar sidebar sidebar-offcanvas`} id="sidebar">
        <ul className="nav">
            <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                    <Icon.Home />
                    <span className="menu-title">Dashboard</span>
                </NavLink>
            </li>
            {
                datanya.map((a, b) => {
                    if (a.subNav != null) {
                        return (<li className="nav-item" onClick={e => handleClick(e, a.title)} key={b}>
                            <NavLink className={state[a.title] || a.path == params.pathname ? "nav-link collapsed active" : "nav-link"} data-toggle="collapse" href="#ui-basic" aria-expanded={state[a.title] || a.path == params.pathname ? true : false} aria-controls="ui-basic">
                                {a.icon} &nbsp;&nbsp;
                                <span className="menu-title">{a.title}</span>
                                <i className='menu-arrow'>
                                    {state[a.title]}
                                </i>
                            </NavLink>
                            <div className={state[a.title] || a.path == params.pathname ? "collapse show" : 'collapse'} id="ui-basic" style={{}}>
                                <ul className={state[a.title] || a.path == params.pathname ? "nav flex-column sub-menu show" : "nav flex-column sub-menu"}>
                                    {a.subNav.map((gg, listdata) => {
                                        console.log([a.path, params.pathname], 'parent')

                                        return (<li className="nav-item"> <NavLink className="nav-link" to={gg.path}>{gg.title}</NavLink></li>)
                                    })
                                    }
                                </ul>
                            </div>
                        </li>)
                    } else {
                        return (<li className={(a.title || a.path == params.pathname ? 'nav-item active' : 'nav-item')}>
                            <NavLink className="nav-link" to={a.path}>
                                {a.icon} &nbsp;&nbsp;
                                <span className="menu-title">{a.title}</span>
                            </NavLink>
                        </li>)
                    }
                })

            }

        </ul>
    </nav >);

}

export default Navbar