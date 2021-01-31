import React, { useEffect, useState } from "react";
import axios from "axios";
import '../StyleSheet/HouseList.css'

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
      {houses && (
          <div className="HouseList__container">
          {houses.map((house, i) => {
              return (
                  <div key={i} className="single__house">
                  <hr/>
                <img src={house.house_details.house_image} alt="house picture" />
                <h4 className="House__price">${house.house_details.price}</h4>
                <h4 className="House__summary">{`${house.house_details.numOfBeds} Bedroom, single family home in ${house.house_location.city}.`}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ForSale;
