import React from "react";
import { useState } from "react";
import "./seatSelection.css";
import Screen from "./Screen";
import Total from "./Total";
import Button from "./Button";

function Seats({ totalAmount }) {
  let [seatArray, setSeatArray] = useState([]);
  let [count, setCount] = useState(0);
  let selection = (e) => {
    e.preventDefault();
    if (
      e.target.classList.contains("seats") &&
      !e.target.classList.contains("booked")
    ) {
      e.target.classList.toggle("selected");
      if (e.target.classList.contains("selected")) {
        e.preventDefault();
        // seatArray.push(e.target.textContent)
        let ArrayTemp = [...seatArray];
        ArrayTemp.push(e.target.textContent);
        setSeatArray(ArrayTemp);
        setCount(count + 1);
        console.log(count);
        // console.log(seatArray)
      } else {
        let tempDeleteArray = [...seatArray];
        tempDeleteArray.removeByValue = function (val) {
          for (let i = 0; i < this.length; i++) {
            if (this[i] === val) {
              this.splice(i, 1);
              i--;
            }
          }
          return this;
        };
        tempDeleteArray.removeByValue(e.target.textContent);
        setSeatArray(tempDeleteArray);
        setCount(count - 1);
        console.log(count);
      }
    }

    document.getElementById("movieId").textContent = localStorage.getItem("m1");
  };
  return (
    <div>
      <div className="container" onClick={(e) => selection(e)}>
        <h1>SELECT YOUR SEATS</h1>
        <h2 id="movieId">....</h2>
        <div className="seat">
          <div className="table">
            <div className="row1">
              <div className="seats">A1</div>
              <div className="seats">A2</div>
              <div className="seats">A3</div>
              <div className="seats">A4</div>
              <div className="seats">A5</div>
              <div className="seats">A6</div>
              <div className="seats">A7</div>
              <div className="seats">A8</div>
              <div className="seats">A9</div>
              <div className="seats">A10</div>
            </div>
          </div>
          <div className="table">
            <div className="row1">
              <div className="seats">B1</div>
              <div className="seats">B2</div>
              <div className="seats">B3</div>
              <div className="seats">B4</div>
              <div className="seats">B5</div>
              <div className="seats booked">B6</div>
              <div className="seats">B7</div>
              <div className="seats">B8</div>
              <div className="seats">B9</div>
              <div className="seats">B10</div>
            </div>
          </div>
          <div className="table">
            <div className="row1">
              <div className="seats">C1</div>
              <div className="seats">C2</div>
              <div className="seats">C3</div>
              <div className="seats">C4</div>
              <div className="seats">C5</div>
              <div className="seats">C6</div>
              <div className="seats booked">C7</div>
              <div className="seats">C8</div>
              <div className="seats">C9</div>
              <div className="seats">C10</div>
            </div>
          </div>
          <div className="table">
            <div className="row1">
              <div className="seats">D1</div>
              <div className="seats">D2</div>
              <div className="seats">D3</div>
              <div className="seats">D4</div>
              <div className="seats">D5</div>
              <div className="seats">D6</div>
              <div className="seats booked">D7</div>
              <div className="seats">D8</div>
              <div className="seats">D9</div>
              <div className="seats">D10</div>
            </div>
          </div>
          <div className="table">
            <div className="row1">
              <div className="seats">E1</div>
              <div className="seats">E2</div>
              <div className="seats">E3</div>
              <div className="seats">E4</div>
              <div className="seats">E5</div>
              <div className="seats">E6</div>
              <div className="seats booked">E7</div>
              <div className="seats">E8</div>
              <div className="seats">E9</div>
              <div className="seats">E10</div>
            </div>
          </div>
        </div>
      </div>
      <Screen></Screen>
      <Total count={count} seatArray={seatArray}></Total>
      <Button></Button>
    </div>
  );
}

export default Seats;

// Render table with dynamic data