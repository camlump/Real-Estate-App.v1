import React, { useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom'
import axios from "axios";
// import BackspaceIcon from '@material-ui/icons/Backspace';
// import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "../StyleSheet/SingleHouse.css";
import placeholder from "../images/placeholder-image.jpg";


import { Link ,withRouter} from "react-router-dom";

const SingleHouse = (props) => {
  // const house_id = window.location.href.split("/")[4];

  // console.log('HOUSE ID: ', house_id);
  //GET HOUSE OBJECT, USESTATE

  const url = `http://localhost:5000/api/house-details/${props.match.params.id}`;
  const [mounted, setMounted] = useState(true);
  const [house, setHouse] = useState("");

  // useEffect(() => {
  //   const loadData = async () => {
  //     const { data } = await axios.get(url);

  //     if (mounted) {
  //       setHouse(data);
  //     }
  //   };
  //   loadData();
  //   return () => [setMounted(false)];
  // }, [mounted, url]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setHouses(result.data);
      setShowLoading(false);
    };
  
    fetchData();
  }, []);

  async function handleDelete() {
    try {
      await axios.delete(`${url}`);
      props.history.push("/house-sale");
    } catch (error) {
      console.error(error);
    }
  }

  // console.log(house)

  return (
    <div className="HosueDescription__container">
      {house && (
        <div className="HouseDescription__leftContainer">
          {house.isSaleOrRent === "SALE" ? (
            <Link to="/house-sale">
              <ArrowBackIosIcon className="icon" />
            </Link>
          ) : (
            <Link to="/house-rent">
              <ArrowBackIosIcon className="icon" />
            </Link>
          )}
          <div className="houseImg-container">
            <div className="img__container">
              <img
                className="img-fluid"
                src={house.house_image}
                alt="house-image"
              />
            </div>
            <div className="placeholder-container">
              <img
                className="placeholder"
                src={placeholder}
                alt="placeholder-img"
              />
              <img
                className="placeholder"
                src={placeholder}
                alt="placeholder-img"
              />
            </div>
          </div>
          <div className="number_container">
            <h3 className="housePrice">{`$${house.price.toLocaleString(
              navigator.language,
              { minimumFractionDigits: 0 }
            )}`}</h3>
            <h5> {house.numOfBeds} bd |</h5>
            <h5> {house.numOfBaths} ba |</h5>
            <h5>
              {" "}
              {house.squarefeet.toLocaleString(navigator.language, {
                minimumFractionDigits: 0,
              })}{" "}
              sqft
            </h5>
          </div>

          <div className="houseText">
            <h3 className="houseDetails">{`${
              house.numOfBeds
            } Bedroom house in ${
              house.city.charAt(0).toUpperCase() + house.city.slice(1)
            } for ${house.isSaleOrRent}.`}</h3>

            <h4>
              2423 Duck Creek Road,{" "}
              {house.city.charAt(0).toUpperCase() + house.city.slice(1)},{" "}
              {house.us_state.charAt(0).toUpperCase() + house.us_state.slice(1)}
            </h4>

            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              fugiat autem cumque voluptas? Ratione error reprehenderit delectus
              odio quos iure soluta adipisci fugit, dolores amet neque! Quaerat
              ipsum laborum consectetur rem voluptas, ullam quisquam aut
              eligendi nesciunt culpa ad totam, corporis a! Velit consequatur
              molestias dolor corrupti iure sequi id expedita repellendus
              impedit neque. Impedit cupiditate laboriosam commodi aperiam nobis
              odio sunt, error adipisci atque ex minima nisi dignissimos unde!
              Quod est laudantium, neque dolor atque itaque. Est, dignissimos
              eum.
            </h4>
          </div>
          <Link to={`/edit/${props.match.params.id}`}> <button>Edit House</button></Link> 
          <Link to="/house-sale">
            {" "}
            <button onClick={handleDelete}>Delete House</button>
          </Link>
        </div>
      )}
      <div className="edit-from"></div>
    </div>
  );
};

export default withRouter(SingleHouse)
