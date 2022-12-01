import { Outlet, Link } from "react-router-dom";
import React from "react";
function Imagecards() {
  // const title = useRef(null)
  // console.log(title.current)
  // let movieSelection = (event) => {
  //   event.preventDefault()
  //   console.log('hello')
  //   if(event.target.classList.contains('image_container')){
  //     console.log(title.current)

  //   }
  // }
  let moviename1 = () => {
    localStorage.setItem('m1',"Athiran")

  }
  let moviename2 = () => {
    localStorage.setItem('m1',"Hugo")

  }
  let moviename3 = () => {
    localStorage.setItem('m1',"Lunch Box")

  }
  let moviename4 = () => {
    localStorage.setItem('m1',"Vikram")

  }
  return (
    <>
    <div>
      <div className="image_container">
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
            <button  onClick={moviename1}> 
                     <Link to="/seatSelection" className="link">Book Now</Link>
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
                     <Link to="/seatSelection" onClick={moviename2}>Book Now</Link>
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
                     <Link to="/seatSelection" onClick={moviename3}>Book Now</Link>
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
                     <Link to="/seatSelection" onClick={moviename4}>Book Now</Link>
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
