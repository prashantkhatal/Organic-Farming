import React from 'react';
import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div className="text-white mt-5">
            To provide Chemical free Vegetables fruits which keeps human being healthy.
            <Link className="nav-link btn-danger d-inline-block mx-4" to="/contact">Connect To Us</Link>
        </div>
    )
}

export default Home;