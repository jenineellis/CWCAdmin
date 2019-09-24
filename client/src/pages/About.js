import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div id="about">
        <h3>About Us</h3>

        <p>
          California Wine Cooperative is unique. In 2019, students in a Web
          Development Bootcamp — Matthew Heimark, Avid Wine Appreciator, after
          years of living in the the northern Bay Area; Madeleine Kemeny, a
          former Pastry Chef and General Snob with a parent living in the
          Russian River Valley and across the road from multiple vineyards;
          Marta Tomaras, an Experienced Wine Fan, who grew up with grandparents
          making their own wine; and Jenine Ellis — developed a concept to
          introduce lesser known and smaller batch producing vineyards to
          discerning wine consumers whose local shops, outside of California,
          might not represent these wonderful products.
        </p>

        <p>
          We showcase the work of winegrowers committed to natural farming,
          small production, and the traditions of their respective regions. Many
          of the producers we represent are considered among the finest in the
          world. Through our personal relationship with these small family
          farms, the wines come directly from the cellars under perfect
          temperature controlled systems. We are privileged to share these
          beautiful wines and invite you to join this wonderful community of
          winegrowers and wine lovers.
        </p>

        <br />
        <hr />
        <h4>Contact Us</h4>
        <th>We’re available 7 days a week.</th>
        <ul>
          <li id="contact">• Mon - Fri 10AM – 8PM</li>
          <li id="contact">• Sat 9AM – 8PM</li>
          <li id="contact">• Sun 12PM – 4PM</li>
          <li id="contact">• Phone: 888-POUR-CWC</li>
          <li id="contact">• Email: info@cwc.com</li>
        </ul>

        <br />
        <hr />
        <h4>Careers</h4>

        <p>
          Interested in a career opportunity with California Wine Cooperative?
          Please email your resumé to info@cwc.com
        </p>
        <br />
      </div>
    );
  }
}

export default About;
