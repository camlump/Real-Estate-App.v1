import React, { useEffect, useState } from "react";
import axios from "axios";
// import BackspaceIcon from '@material-ui/icons/Backspace';
// import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "../StyleSheet/SingleHouse.css";

import { Link } from 'react-router-dom'


const SingleHouse = () => {
  const house_id = window.location.href.split("/")[4];

  // console.log('HOUSE ID: ', house_id);
  //GET HOUSE OBJECT, USESTATE
  const url = `http://localhost:5000/api/house-details/${house_id}`;
  const [mounted, setMounted] = useState(true);
  const [house, setHouse] = useState("");

  //HANDLE EMAIL FORM, USESTATE
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const { data } = await axios.get(url);

      if (mounted) {
        setHouse(data);
      }
    };
    loadData();
    return () => [setMounted(false)];
  }, [mounted, url]);

  // console.log(house)

  const sendMessage = (e) => {
    e.preventdefault();

    console.log("Email", email);
    console.log("Subject", subject);
    console.log("message", message);
  };

  return (
    <div className="HosueDescription__container">
      {house && (
          <div className="HouseDescription__leftContainer">
              {(house.house_details.isSaleOrRent === 'SALE') ? <Link to="/house-sale"><ArrowBackIosIcon className="icon"/></Link> : <Link to="/house-rent"><ArrowBackIosIcon  className="icon"/></Link>  }
          
          <div className="img__container">
            <img
              className="img-fluid"
              src={house.house_details.house_image}
              alt=""
            />
          </div>
          <div className="number_container">
            <h3 className="housePrice">{`$${house.house_details.price.toLocaleString(
              navigator.language,
              { minimumFractionDigits: 0 }
            )}`}</h3>
            <h5> {house.house_details.numOfBeds} bd |</h5>
            <h5> {house.house_details.numOfBaths} ba |</h5>
            <h5>
              {" "}
              {house.house_details.squarefeet.toLocaleString(
                navigator.language,
                { minimumFractionDigits: 0 }
              )}{" "}
              sqft
            </h5>
          </div>

          <div className="houseText">
            <h3 className="houseDetails">{`${
              house.house_details.numOfBeds
            } Bedroom house in ${
              house.house_location.city
            } for ${house.house_details.isSaleOrRent}.`}</h3>

            <h4>
              2423 Duck Creek Road, {house.house_location.city},{" "}
              {house.house_location.us_state}
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
        </div>
      )}
      {/* <div className="HouseForm">
                <form className="Form" onSubmit={sendMessage} >
                    <label>Email</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter a valid email"/>
                    <label >Subject</label>
                    <input type="text" onChange={(e)=>setSubject(e.target.value)} placeholder="Enter a Subject"/>
                    <label >Message</label>
                    <textarea  cols="30" rows="10" onChange={(e)=>setMessage(e.target.value)} placeholder="Enter a message"></textarea>
                    <button>Send</button>
                </form>
            </div> */}
    </div>
  );
};

export default SingleHouse;
