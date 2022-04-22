import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";

import './css/index.css'
import './css/main.css'
import './css/mainContainer.css'


export const MainContainer = () => {
  return (
    <div className="main container w-100 padding-top-70">
{/*============================================================ HEADER ===========================================================================*/}
        <nav className="nav navbar fixed-top" style={{backgroundColor: "#cfd4ed"}}>
            <div className="container-fluid d-flex justify-content-between w-90">
            <Link to="/" >
                <h1>IBM</h1>
                <p>Invisible Boat Mobile</p>
            </Link>
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

{/* ========================================================== IMAGE & BUTTON ====================================================*/}
        
        <div className="row align-items-center bg-darkblue01 justify-content-between">
            <div className="col-md-6">
                <div className="main-title-inner w-75 m-auto py-3">
                    <h1>Sewa dan Rental Mobil Terbaik di Jakarta</h1>
                    <p className="text-tipis">Selamat datang di IBM Car Rental. Kami menyediakan mobil terbaik dengan
                        harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <Link to="/mainApp" className="btn btn-success text-light no-border bg-limegreen04">Mulai Sewa Mobil</Link>
                </div>
            </div>
            <div className="col-md-6">
            <img src="./images/img_car.svg" alt="main img" class="h-100 w-100 " />
            </div>
        </div>

{/* =========================================================== INFORMATION ======================================================= */}
        
        <div className="our-services w-100 container py-5 d-flex justify-content-center align-items-center padding-top-70" id="our-services">
            <div className="row w-90 align-items-center mx-auto">
                <div className="our-services-image col-md-5 mx-auto d-flex justify-content-center align-items-center">
                    <img src="./images/img_service.svg" alt="our service img" className="w-100" />
                </div>
                <div className="our-services-description col-md-6 mx-auto d-flex justify-content-center flex-column">
                    <h2>Best Car Rental for any kind of trip in Jakarta!</h2>
                    <p>Sewa mobil di Jakarta bersama IBM Car Rental jaminan harga lebih murah dibandingkan yang lain,
                        kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                        meeting, dll.</p>
                    <ul className="fa-ul">
                        <li className="my-3"><span className="fa-li text-align-initial"><img src="./images/checklist.svg"
                                    className="checklist" alt="checklist" /></span>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                        <li className="my-3"><span className="fa-li text-align-initial"><img src="./images/checklist.svg"
                                    className="checklist" alt="checklist" /></span>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                        <li className="my-3"><span className="fa-li text-align-initial"><img src="./images/checklist.svg"
                                    className="checklist" alt="checklist" /></span>Sewa Mobil Jangka Panjang Bulanan</li>
                        <li className="my-3"><span className="fa-li text-align-initial"><img src="./images/checklist.svg"
                                    className="checklist" alt="checklist" /></span>Gratis Antar - Jemput Mobil di Bandara</li>
                        <li className="my-3"><span className="fa-li text-align-initial"><img src="./images/checklist.svg"
                                    className="checklist" alt="checklist" /></span>Layanan Airport Transfer / Drop In Out</li>
                    </ul>
                </div>
            </div>
        </div>

{/* ============================================================== FOOTER ============================================================= */}

        <footer class="py-5">
            <div class="container-footer w-90 mx-auto container">
                <div class="row">
                    <div class="col-md-3">
                        <p class="text-tipis">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p class="text-tipis">IBM@gmail.com</p>
                        <p class="text-tipis">081-233-334-808</p>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                        <p><a href="#our-services" class="text-reset">Our services</a></p>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-3">
                        
                        <p class="d-flex ">Connect with us</p>
                        <div class="icon-connect d-flex my-1">
                            <a href="https://www.facebook.com"
                                class="d-flex justify-content-center align-items-center bg-light circle icon-connect-with-us"><i
                                    class="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com"
                                class="d-flex justify-content-center align-items-center bg-light circle icon-connect-with-us"><i
                                    class="bi bi-instagram"></i></a>
                            <a href="https://twitter.com"
                                class="d-flex justify-content-center align-items-center bg-light circle icon-connect-with-us"><i
                                    class="bi bi-twitter"></i></a>
                            <a href="https://www.twitch.tv"
                                class="d-flex justify-content-center align-items-center bg-light circle icon-connect-with-us"><i
                                    class="bi bi-twitch"></i></a>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <p>Copyright Indivara 2022</p>
                        
                    </div>
                </div>
            </div>
        </footer>
{/* =========================================================================================================================================== */}
    </div>
    
  )
}
