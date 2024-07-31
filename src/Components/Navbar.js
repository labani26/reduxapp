import React from 'react';
import { useSelector } from 'react-redux';
import { Link , useLocation } from "react-router-dom";
// import { useEffect } from 'react';

const Navbar = () => {
    const amount = useSelector((state) => state.amount);  
    //The useSelector hook is a part of the React-Redux library and is used to extract or "select" data from the Redux store state in functional React components.

    let location = useLocation;

    //  useEffect(() => {

    //  //Google Analytics
    //  console.log(location.pathname);

    //  }, [location]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                 <Link className="navbar-brand" to="/">State Bank of Labani</Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                             <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link> 
                            </li>
                            <li className="nav-item">
                             <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} to="/About">About</Link> 
                            </li>
                        </ul>
                        <button className='btn btn-primary'>Your Balance: {amount}</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
