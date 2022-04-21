import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link, useNavigate, useParams } from "react-router-dom";

import './css/index.css'
import './css/gallery.css'
import axios from 'axios';


export const MenuMobil = () => {
  const [car, setCar] = useState([]);
  const [driver, setDriver] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

    useEffect(()=> {
      if (params.id) {
        fetchCars(params.id);
      }
    },[params]) 

    const fetchCars = async(id) => {
      try {
          const getCars = await fetch("http://localhost:8080/api/v1/vehicle/"+id);
          const response = await getCars.json();
          setCar(response);
      } catch (error) {
        console.error(error);
      }
    }

    const fetchDriver = async() => {
      try {
        const drivers = [];
        const payload = await axios.get("http://localhost:8080/api/v1/get-all-drivers");
        drivers.push(...payload.data);
        setDriver(drivers);
        console.log(drivers);
      } catch (error) {
        
      }
    }

  return (
    <div>
{/*============================================================ HEADER ===========================================================================*/}
      <nav className="navbar navbar-expand-lg justify-content-evenly navbar-light bg-light rounded">
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
                <a className="nav-link btn btn-success text-light no-border bg-limegreen04" href="#">History</a>
              </li>
            </ul> 
          </div>
        </div>
      </nav>

{/*============================================================ BOX ===========================================================================*/}
      <div className="row mx-auto justify-content-center text-center">
        <div className="gallery-grid2 container">
          <h1>{car.vehicleName}</h1>
        </div>
      </div>

{/*========================================================== INPUT DATA ===========================================================================*/}

          <div className="gallery-frame3 mx-auto" >
          
            <form>
              <div class="mb-3">
                <label for="form-control" class="form-label">Nama Lengkap</label>
                <input type="text" class="form-control" id="exampleInputname" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail" class="form-label">No Telpon</label>
                <input type="number" class="form-control" id="exampleInputEmail"/>
              </div>

              <div class="input-group mb-3">
                <div class="input-group mb-3">

                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Pilih Driver</option>
                    <option value="0">One</option>
                    <option value="1"></option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div class="mb-3">
                <div class="input-group mb-3">
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Pilih Pembayaran</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div class="mb-3">
                <div className="row">
                  <div className="col-6">
                  <label for="tanggalpertama" class="form-label">Tanggal Pertama</label>
                    <div class="input-group mb-3">

                      <input type="date" id="tanggal"></input>

                    </div>
                  </div>

                  <div className="col-6">
                  <label for="tanggalpertama" class="form-label">Tanggal Kedua</label>
                    <div class="input-group mb-3">

                      <input type="date" id="tanggal"></input>

                    </div>
                  </div>

                </div>
              </div>

      
              <label for="totalharga" class="form-label">Total Harga Rp.</label>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          
          </div>

{/* ================================================================= FOOTER ===================================================== */}

        <footer class="py-5 d-flex justify-content-center">
                <div class="container-footer w-90 mx-auto container">
                    <div class="row">
                        <div class="col-md-3">
                            <p class="text-tipis">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            <p class="text-tipis">IBM@gmail.com</p>
                            <p class="text-tipis">081-233-334-808</p>
                        </div>
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
    </div>
  )
}

export default MenuMobil