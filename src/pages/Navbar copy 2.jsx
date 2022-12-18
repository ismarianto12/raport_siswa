import { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { useNavigate, NavLink } from 'react-router-dom'
import $ from 'jquery';
import jQuery from 'jquery';
import { SidebarData } from '../components/SidebarData';

function Navbar() {

    const [open, setOpen] = useState([]);

    const toggleNavbar = (e) => {
        // this function will get the parent nav's name from its data-value attribute
        // then it checks if open has the parent in the array; if so, it is deleted
        // else it is added

        // each individaul parentUL will receive the open hook
        // and if its name is in the open var, it will dynamically show or hide its children

        let current = e.target.getAttribute("data-value");

        if (open.includes(current)) {
            var newOpen = [...open].filter((e) => e !== current);
        } else {
            var newOpen = [...open, current];
        }

        setOpen(newOpen);
    };


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
                    console.log(open.includes(a.title));
                    if (a.subNav != null) {
                        return (<li className="nav-item" onClick={toggleNavbar} key={b} data-value={a.title}>
                            <NavLink className={(open) => open.includes(a.title) ? "nav-link collapsed" : "nav-link"} data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                {a.icon} &nbsp;&nbsp;
                                <span className="menu-title">{a.title}</span>
                                {a.iconClosed}
                            </NavLink>
                            <div className={(open) => { open.includes(a.title) ? "collapse" : 'collapse show' }} id="ui-basic" style={{}}>
                                <ul className={(open) => { open.includes(a.title) ? "nav flex-column sub-menu " : "nav flex-column sub-menu show" }}>
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