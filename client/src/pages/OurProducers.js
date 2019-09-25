import React, { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';

function OurProducers(props)  {

  const handleShow = () => props.updateGlobalState('showModal', true);
    
    return (
      <div id="producers">
        <h3>Our Producers</h3>

        <hr />

        <p>
          If you are a producer and would like to have us represent your
          products, please contact us. If you are an existing producer-partner,
          and need to update your information, please <Nav.Link onClick={handleShow} >Login.</Nav.Link>
        </p>
      </div>
    );
  }

export default OurProducers;
