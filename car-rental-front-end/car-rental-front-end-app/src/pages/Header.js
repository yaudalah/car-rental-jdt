import React from 'react'
import './css/index.css'
import './css/main.css'


export const Header = () => {
  return (
    <>
    <nav className="nav navbar fixed-top">
        <div className="container-fluid d-flex justify-content-between w-90">
            <a href="#">Invisible Boat Mobile</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <a className="nav-link color-black mx-2" aria-current="page" href="#our-services">Our Services</a>
                    
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
