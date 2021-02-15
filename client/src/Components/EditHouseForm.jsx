import React, { useState, useEffect } from "react";

// import axios from "axios";

import axios, {get, put}  from 'axios'

import { Link, withRouter } from 'react-router-dom'

const EditHouseForm = (props) => {

    // const initialState = { 
   
    //     price: 0,
    //      city: '',
    //      county: '',
    //      numOfBeds: 0,
    //      numOfBaths: 0,
    //      numOfGarages: 0,
    //      isSaleOrRent: '',
    //      us_state: '',
    //      sqaurefeet: 0,
    //      house_image: 0,
       
    //    }

    //    const [house, setHouse] = useState(initialState)
  const [house, setHouse] = useState({ 
   id: '',
   price: 0,
    city: '',
    county: '',
    numOfBeds: 0,
    numOfBaths: 0,
    numOfGarages: 0,
    isSaleOrRent: '',
    us_state: '',
    sqaurefeet: 0,
    house_image: 0,
  
  });

const [houseShow, setShowLoading] = useState(true);

  const url = `http://localhost:5000/api/house-details/edit/${props.match.params.id}`;

  useEffect(function() { 
      setShowLoading(false);
      const fetchData = async () =>{
            const result = await axios(url);
            setHouse(result.data);
            console.log(result.data)
            setShowLoading(false)
      };
      fetchData()
  }, [])
  
//   useEffect(function() {
//     async function getHouse() {
//       try {
//         const response = await axios.get(url);
//         setHouse(response.data);        
//       } catch(error) {
//         console.log(error);
//       }
//     }
//     getHouse();    
//   }, [props,url]);




  const updateHouse = (e) =>{
      setShowLoading(true);
      e.preventDefault();
      const data ={ 
        price: house.price,
        city: house.city,
        county: house.county,
        numOfBeds: house.numOfBeds,
        numOfBaths: house.numOfBaths,
        numOfGarages: house.numOfGarages,
        isSaleOrRent: house.isSaleOrRent,
        us_state: house.us_state,
        sqaurefeet: house.sqaurefeet,
        house_image: house.house_image
      };
      put(url, data).then((result)=>{
          setShowLoading(false)
        //   props.history.push(`/house-details/${result + house_id}`)
      }).catch((error)=>{
          setShowLoading(false)
        console.log(error)
      })
  }

  const onChange = (e) =>{
      e.persist();
      setHouse({...house, [ e.target.name]: e.target.value})
  }

  return (
    <div>
      <h1>hello world</h1>
      <form className="form" onSubmit={updateHouse}>
      <label> House Price</label>
                <input type="number" placeholder="House Price" 
                onChange={onChange} defaultValue={house.price  || undefined }
                />
                <label >County</label>
              <input type="text" placeholder="County" 
              onChange={onChange}  defaultValue={house.county || ''}/>
               
                <label >House Location(City)</label>
                <input type="text" placeholder="City" 
                onChange={onChange} defaultValue={house.city || ''}
                />
                <label>House Location(State)</label>
                <input type="text" placeholder="State"
                onChange={onChange} defaultValue={house.us_state || '' }
                />
                <label>Sale or Rent</label>
                <select onChange={onChange} defaultValue={house.isSaleOrRent || '' }>
                    <option>...</option>
                    <option value={`SALE`}>Sale</option>
                    <option value={`RENT`}>Rent</option>
                </select>
                <label >Sqft</label>
               <input type="number" placeholder="sqft"
               onChange={onChange} defaultValue={house.squarefeet || undefined }
               />
                <label > Number of bedrooms</label>
                <input type="number" placeholder="Number of bedrooms" 
                onChange={onChange} defaultValue={house.numOfBeds || undefined  }
                />
                <label> Number of bathrooms</label>
                <input type="number" placeholder="Number of bathrooms" 
                onChange={onratechange} defaultValue={house.numOfBaths || undefined }
                />

            
                <label > Number of garages</label>
                <input type="number" placeholder="Number of garages" 
                onChange={onChange} defaultValue={house.numOfGarages || undefined}
                />
                 <label>House image</label>
                <input type="file" placeholder="house image" 
                onChange={onChange} 
                />

              <button className="button" type="submit">Update</button>
      </form>
       
    </div>
  );
};

export default withRouter(EditHouseForm);
