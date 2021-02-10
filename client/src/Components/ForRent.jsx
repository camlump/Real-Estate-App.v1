import React, { useEffect, useState } from "react";
import { Link} from 'react-router-dom'
import axios from "axios";
import '../StyleSheet/HouseList.css'

// import { useDispatch, useSelector } from 'react-redux'
// import { houseForSaleAction } from '../store/Actions/HouseFetchAction';

const ForRent = () => {
  // const dispatch = useDispatch();

  // const { loading,  error, houseForSaleList } = useSelector(
  //     (state) => state.houseForSale
  // );
  const url = "/api/house-rent";
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
        <h4>Properties for rent.</h4>
      {houses && (
          <div className="HouseList__container">
          {houses.map((house) => {
              return (
                  <div key={house._id} className="single__house">
                
               <Link to={`/house-details/${house._id}`}><img src={house.house_image} alt="house picture" /></Link>
                <h4 className="House__price"> For ${house.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} a month.</h4>
                <h4 className="House__summary">{`${house.numOfBeds} Bedroom, single family home in ${house.city}.`}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ForRent;
