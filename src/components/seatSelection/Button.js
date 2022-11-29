import React from "react";
import { Outlet, Link } from "react-router-dom";
function Button() {
  return (
    <>
      <div>
      <div className="btn">
        <button>
          <Link to="/payment">Go to Payment</Link>
        </button>
        <button>
          <a href="./homePage.html">Go to Home</a>
        </button>
      </div>
    </div>
    <Outlet />
    </>
  );
}

export default Button;
