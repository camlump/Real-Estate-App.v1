import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../StyleSheet/HouseList.css";

import { useDispatch, useSelector } from 'react-redux'
import houseForSaleAction  from '../store/Actions/HouseFetchAction';

const ForSale = (props) => {

  const url = "/api/house-sale";
  const [houses, setHouses] = useState([]);
  // const [house, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setHouses(result.data);
      setShowLoading(false);
    };
  
    fetchData();
  }, []);
    
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setHouses(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },[props,url]);
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
                    <img 
                      src={house.house_image}
                      alt="house picture"
                    />
                  </Link>
                    </div>                 
                
                
                <h4 className="House__price">
                  $
                  {house.price
                  .toLocaleString(
                    navigator.language,
                    { minimumFractionDigits: 0 })
                  }
                </h4>
                <h4 className="House__summary">{`${house.numOfBeds} Bedroom, single family home in ${house.city.charAt(0).toUpperCase() + house.city.slice(1)}, ${house.us_state.charAt(0).toUpperCase() + house.us_state.slice(1) }`}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ForSale;
