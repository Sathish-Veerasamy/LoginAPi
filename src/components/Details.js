import React from 'react'
import "./Dashboard.css"

const Details = ({user}) => {
  return (
    <div className='details'>
        
        <p><b>Name:</b>{user.firstName} {user.lastName}</p>
        <p><b>Age:</b> {user.age}</p>
        <p><b>Gender:</b> {user.gender}</p>
        <p><b>Email:</b>{user.email}</p>
        <p><b>Phone:</b>{user.phone}</p>
        <p><b>Date of Birth:</b>{user.birthDate}</p>
        <p><b>Bloodgroup:</b>{user.bloodGroup}</p>
        <p><b>Height:</b>{user.height}</p>
        <p><b>Weight:</b>{user.weight}</p>

    </div>
  )
}

export default Details