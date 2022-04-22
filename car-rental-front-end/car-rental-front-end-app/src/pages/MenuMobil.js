import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";

import './css/index.css'
import './css/gallery.css'
import axios from 'axios';
import OnGoingList from '../component/OnGoingList';


export const MenuMobil = () => {
  const [car, setCar] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [driver, setDriver] = useState("");
  const [drivers, setDrivers] = useState([]);
  const [payment, setpayment] =useState("");
  const [payments, setpayments] = useState([]);
  const [TP, setTP] =useState("");
  const [TK, setTK] =useState("");
  

  const [message, setMessage] = useState("");



// API UNTUK FORM
  let handleSubmit = async (e) => {

    e.preventDefault();
    console.log(TP,TK)
    try {
      let res = await fetch("http://localhost:8080/api/v1/order/create-order", {
        method: "POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify({
          customerName: name,
          idVehicle: params.id,
          email: email,
          phoneNumber: String (phone),
          idDriver:  parseInt(driver),
          idPaymentMethod: parseInt(payment),
          startHour: moment(TP).utc().format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
          finishHour: moment(TK).utc().format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
          
        }),

      });
      navigate("/ongoingrental")

      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setPhone("");
        setDriver("");
        setpayment("");
        setTP("")
        setTK("")
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

// API UNTUK TAMPILAN MOBIL
    useEffect(()=> {
      if (params.id) {
        fetchCars(params.id);
        fetchDriver();
        fetchPayment();
      }
    },[params]) 

//kalo mau manggil total price
    // useEffect(()=> {
    //   if (TK && TP) {
    //     console.log("disini memanggil total price")
    //   }
    // },[TK, TP]) 


    // API MOBIL
    const fetchCars = async(id) => {
      try {
          const getCars = await fetch("http://localhost:8080/api/v1/vehicle/"+id);
          const response = await getCars.json();
          setCar(response);
      } catch (error) {
        console.error(error);
      }
    }

    // API DRIVER
    const fetchDriver = async() => {
      try {
        
        await axios.get("http://localhost:8080/api/v1/driver/get-all-drivers").then(res =>{
          setDrivers(res.data);

        }).catch(err => {
          console.error(err);
        });
        console.log(driver);
      } catch (error) {
        console.error(error);    
      }
    }

    const fetchPayment = async() => {
      try {
        await axios.get("http://localhost:8080/api/v1/payment-method/get-all-payment-methods").then(res =>{
          setpayments(res.data);

        }).catch(err => {
          console.error(err);
        });
        console.log(payment);
      } catch (error) {
        console.error(error);    
      }
    }


console.log(new Date().toISOString())
console.log(moment().utc().format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  return (
    <div>
{/*============================================================ HEADER ===========================================================================*/}
      <nav className="navbar navbar-expand-lg justify-content-evenly navbar-light bg-light rounded">
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
        <div className="gallery-grid2 container gallery-frame3 text-center">
            <p>Nama:    {car.vehicleName}</p>
            <p>Kapasitas:    {car.vehicleCapacity}</p>
            <p>Harga:   Rp.{car.pricePerHour}</p>         
        </div>
      </div>

{/*========================================================== INPUT DATA ===========================================================================*/}

          <div className="gallery-frame3 mx-auto" >
           
            <form onSubmit={handleSubmit}>
               {/* NAMA */}
              <div class="mb-3">
                <label for="form-control" class="form-label">Nama Lengkap</label>
                <input type="text" class="form-control" id="exampleInputname" value={name} onChange={(e) => setName(e.target.value)} required/>
              </div>

              {/* EMAIL */}
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>

              {/* PHONE */}
              <div class="mb-3">
                <label for="form-control" class="form-label">Telepon</label>
                <input type="number" class="form-control" id="exampleInputnumber" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
              </div>

              {/* DRIVER */}
              <div class="input-group mb-3">
                <div class="input-group mb-3">
                  <select class="form-select" id="inputGroupSelect01" value={driver} onChange={(e) => setDriver(e.target.value)} required>
                    <option selected disable>Pilih Driver</option>
                    {drivers.map(item => 
                      <option value={item.idDriver}>{item.driverName}</option>
                    )}
                  </select>
                </div>
              </div>

              {/* PEMBAYARAN */}
              <div class="mb-3">
                <div class="input-group mb-3">
                  <select class="form-select" id="inputGroupSelect01" value={payment} onChange={(e) => setpayment(e.target.value)} required>
                    <option selected disable>Pilih Pembayaran</option>
                    {payments.map(item => 
                      <option value={item.idPaymentMethod}>{item.paymentMethodName}</option>
                    )}
                  </select>
                </div>
              </div>

              {/* TANGGAL PENANGGALAN */}
              <div class="mb-3">
                <div className="row">
                  <div className="col-6">
                  <label for="tanggalpertama" class="form-label">Tanggal Pertama</label>
                    <div class="input-group mb-3">
                      <input type="datetime-local" id="tanggal" value={TP} onChange={(e) => setTP(e.target.value)} required/>
                    </div>
                  </div>

                  <div className="col-6">
                  <label for="tanggalpertama" class="form-label">Tanggal Kedua</label>
                    <div class="input-group mb-3">
                    <input type="datetime-local" min={moment(TP).utc().format("YYYY-MM-DDTHH:mm")} id="tanggal" value={TK} onChange={(e) => setTK(e.target.value)} required/>
                    </div>
                  </div>

                </div>
              </div>
              {/* TOTAL DAN BUTTON */}
              
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Sewa Mobil</button>               
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