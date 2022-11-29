import React from "react";
import { useEffect, useRef } from "react";
function Total(props) {
  const total = useRef(null);
  useEffect(() => {
    console.log(total.current);
  },[]); 
  return (
    <div>
      <div className="total">
        <div>
          <p className="parent">Total</p>
          <p className="child margin">
            Rs:<span id="total" ref={total}> 0</span> Only
          </p>
        </div>
        <div>
          <p className="parent">Seats</p>
          <p className="child">
            <span id="selectedSeats"></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Total;
