import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../StyleSheet/HouseList.css";

// import { useDispatch, useSelector } from 'react-redux'
// import { houseForSaleAction } from '../store/Actions/HouseFetchAction';

const ForSale = () => {
  // const dispatch = useDispatch();

  // const { loading,  error, houseForSaleList } = useSelector(
  //     (state) => state.houseForSale
  // );
  const url = "/api/house-sale";
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setHouses(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="Houses__container">
      <h2>Houses for Sale.</h2>
      {houses && (
        <div className="HouseList__container">
          {houses.map((house) => {
            return (
              <div key={house._id} className="single__house">
              

                  <div className="img_container">
                  <Link to={`/house-details/${house._id}`}>
                    <img className="img-fluid"
                      src={house.house_details.house_image}
                      alt="house picture"
                    />
                  </Link>
                    </div>                 
                
                
                <h4 className="House__price">
                  $
                  {house.house_details.price.toLocaleString(
                    navigator.language,
                    { minimumFractionDigits: 0 }
                  )}
                </h4>
                <h4 className="House__summary">{`${house.house_details.numOfBeds} Bedroom, single family home in ${house.house_location.city}, ${house.house_location.us_state}`}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ForSale;
