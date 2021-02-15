import React , {useState }from 'react'
import { Link } from 'react-router-dom'
import '../StyleSheet/HouseListingForm.css'
import axios from 'axios'


const HouseListingForm = () => {

    const [price, setPrice] = useState(0);
    const [city, setCity] = useState("");
    const [county, setCounty] = useState("");
    const [ numOfBeds, setNumOfBeds] = useState(1);
    const [ numOfBaths, setNumOfBaths] = useState(1);
    const [numOfGarages, setNumOfGarages] = useState(1);
    const [ isSaleOrRent, setIsSaleOrRent] = useState("");
    const [ house_image, setHouseImage] = useState(null);
    const [us_state, us_setState] = useState("");
    const [squarefeet, setSquareFeet] = useState(1);

    const listProperty = (event) =>{
        event.preventDefault()
        console.log('price', price)
        console.log('city', city)
        console.log('county', county)
        console.log('us_state ', us_state)
        console.log('squarefeet', squarefeet)
        console.log('numOfBeds', numOfBeds)
        console.log('numOfBaths',  numOfBaths)
        console.log('numOfGarages', numOfGarages)
        console.log('isSaleOrRent', isSaleOrRent)
        console.log('house_image', house_image)
      
        const data = new FormData();

        data.append('price', price)
        data.append('city', city)
        data.append('county', county)
        data.append('us_state', us_state)
        data.append('squarefeet', squarefeet)
        data.append('numOfBeds', numOfBeds)
        data.append('numOfBaths',  numOfBaths)
        data.append('numOfGarages', numOfGarages)
        data.append('isSaleOrRent', isSaleOrRent)
        data.append('house_image', house_image)

        axios.post("/api/house-listing", data).then(response=>{
            console.log(response.data)
        }).catch(error=> console.log(error))



    }
    return (
        <div className="HouseListing">
            <div className="form">
                <h3>LIST YOUR PROPERTY</h3>
                <label> House Price</label>
                <input type="number" placeholder="House Price" 
                onChange={(e)=>setPrice(e.target.value)} value={price}
                />
                <label >County</label>
              <input type="text" placeholder="County" 
              onChange={(e)=>setCounty(e.target.value)} value={county}/>
               
                <label >House Location(City)</label>
                <input type="text" placeholder="City" 
                onChange={(e)=>setCity(e.target.value)} value={city}
                />
                <label>House Location(State)</label>
                <input type="text" placeholder="State"
                onChange={(e)=>us_setState(e.target.value)} value={us_state}
                />
                <label>Sale or Rent</label>
                <select onChange={(e)=>setIsSaleOrRent(e.target.value)} value={isSaleOrRent}>
                    <option>...</option>
                    <option value={`SALE`}>Sale</option>
                    <option value={`RENT`}>Rent</option>
                </select>
                <label >Sqft</label>
               <input type="number" placeholder="sqft"
               onChange={(e)=>setSquareFeet(e.target.value)} value={squarefeet}
               />
                <label > Number of bedrooms</label>
                <input type="number" placeholder="Number of bedrooms" 
                onChange={(e)=>setNumOfBeds(e.target.value)} value={numOfBeds}
                />
                <label> Number of bathrooms</label>
                <input type="number" placeholder="Number of bathrooms" 
                onChange={(e)=>setNumOfBaths(e.target.value)} value={numOfBaths}
                />

            
                <label > Number of garages</label>
                <input type="number" placeholder="Number of garages" 
                onChange={(e)=>setNumOfGarages(e.target.value)} value={numOfGarages}
                />
                 <label>House image</label>
                <input type="file" placeholder="house image" 
                onChange={(e)=>setHouseImage(e.target.files[0])} 
                />
                  
                    <Link to="/"> <button onClick={listProperty}>List your Property</button> </Link> 
                
            </div>
            
        </div>
    )
}

export default HouseListingForm


