import React from 'react'

const Card = ({car, navigate}) => {
  return (
      <>
        {
            car.map((car, index)=>{
                return (
                    <div className="col-sm-3 m-2">
                        <div className="card mx-auto">
                            <p>Nama:    {car.vehicleName}</p>
                            <p>Kapasitas:    {car.vehicleCapacity}</p>
                            <p>Harga:   {car.pricePerHour}</p>
                            <p>id:   {car.idVehicle}</p>
                        </div>
                        <button
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(`/MenuMobil/${car.idVehicle}`)
                        }}
                        > tes</button>
                   </div> 
                )
            })
        }
      </>
    
  )
}

export default Card