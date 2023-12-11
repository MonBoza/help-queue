import React from "react";
import ticketsImage from "./../img/tickets.png"

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img height="300px" src={ticketsImage} alt="tickets" sr="true"/>
    </React.Fragment>
  );
}

export default Header;