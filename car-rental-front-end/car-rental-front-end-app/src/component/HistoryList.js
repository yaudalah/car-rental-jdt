import React from 'react'

const HistoryList = ({car}) => {
  return (
        <>
        {
            car.map((car, index)=>{
                return (
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
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default HistoryList