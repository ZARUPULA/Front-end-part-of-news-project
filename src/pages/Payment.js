import { useEffect, useState } from 'react';
import Axios from 'axios';
import { HiSwitchHorizontal } from 'react-icons/hi';

import { Link } from 'react-router-dom';

import {Routes, Route, useNavigate} from 'react-router-dom';
import React from 'react';
import './Payment.css';



function Payment() {
   
      return (
  
        <div className="rowPayment">
          <div className="col-75">
            <div className="containerPayment">
              {/* <form action="/Currency"> */}
              <form>
                <div className="rowPayment">
                    <div className="rowPayment">
                      {/* <div className="col-50">
                        <label className="labelPayment" htmlFor="state">State</label>
                        <input className="inputPayment" type="text" id="state" name="state"  />
                      </div>
                      <div className="col-50">
                        <label className="labelPayment" htmlFor="zip">Zip</label>
                        <input  className="inputPayment" type="text" id="zip" name="zip"  />
                      </div> */}
                    </div>
                  </div>
                  <div className="col-50">
                    <div className="icon-container">
                      <i className="fa fa-cc-visa" style={{color: 'navy'}} />
                      <i className="fa fa-cc-amex" style={{color: 'blue'}} />
                      <i className="fa fa-cc-mastercard" style={{color: 'red'}} />
                      <i className="fa fa-cc-discover" style={{color: 'orange'}} />
                    </div>
                    <label className="labelPayment" htmlFor="cname">Name on Card</label>
                    <input className="inputPayment" type="text" id="cname" name="cardname"  /> <br/>
                    <label className="labelPayment" htmlFor="ccnum">Credit card number</label>
                    <input className="inputPayment" type="text" id="ccnum" name="cardnumber" /> <br/>
                    <label className="labelPayment" htmlFor="expmonth">Exp Month</label>
                    <input className="inputPayment" type="text" id="expmonth" name="expmonth"  /> <br/>
                    <div className="rowPayment">
                      <div className="col-50">
                        <label className="labelPayment" htmlFor="expyear">Exp Year</label>
                        <input className="inputPayment" type="text" id="expyear" name="expyear"  />
       
                      </div>
                      <div className="col-50">
                        <label className="labelPayment"  htmlFor="cvv">CVV </label>
                        <input className="inputPayment" type="text" id="cvv" name="cvv" />
                      </div>
                    </div>
                  </div>
                
                
                <div>
                <input type="submit" defaultValue="Submit" className="btnPayment" onClick={alert(" redirecting to payment page")}/>
                </div>
                </form>
            </div>
          </div>
          <div className="col-25">
            <div className="containerPayment">
       
              {/* <p> <span className="price">$</span></p> */}
    
              <hr />
              <p>Total Payment <span className="price" style={{color: 'black'}}><b>360</b></span></p>
            </div>
          </div>
        </div>
      );
    }



   export default Payment;