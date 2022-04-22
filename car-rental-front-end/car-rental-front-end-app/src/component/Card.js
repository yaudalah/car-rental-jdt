import React from 'react'

const Card = ({car, navigate}) => {
  return (
      <>
        {
            car.map((car, index)=>{
                return (
                    <div className="col-sm-3 m-2">
                        <div className="card mx-auto py-2">
                            <h4>Mobil:    {car.vehicleName}</h4>
                            <p>Kapasitas:    {car.vehicleCapacity}</p>
                            <p>Harga per Jam:   Rp.{car.pricePerHour}</p>
                            <button class="btn btn-primary mx-5"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(`/MenuMobil/${car.idVehicle}`)
                            }}
                            > Pilih Mobil</button>
                        </div>
                   </div> 
                )
            })
        }
      </>
    
  )
}

export default Card