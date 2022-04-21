import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
import OnGoingList from '../component/OnGoingList';
import axios from 'axios';



export const OnGoingRental = () => {

    const [car, setCarOnGoing] = useState([]);

    useEffect(()=> {
        fetchCarsOnGoing();
    },[]) 

    const fetchCarsOnGoing = async() => {
        const carsOnGoing = [];
        try {
            const payload = await axios.get("http://localhost:8080/api/v1/order/get-all-on-going-transaction");
            carsOnGoing.push(...payload.data);
            setCarOnGoing(carsOnGoing);
            console.log("sss");
            console.log(carsOnGoing);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            {/*============================================================ HEADER ===========================================================================*/}
            <nav className="nav navbar fixed-top">
                <div className="container-fluid d-flex justify-content-between w-90">
                    <Link to="/" >Invisible Boat Mobile</Link>
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
                    </div>
                </div>
            </nav>

            <div className="row align-items-center bg-darkblue01 justify-content-between">
                <div className="col-md-6">
                    <div className="main-title-inner w-75 m-auto py-3">
                        <h1>Sewa dan Rental Mobil Terbaik di Jakarta</h1>
                        <p className="text-tipis">Selamat datang di IBM Car Rental. Kami menyediakan mobil terbaik dengan
                            harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    </div>
                </div>
                <div className="col-md-6">
                <img src="./images/yellow.car.svg" alt="main img" class="h-100 w-100 " />
                </div>
            </div>

            {/*============================================================ NAVBAR ===========================================================================*/}

            <nav className="navbar navbar-expand-lg justify-content-evenly navbar-light bg-light rounded" aria-label="Twelfth navbar example">
                <div className="container-flex margin-right: 10rm">

                    <div className="collapse navbar-collapse justify-content-evenly" id="navbarsExample10">
                        <ul className="navbar-nav justify-content-evenly margin-right: 1px">
                        
                            <li className="nav-item mx-3">
                                <Link to="/mainApp" className="nav-link btn btn-success text-light no-border bg-limegreen04 " href="#">Home</Link>
                            </li>

                            <li className="nav-item mx-3">
                                <Link to="/OnGoingRental" className="nav-link btn btn-success text-light no-border bg-limegreen04 " href="#">On Going Rental</Link>
                            </li>

                            <li className="nav-item mx-3">
                                <Link to="/History" className="nav-link btn btn-success text-light no-border bg-limegreen04" href="#">History</Link>
                            </li>
                        </ul> 
                    </div>
                </div>
            </nav>
            <div className="gallery-grid2 container"></div>
  
            {/*========================================================== INPUT DATA ===========================================================================*/}
            
            <OnGoingList
                car={car}
            />

            {/* ================================================================= FOOTER ===================================================== */}

            <footer class="py-5">
                <div class="container-footer w-90 mx-auto container">
                    <div class="row">
                        <div class="col-md-3">
                            <p class="text-tipis">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            <p class="text-tipis">IBM@gmail.com</p>
                            <p class="text-tipis">081-233-334-808</p>
                        </div>
                        <div class="col-md-1"></div>
                        
                        <div class="col-md-1"></div>
                        <div class="col-md-3">
                            
                            <p class="d-flex">Connect with us</p>
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
             {/* =================================================================================================================================== */}           
        </div>

    )
    
  }