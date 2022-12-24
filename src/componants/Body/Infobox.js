import React from 'react'

export const Infobox = () => {
 
  return (
    <div className='container'>
        <div className="card" >
  <div className="card-header text-center">
  <h3> Important Links</h3>
  </div>
  <ul className="list-group list-group-flush">
    
    <button type="button" class="btn btn-outline-info"><a  href='https://hall_ticket.ignou.ac.in/hallticketdec22/IGNOUHallTicketDec2022.aspx'>Hall Ticket</a></button>

   
    <button type="button" class="btn btn-outline-info"><a  href='https://onlinerr.ignou.ac.in/'>Re-Registration</a></button>

    <button type="button" class="btn btn-outline-info" ><a  href='http://www.ignou.ac.in/'>IgnouHome</a></button>
  </ul>
</div>
    </div>
  )
}
