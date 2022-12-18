import { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { useNavigate, NavLink } from 'react-router-dom'
import $ from 'jquery';
import jQuery from 'jquery';
import { SidebarData } from '../components/SidebarData';

function Navbar() {

    const [item, setItem] = useState([])

    const [active, setActive] = useState(-1);
    const [clicked, setclicked] = useState(-1);
    const handleExpand = (e, i) => {
        e.preventDefault();
        setActive(active === i ? -1 : i);
        setclicked(1);
    };

    const handleClick = (a) => {
        console.log(a);
        setItem(prevState => ({ item: !prevState[a] }))
    }


    return (<nav className="sidebar sidebar-offcanvas" id="sidebar" style={{ 'marginTop': '52px' }}>
        <ul className="nav">
            <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                    <Icon.Home />
                    <span className="menu-title">Dashboard</span>
                </NavLink>
            </li>

            {

                SidebarData.map((a, b) => {

                    if (a.subNav != null) {
                        return (<li className="nav-item" onClick={() => handleClick(a.title)} key={b} data-value={a.title}>
                            <NavLink className={item[a.title] ? "nav-link collapsed" : "nav-link"} data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                {a.icon} &nbsp;&nbsp;
                                <span className="menu-title">{a.title}</span>
                                {a.iconClosed}
                            </NavLink>
                            <div className={item[a.title] ? "collapse" : 'collapse show'} id="ui-basic" style={{}}>
                                <ul className={item[a.title] ? "nav flex-column sub-menu " : "nav flex-column sub-menu show"}>
                                    {a.subNav.map((gg, listdata) => {
                                        return (<li className="nav-item"> <NavLink className="nav-link" to={gg.path}>{gg.title}</NavLink></li>)
                                    })
                                    }
                                </ul>
                            </div>
                        </li>)
                    } else {
                        return (<li className="nav-item">
                            <NavLink className="nav-link" to={a.path}>
                                {a.icon} &nbsp;&nbsp;
                                <span className="menu-title">{a.title}</span>
                            </NavLink>
                        </li>)
                    }
                })
            }


            <li className="nav-item">
                <NavLink className="nav-link" to="/app/user">
                    <Icon.Menu />
                    <span className="menu-title">Documentation</span>
                </NavLink>
            </li>
        </ul>
    </nav >);

}

export default Navbar