import React from "react";
import { useEffect } from "react";
function Total({count, seatArray}) {
  useEffect(() => {
    // console.log(total.current);
    // let totalValue = total.current
    // totalValue.textContent = 150 * count
    let seatElement = document.getElementById('selectedSeats')
    seatElement.textContent = seatArray
    let total = document.getElementById('total')
    console.log(count)
    localStorage.setItem('seats',seatElement.textContent)
    total.textContent = 150 *count
    localStorage.setItem('total',total.textContent)
  },[count, seatArray]); 
  // const seatsSelected = useRef(null)
  // console.log(seatsSelected.current)
  // seatsSelected.current.textContent = seatArray
 
 
  return (
    <div>
      <div className="total">
        <div>
          <p className="parent">Total</p>
          <p className="child margin">
            Rs:<span id="total"> 0</span> Only
          </p>
        </div>
        <div>
          <p className="parent">Seats</p>
          <p className="child">
            <span id="selectedSeats">Not selected</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Total;
