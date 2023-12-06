import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
    const { ticket, onClickingDelete } = props;
    
    return (
      <React.Fragment>
        <h1>Ticket Detail</h1>
        <h3>{ticket.location} - {ticket.names}</h3>
        <button onClick={()=> onClickingDelete(ticket.id) }>Close Ticket</button> 
        <p><em>{ticket.issue}</em></p>
        <hr/>
      </React.Fragment>
    );
  }
  
  TicketDetail.propTypes = {
    ticket: PropTypes.object,
    onClickingDelete: PropTypes.func 
  };
  
  
  export default TicketDetail;