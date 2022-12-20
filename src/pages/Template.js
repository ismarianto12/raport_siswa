
import * as Icon from 'react-feather';
import { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import '../components/template/assets/css/style.css'
import AplikasiContext from '../context/AplikasiContext';

const Template = ({ Outlet }) => {
    const { token } = useContext(AplikasiContext)
    const [levelakses, setlevelakses] = useState()
    useEffect(() => {
        const getdata = async () => {
            const local = await localStorage.getItem('token')
            const localstorage = JSON.parse(local)
            console.log(localstorage.level)
            setlevelakses(localstorage.level.toUpperCase())
        }
        getdata()
    }, []);

    const navigate = useNavigate()
    const [fixed, setFixed] = useState(true)
    const Logout = () => {

        return Swal.fire({
            title: 'Kamu yakin ?',
            text: "Anda Yakin Log out dari aplikasi",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Success !',
                    'Anda berhasil logout dengan selamat.',
                    'success'
                )
                localStorage.removeItem('mytime')
                navigate('/login')

            }
        })
    }

    useEffect(() => {

        const sidebar = document.getElementsByClassName("sidebar");
        var current = window.location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
        // $('.nav li a', sidebar).each(function () {
        //     var $this = $(this);
        //    addActiveClass($this);
        // })
        // function addActiveClass(element) {
        //     if (current === "") {
        //         //for root url
        //         if (element.attr('href').indexOf("/") !== -1) {
        //             element.parents('.nav-item').last().addClass('active');
        //             if (element.parents('.sub-menu').length) {
        //                 element.closest('.collapse').addClass('show');
        //                 element.addClass('active');
        //             }
        //         }
        //     } else {

        //         console.log(element.attr('href').indexOf(current));
        //         //for other url
        //         if (element.attr('href').indexOf(current) === -1) {
        //             // element.parents('.nav-item').last().addClass('active');
        //             // if (element.parents('.sub-menu').length) {
        //                 element.closest('.collapse').addClass('show');
        //                 element.addClass('active');
        //             }
        //             if (element.parents('.submenu-item').length) {
        //                 element.addClass('active');
        //             }
        //         }
        //     }
        // }
        //}

    }, [])

    const [active, Setactive] = useState(false)
    return (
        <>
            <div className={fixed ? "container-scroller" : "container-scroller sidebar-white sidebar-icon-only"}>
                <div className="row p-0 m-0 proBanner d-none" id="proBanner">
                    <div className="col-md-12 p-0 m-0">
                        <div className="card-body card-body-padding d-flex align-items-center justify-content-between">
                            <div className="ps-lg-1">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 font-weight-medium mr-3 buy-now-text">Free 24/7 customer support, updates, and more with this template!</p>
                                    <a href="https://www.bootstrapdash.com/product/skydash-admin-template/?utm_source=organic&utm_medium=banner&utm_campaign=buynow_demo" target="_blank" className="btn mr-2 buy-now-btn border-0">Get Pro</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="https://www.bootstrapdash.com/product/skydash-admin-template/"><i className="ti-home mr-3 text-white" /></a>
                                <button id="bannerClose" className="btn border-0 p-0">
                                    <i className="ti-close text-white mr-0" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar col-lg-12 col-12 p-0 d-flex flex-row fixed-top">
                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <a className="navbar-brand brand-logo mr-5" href="/"><img src="/logo.png" className="mr-2" alt="logo" /></a>
                        <a className="navbar-brand brand-logo-mini" href="/"><img src="/logo.png" alt="logo" /></a>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                        <button onClick={(e) => setFixed(!fixed)} className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <Icon.Menu />
                        </button>
                        <ul className="navbar-nav mr-lg-2">
                            <li className="nav-item nav-search d-none d-lg-block">
                                <div className="input-group">
                                    <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                        <span className="input-group-text" id="search">
                                            <Icon.Search />
                                            {/* {levelakses} */}

                                        </span>
                                    </div>
                                    <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
                                </div>
                            </li>
                        </ul>

                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item dropdown">
                                <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                    <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-success">
                                                <i className="ti-info-alt mx-0" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject font-weight-normal">Application Error</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                Just now
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-warning">
                                                <i className="ti-settings mx-0" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject font-weight-normal">Settings</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                Private message
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-info">
                                                <i className="ti-user mx-0" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject font-weight-normal">New user registration</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                2 days ago
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li onClick={() => Setactive(!active)} className={active ? 'nav-item nav-profile dropdown show' : 'nav-item nav-profile dropdown'}>
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                    <img src="https://bootstrapdash.com/demo/skydash-free/template/images/faces/face28.jpg" alt="profile" />
                                </a>
                                <div className={active ? 'dropdown-menu dropdown-menu-right navbar-dropdown show' : 'dropdown-menu dropdown-menu-right navbar-dropdown'} aria-labelledby="profileDropdown">
                                    <NavLink to="/app/profile" className="dropdown-item">
                                        <Icon.Settings />
                                        Settings
                                    </NavLink>
                                    <a className="dropdown-item" onClick={Logout}>
                                        <Icon.LogOut />
                                        Logout
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item nav-settings d-none d-lg-flex">
                                <a className="nav-link" href="#">
                                    {levelakses}


                                </a>
                            </li>
                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span className="icon-menu" />
                        </button>
                    </div>
                </nav>
                {/* partial */}
                <div className="container-fluid page-body-wrapper pt-0 proBanner-padding-top" style={{ 'paddingRight': '0px' }}>
                    {/* partial:partials/_settings-panel.html */}
                    <div className="theme-setting-wrapper">
                        <div id="settings-trigger"><Icon.Settings /></div>
                        <div id="theme-settings" className="settings-panel">
                            <i className="settings-close ti-close" />
                            <p className="settings-heading">SIDEBAR SKINS</p>
                            <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3" />Light</div>
                            <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3" />Dark</div>
                            <p className="settings-heading mt-2">HEADER SKINS</p>
                            <div className="color-tiles mx-0 px-4">
                                <div className="tiles success" />
                                <div className="tiles warning" />
                                <div className="tiles danger" />
                                <div className="tiles info" />
                                <div className="tiles dark" />
                                <div className="tiles default" />
                            </div>
                        </div>
                    </div>
                    <div id="right-sidebar" className="settings-panel">
                        <i className="settings-close ti-close" />
                        <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="setting-content">
                            <div className="tab-pane fade show active scroll-wrapper ps ps--active-y" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                                <div className="add-items d-flex px-3 mb-0">
                                    <form className="form w-100">
                                        <div className="form-group d-flex">
                                            <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                                            <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="list-wrapper px-3">
                                    <ul className="d-flex flex-column-reverse todo-list">
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" />
                                                    Team review meeting at 3.00 PM
                                                    <i className="input-helper" /></label>
                                            </div>
                                            <i className="remove ti-close" />
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" />
                                                    Prepare for presentation
                                                    <i className="input-helper" /></label>
                                            </div>
                                            <i className="remove ti-close" />
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" />
                                                    Resolve all the low priority tickets due today
                                                    <i className="input-helper" /></label>
                                            </div>
                                            <i className="remove ti-close" />
                                        </li>
                                        <li className="completed">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" defaultChecked />
                                                    Schedule meeting for next week
                                                    <i className="input-helper" /></label>
                                            </div>
                                            <i className="remove ti-close" />
                                        </li>
                                        <li className="completed">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" defaultChecked />
                                                    Project review
                                                    <i className="input-helper" /></label>
                                            </div>
                                            <i className="remove ti-close" />
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="px-3 text-muted mt-5 font-weight-light mb-0">Events</h4>
                                <div className="events pt-4 px-3">
                                    <div className="wrapper d-flex mb-2">
                                        <i className="ti-control-record text-primary mr-2" />
                                        <span>Feb 11 2018</span>
                                    </div>
                                    <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
                                    <p className="text-gray mb-0">The total number of sessions</p>
                                </div>
                                <div className="events pt-4 px-3">
                                    <div className="wrapper d-flex mb-2">
                                        <i className="ti-control-record text-primary mr-2" />
                                        <span>Feb 7 2018</span>
                                    </div>
                                    <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                                    <p className="text-gray mb-0 ">Call Sarah Graves</p>
                                </div>
                                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps__rail-y" style={{ top: 0, height: 625, right: 0 }}><div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 439 }} /></div></div>
                            {/* To do section tab ends */}
                            <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                                    <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
                                </div>
                                <ul className="chat-list">
                                    <li className="list active">
                                        <div className="profile"><img src="images/faces/face1.jpg" alt="image" /><span className="online" /></div>
                                        <div className="info">
                                            <p>Thomas Douglas</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">19 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="images/faces/face2.jpg" alt="image" /><span className="offline" /></div>
                                        <div className="info">
                                            <div className="wrapper d-flex">
                                                <p>Catherine</p>
                                            </div>
                                            <p>Away</p>
                                        </div>
                                        <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                                        <small className="text-muted my-auto">23 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="images/faces/face3.jpg" alt="image" /><span className="online" /></div>
                                        <div className="info">
                                            <p>Daniel Russell</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">14 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="images/faces/face4.jpg" alt="image" /><span className="offline" /></div>
                                        <div className="info">
                                            <p>James Richardson</p>
                                            <p>Away</p>
                                        </div>
                                        <small className="text-muted my-auto">2 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="images/faces/face5.jpg" alt="image" /><span className="online" /></div>
                                        <div className="info">
                                            <p>Madeline Kennedy</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">5 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="images/faces/face6.jpg" alt="image" /><span className="online" /></div>
                                        <div className="info">
                                            <p>Sarah Graves</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">47 min</small>
                                    </li>
                                </ul>
                            </div>
                            {/* chat tab ends */}
                        </div>
                    </div>

                    <Navbar />
                    {/* partial */}
                    <div className="main-panel" style={{ 'margin-top': '52px' }}>
                        <div className="content-wrapper">
                            <div className='rows'>
                                {Outlet}
                            </div>
                        </div>
                        {/* content-wrapper ends */}
                        {/* partial:partials/_footer.html */}
                        <footer className="footer">
                            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2021.  Premium <a href="https://www.bootstrapdash.com/" target="_blank">Facebook INC</a> from BootstrapDash. All rights reserved.</span>
                                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with <i className="ti-heart text-danger ml-1" /></span>
                            </div>
                        </footer>
                        {/* partial */}
                    </div>
                    {/* main-panel ends */}
                </div>
                {/* page-body-wrapper ends */}
            </div>
        </>
    )
}
export default Template