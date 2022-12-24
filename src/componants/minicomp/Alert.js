import React from 'react'

export const Alert = (props) => {
  return (
    <div className='alert alert-danger text-center mt-1' role="alert">
       <marquee>{props.alert} {props.alert1} </marquee>
        
    </div>
  )
}
