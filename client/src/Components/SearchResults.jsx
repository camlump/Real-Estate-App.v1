 import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBarAction from '../store/Actions/SearchBarAction'

import '../StyleSheet/SearchList.css'

const HouseOnList = () => {
  const { searchBarResults} = useSelector(
        (state) => state.searchBarResults
  )

  const dispatch = useDispatch();

  const us_states = [
    "Maryland",
    "Virginia",
    "California",
    "Georgia",
    "Texas",
    "Florida",
    "North Carolina",
    "New York",
  ];

  const query = window.location.href.split("/")[5];

  useEffect(() => {
    dispatch(SearchBarAction(query));
  }, [query]);

  return (
    <div className="Houses__container">
      <div className="container">
  <h3>Search Results for, "<span className="query">{query}</span>"</h3>
        {searchBarResults && (
        <div className="listedHouses">
          {searchBarResults.map((house) => {
            return (
              <div className="house__details" key={house._id}>
                <div className="img__container">
                  <Link to={`/house-details/${house._id}`}>
                    <img
                      src={house.house_details.house_image}
                      alt="house image"
                    />
                  </Link>
                </div>
                <div className="house_info">
                  <h3>
                    ${" "}
                    {house.house_details.price.toLocaleString(
                      navigator.language,
                      { minimumFractionDigits: 0 }
                    )}
                  </h3>
                  <div className="house__numbers">
                  <h3 className="House__summary">{`${house.house_details.numOfBeds} Bds, ${house.house_details.numOfBaths} ba, - House for ${house.house_details.isSaleOrRent.toLowerCase()}.`}</h3>
                    <h3>{`${house.house_details.squarefeet.toLocaleString(navigator.language, {minimumFractionDigits: 0})} sqft,  home in  ${house.house_location.city},  ${house.house_location.us_state}.`}</h3>
                  </div>
                 
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>
    </div>
  );
};

export default HouseOnList;