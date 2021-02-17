import React, { useState, useEffect, useRef } from "react";

// import axios from "axios";

import axios   from 'axios'

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
    squarefeet: 0,
    house_image: 0,

  });

// const[house, setHouse] =useState(props.house)

const [houseShow, setShowLoading] = useState(true);

// const form = useRef(null)

  const url = `http://localhost:5000/api/house-details/edit/${props.match.params.id}`;

  useEffect(function() {
      setShowLoading(false);
      const fetchData = async () =>{
            const result = await axios(`/api/house-details/${props.match.params.id}`);
            setHouse(result.data);
            console.log(result.data)
            setShowLoading(false)
      };
      fetchData()
  }, [])



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
        squarefeet: house.squarefeet,
        house_image: house.house_image
      };
     axios.put(`/api/house-details/edit/${props.match.params.id}`, data).then(()=>{
          setShowLoading(false)
          props.history.push(`/house-details/${props.match.params.id}`)
      }).catch((error)=>{
          setShowLoading(false)
        console.log(error)
      })
  }

  const onChange = (e) =>{
      e.persist();
      setHouse({...house, [ e.target.name]: e.target.value})
  }

// const onChange =(e) =>{
//     e.preventDefault()
//     setHouse({...house, value: e.target.value })
// }

// const handleSubmit = (e)=>{
//     setHouse()
// }

  return (
      <div>
      <h1>hello world</h1>
        <form  className="form" >
      <label> House Price</label>
                <input type="number" placeholder="House Price" name="price" onChange={onChange}
                 defaultValue={house.price  || undefined }
                />
                <label >County</label>
              <input type="text" placeholder="County" name="county" onChange={onChange}
               defaultValue={house.county || ''}/>

                <label >House Location(City)</label>
                <input type="text" placeholder="City" name="city" onChange={onChange}
                defaultValue={house.city || ''}
                />
                <label>House Location(State)</label>
                <input type="text" placeholder="State" name="us_state" onChange={onChange}
                defaultValue={house.us_state || '' }
                />
                <label>Sale or Rent</label>
                <select name="isSaleOrRent" onChange={onChange} defaultValue={house.isSaleOrRent || '' }>
                    <option>...</option>
                    <option value={`SALE`}>Sale</option>
                    <option value={`RENT`}>Rent</option>
                </select>
                <label >Sqft</label>
               <input type="number" placeholder="sqft" name="squarefeet"
         onChange={onChange}       defaultValue={house.squarefeet || undefined }
               />
                <label > Number of bedrooms</label>
                <input type="number" placeholder="Number of bedrooms" name="numOfBeds"
             onChange={onChange}    defaultValue={house.numOfBeds || undefined  }
                />
                <label> Number of bathrooms</label>
                <input type="number" placeholder="Number of bathrooms" name="numOfBaths"
              onChange={onChange}  defaultValue={house.numOfBaths || undefined }
                />

                <label > Number of garages</label>
                <input type="number" placeholder="Number of garages" name="numOfGarages"
              onChange={onChange}  defaultValue={house.numOfGarages || undefined}
                />
                 <label>House image</label>
                <input type="file" placeholder="house image" name="house-image"
                     onChange={onChange}
                />

              <button className="button" onClick={updateHouse}>Update</button>
            </form>
      {/* <form className="form" onSubmit={handleSubmit}>
      <label> House Price</label>
                <input type="number" placeholder="House Price"
                onChange={onChange} value={house.price }
                />
                <label >County</label>
              <input type="text" placeholder="County"
              onChange={onChange}  value={house.county }/>

                <label >House Location(City)</label>
                <input type="text" placeholder="City"
                onChange={onChange} value={house.city}
                />
                <label>House Location(State)</label>
                <input type="text" placeholder="State"
                onChange={onChange} value={house.us_state  }
                />
                <label>Sale or Rent</label>
                <select onChange={onChange} value={house.isSaleOrRent  }>
                    <option>...</option>
                    <option value={`SALE`}>Sale</option>
                    <option value={`RENT`}>Rent</option>
                </select>
                <label >Sqft</label>
               <input type="number" placeholder="sqft"
               onChange={onChange} value={house.squarefeet  }
               />
                <label > Number of bedrooms</label>
                <input type="number" placeholder="Number of bedrooms"
                onChange={onChange} value={house.numOfBeds   }
                />
                <label> Number of bathrooms</label>
                <input type="number" placeholder="Number of bathrooms"
                onChange={onChange} vlue={house.numOfBaths  }
                />

                <label > Number of garages</label>
                <input type="number" placeholder="Number of garages"
                onChange={onChange} value={house.numOfGarages }
                />
                 <label>House image</label>
                <input type="file" placeholder="house image"
                onChange={onChange}
                />

              <button className="button" type="submit" value="submit">Update</button>
       </form>  */}
    </div>
  );
};

export default withRouter(EditHouseForm);




