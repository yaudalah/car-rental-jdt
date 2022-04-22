import React from 'react'

const OnGoingList = ({car, navigate}) => {
    const handleFinish  = async (id) => {
      let res = await fetch("http://localhost:8080/api/v1/order/finish-order/" +id, {
    
    method: "POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
    })
    }
  return (
  <>
    {
        car.map((car, index)=>{
            return (
              <div>
                <div className="row mx-auto justify-content-center">
                        <div className="gallery-grid2 container gallery-frame2">
                          <div className="OnGoing">
                            <p>Nama Customer:     <strong>{car.customerName}</strong></p>
                            <p>Email:             <strong>{car.email}</strong></p>
                            <p>Nomer Telepon:     <strong>{car.phoneNumber}</strong></p>
                          </div> 
                          <div className='OnGoing'>
                            <p>Nama Sopir:        <strong>{car.driverName}</strong></p>
                            <p>Nama Mobil:        <strong>{car.vehicleName}</strong></p>
                            <p>Harga Mobil per jam:   <strong>{car.pricePerHour}</strong></p>
                          </div>
                          <div className='OnGoing'>
                            <p>Jenis Pembayaran:      <strong>{car.paymentMethodName}</strong></p>
                            <p>No Rek:                <strong>{car.noRek}</strong></p>
                            <p>Harga Total:           <strong>{car.totalPrice}</strong></p>
                          </div>
                          <div className='OnGoing'>
                            <p>Jam Mulai:      <strong>{String(car.startHour).slice(11,16)}</strong></p>
                            <p>Jam Selesai:   <strong>{String(car.finishHour).slice(11,16)}</strong></p>
                          </div>
                          <button 
                          class="btn btn-primary mx-5" onClick={(e) => {
                            e.preventDefault();
                            handleFinish(car.idTransaction)
                            navigate(`/history`)
                          }}
                          > 
                            Selesai
                          </button> 
                        </div>

                </div>              
              </div>
            )
        })
    }
    </>
  )
}

export default OnGoingList