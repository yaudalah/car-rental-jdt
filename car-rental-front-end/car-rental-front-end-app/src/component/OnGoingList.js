import React from 'react'

const OnGoingList = ({car}) => {
  return (
    <>
    {
        car.map((car, index)=>{
            return (
                <div className="history">
                    <p>Nama Mobil:    {car.vehicleName}</p>
                    <p>Kapasitas Mobil:    {car.vehicleCapacity}</p>
                    <p>Harga Mobil per jam:   {car.pricePerHour}</p>
                    <p>Harga Total:   {car.totalPrice}</p>
                </div> 
            )
        })
    }
    </>
  )
}

export default OnGoingList