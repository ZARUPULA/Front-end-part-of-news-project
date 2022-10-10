import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1>THE TRUTH</h1>
            <h3 className="list-unstyled">
              <li>91+9849223924</li>
              <li>HYDERBAD, INDIA</li>
              <li>123 Streeet South North</li>
            </h3>
          </div>  
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THE TRUTH | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;