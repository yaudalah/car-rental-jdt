import React from 'react'

const Card = ({car}) => {
  return (
      <>
        {
            car.map((car, index)=>{
                return (
                    <div className="col-sm-3 m-2">
                        <div className="card">
                            <p>{car.vehicleName}</p>
                            <p>{car.vehicleCapacity}</p>
                            <p>{car.vehicleAvailability}</p>
                            <p>{car.pricePerHour}</p>
                        </div>
                   </div> 
                )
            })
        }
      </>
    
  )
}

export default Card