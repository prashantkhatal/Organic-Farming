import React from 'react';
import { Link } from "react-router-dom";
import ImageGalleryComponent from '../containers/ImageSider';

const Footer = props => {
    return (
        <footer className="page-footer font-small blue pt-4 text-white">
            <div className="container-fluid text-center text-md-left">
                <div className="row" style={{backgroundColor: "#bec5cc"}}>
                    <div className="col-md-6 mt-md-0 mt-3 footer-div">
                        <h5 className="text-uppercase text-muted">LLIVE LONG</h5>
                        <Link className="nav-link d-inline" to="/">Click to Explore More</Link>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    <div className="col-md-6 mt-md-0 mt-3">
                        <ImageGalleryComponent />
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center">
                © 2019 Copyright: <Link className="nav-link d-inline" to="/">LLIVE LONG</Link>
            </div>
        </footer>
    )
}

export default Footer;