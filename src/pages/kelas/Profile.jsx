const Profile = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="border-bottom text-center pb-4">
                                    <img src="https://www.bootstrapdash.com/demo/skydash/template/images/faces/face12.jpg" alt="profile" className="img-lg rounded-circle mb-3" />
                                    <div className="mb-3">
                                        <h3>David Grey. H</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h5 className="mb-0 me-2 text-muted">Canada</h5>
                                            <div className="br-wrapper br-theme-css-stars"><select id="profile-rating" name="rating" autoComplete="off" style={{ display: 'none' }}>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                            </select><div className="br-widget"><a href="#" data-rating-value={1} data-rating-text={1} className="br-selected br-current" /><a href="#" data-rating-value={2} data-rating-text={2} className /><a href="#" data-rating-value={3} data-rating-text={3} className /><a href="#" data-rating-value={4} data-rating-text={4} className /><a href="#" data-rating-value={5} data-rating-text={5} className /></div></div>
                                        </div>
                                    </div>
                                    <p className="w-75 mx-auto mb-3">Bureau Oberhaeuser is a design bureau focused on Information- and Interface Design. </p>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-success me-1">Hire Me</button>
                                        <button className="btn btn-success">Follow</button>
                                    </div>
                                </div>
                                <div className="border-bottom py-4">
                                    <p>Skills</p>
                                    <div>
                                        <label className="badge badge-outline-dark">Chalk</label>
                                        <label className="badge badge-outline-dark">Hand lettering</label>
                                        <label className="badge badge-outline-dark">Information Design</label>
                                        <label className="badge badge-outline-dark">Graphic Design</label>
                                        <label className="badge badge-outline-dark">Web Design</label>
                                    </div>
                                </div>
                                <div className="border-bottom py-4">
                                    <div className="d-flex mb-3">
                                        <div className="progress progress-md flex-grow">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={55} style={{ width: '55%' }} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="progress progress-md flex-grow">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow={75} style={{ width: '75%' }} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <p className="clearfix">
                                        <span className="float-left">
                                            Status
                                        </span>
                                        <span className="float-right text-muted">
                                            Active
                                        </span>
                                    </p>
                                    <p className="clearfix">
                                        <span className="float-left">
                                            Phone
                                        </span>
                                        <span className="float-right text-muted">
                                            006 3435 22
                                        </span>
                                    </p>
                                    <p className="clearfix">
                                        <span className="float-left">
                                            Mail
                                        </span>
                                        <span className="float-right text-muted">
                                            Jacod@testmail.com
                                        </span>
                                    </p>
                                    <p className="clearfix">
                                        <span className="float-left">
                                            Facebook
                                        </span>
                                        <span className="float-right text-muted">
                                            <a href="#">David Grey</a>
                                        </span>
                                    </p>
                                    <p className="clearfix">
                                        <span className="float-left">
                                            Twitter
                                        </span>
                                        <span className="float-right text-muted">
                                            <a href="#">@davidgrey</a>
                                        </span>
                                    </p>
                                </div>
                                <button className="btn btn-primary btn-block mb-2">Preview</button>
                            </div>
                            <div className="col-lg-8">
                                <div className="d-block d-md-flex justify-content-between mt-4 mt-md-0">
                                    <div className="text-center mt-4 mt-md-0">
                                        <button className="btn btn-outline-primary">Message</button>
                                        <button className="btn btn-primary">Request</button>
                                    </div>
                                </div>
                                <div className="mt-4 py-2 border-top border-bottom">
                                    <ul className="nav profile-navbar">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="ti-user" />
                                                Info
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">
                                                <i className="ti-receipt" />
                                                Feed
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="ti-calendar" />
                                                Agenda
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="ti-clip" />
                                                Resume
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="profile-feed">
                                    <div className="d-flex align-items-start profile-feed-item">
                                        <img src="https://www.bootstrapdash.com/demo/skydash/template/images/faces/face13.jpg" alt="profile" className="img-sm rounded-circle" />
                                        <div className="ms-4">
                                            <h6>
                                                Mason Beck
                                                <small className="ms-4 text-muted"><i className="ti-time me-1" />10 hours</small>
                                            </h6>
                                            <p>
                                                There is no better advertisement campaign that is low cost and also successful at the same time.
                                            </p>
                                            <p className="small text-muted mt-2 mb-0">
                                                <span>
                                                    <i className="ti-star me-1" />4
                                                </span>
                                                <span className="ms-2">
                                                    <i className="ti-comment me-1" />11
                                                </span>
                                                <span className="ms-2">
                                                    <i className="ti-share" />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start profile-feed-item">
                                        <img src="https://www.bootstrapdash.com/demo/skydash/template/images/faces/face16.jpg" alt="profile" className="img-sm rounded-circle" />
                                        <div className="ms-4">
                                            <h6>
                                                Willie Stanley
                                                <small className="ms-4 text-muted"><i className="ti-time me-1" />10 hours</small>
                                            </h6>
                                            <img src="https://www.bootstrapdash.com/demo/skydash/template/images/samples/1280x768/12.jpg" alt="sample" className="rounded mw-100" />
                                            <p className="small text-muted mt-2 mb-0">
                                                <span>
                                                    <i className="ti-star me-1" />4
                                                </span>
                                                <span className="ms-2">
                                                    <i className="ti-comment me-1" />11
                                                </span>
                                                <span className="ms-2">
                                                    <i className="ti-share" />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start profile-feed-item">
                                        <img src="https://www.bootstrapdash.com/demo/skydash/template/images/faces/face19.jpg" alt="profile" className="img-sm rounded-circle" />
                                        <div className="ms-4">
                                            <h6>
                                                Dylan Silva
                                                <small className="ms-4 text-muted"><i className="ti-time me-1" />10 hours</small>
                                            </h6>
                                            <p>
                                                When I first got into the online advertising business, I was looking for the magical combination
                                                that would put my website into the top search engine rankings
                                            </p>
                                            <img src="https://www.bootstrapdash.com/demo/skydash/template/images/samples/1280x768/5.jpg" alt="sample" className="rounded mw-100" />
                                            <p className="small text-muted mt-2 mb-0">
                                                <span>
                                                    <i className="ti-star me-1" />4
                                                </span>
                                                <span className="ms-2">
                                                    <i className="ti-comment me-1" />11
                                                </span>
                                                <span className="ms-2">
                                                    <i className="ti-share" />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profile