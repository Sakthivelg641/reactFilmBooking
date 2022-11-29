import { Outlet, Link } from "react-router-dom";
import React from "react";
function Imagecards() {
  let movieSelection = (e) => {
    e.preventDefault()
    console.log(e.target.innerHTML)
  }
  return (
    <>
    <div>
      <div className="image_container" onClick={(e) => movieSelection(e)}>
        <figure className="image-block">
          <h1 className="title">Athiran</h1>
          <img src="Athiran.jpg" alt="" />
          <figcaption>
            <h3>More Info</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              rem neque praesentium quis dolorum! Deleniti quod nisi repellat
              sed. Velit vitae deserunt maxime obcaecati, corporis ipsa aut id
              ad facilis.
            </p>
            <button>
              <nav>
                <ul>
                  <li>
                     <Link to="/seatSelection">Book Now</Link>
                  </li>
                </ul>
              </nav>
            </button>
          </figcaption>
        </figure>
        <figure className="image-block">
          <h1 className="title" id="titleid">
            Hugo
          </h1>
          <img src="hugo.jpg" alt="" />
          <figcaption>
            <h3>More Info</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              rem neque praesentium quis dolorum! Deleniti quod nisi repellat
              sed. Velit vitae deserunt maxime obcaecati, corporis ipsa aut id
              ad facilis.
            </p>
            <button>
            <nav>
                <ul>
                  <li>
                     <Link to="/seatSelection">Book Now</Link>
                  </li>
                </ul>
              </nav>
            </button>
          </figcaption>
        </figure>
        <figure className="image-block">
          <h1 className="title">Lunch Box</h1>
          <img src="lunchbox.jpeg" alt="" />
          <figcaption>
            <h3>More Info</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              rem neque praesentium quis dolorum! Deleniti quod nisi repellat
              sed. Velit vitae deserunt maxime obcaecati, corporis ipsa aut id
              ad facilis.
            </p>
            <button>
            <nav>
                <ul>
                  <li>
                     <Link to="/seatSelection">Book Now</Link>
                  </li>
                </ul>
              </nav>
            </button>
          </figcaption>
        </figure>
        <figure className="image-block">
          <h1 className="title">Vikram</h1>
          <img src="vikram.jpg" alt="" />
          <figcaption>
            <h3>More Info</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              rem neque praesentium quis dolorum! Deleniti quod nisi repellat
              sed. Velit vitae deserunt maxime obcaecati, corporis ipsa aut id
              ad facilis.
            </p>
            <button>
            <nav>
                <ul>
                  <li>
                     <Link to="/seatSelection">Book Now</Link>
                  </li>
                </ul>
              </nav>
            </button>
          </figcaption>
        </figure>
      </div>
    </div>
    <Outlet />
    </>
  );
}

export default Imagecards;
