import React, {useEffect, useState} from 'react'
import axios from 'axios'

const SingleHouse = () => {

    const house_id = window.location.href.split('/')[4]

    // console.log('HOUSE ID: ', house_id);
    //GET HOUSE OBJECT, USESTATE
    const url = `http://localhost:5000/api/house-details/${house_id}`
    const [mounted, setMounted] = useState(true)
    const [house, setHouse] = useState('')


    //HANDLE EMAIL FORM, USESTATE
    const [email, setEmail] = useState('');
    const[subject, setSubject] = useState('');
    const [message, setMessage] = useState('')


    useEffect(()=>{
        const loadData = async () => {
            const {data} = await axios.get(url);

            if(mounted) {
                setHouse(data)
            }
        }
        loadData()
        return()=>[setMounted(false)]
    },[mounted, url]);

    // console.log(house)

    const sendMessage = (e) => {
        e.preventdefault();

        console.log('Email', email);
        console.log('Subject', subject);
        console.log('message', message)
    }
    
    return (
        <div className="HosueDescription__container">
           {house && ( <div className="HouseDescription__leftContainer">
             
                <img src={house.house_details.house_image} alt=""/>
                <h3>{`$${house.house_details.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}`}</h3>
                <h3>{`${house.house_details.numOfBeds} Bedroom house in ${house.house_location.city} for ${house.house_details.isSaleOrRent}.`}</h3>
                <div className="number_container">
                    <h5> Bedrooms: {house.house_details.numOfBeds}</h5>
                    <h5> Bathrooms: {house.house_details.numOfBaths}</h5>
                    <h5> Garages: {house.house_details.numOfGarages}</h5>

                    <h4>2423 Duck Creek Road</h4>

                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi fugiat autem cumque voluptas? Ratione error reprehenderit delectus odio quos iure soluta adipisci fugit, dolores amet neque! Quaerat ipsum laborum consectetur rem voluptas, ullam quisquam aut eligendi nesciunt culpa ad totam, corporis a! Velit consequatur molestias dolor corrupti iure sequi id expedita repellendus impedit neque. Impedit cupiditate laboriosam commodi aperiam nobis odio sunt, error adipisci atque ex minima nisi dignissimos unde! Quod est laudantium, neque dolor atque itaque. Est, dignissimos eum.</h4>


                </div>
         </div> )}
            <div className="HouseForm">
                <form className="Form" onSubmit={sendMessage} >
                    <label>Email</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter a valid email"/>
                    <label >Subject</label>
                    <input type="text" onChange={(e)=>setSubject(e.target.value)} placeholder="Enter a Subject"/>
                    <label >Message</label>
                    <textarea  cols="30" rows="10" onChange={(e)=>setMessage(e.target.value)} placeholder="Enter a message"></textarea>
                    <button>Send</button>
                </form>
            </div>
           
        </div>
    )
}

export default SingleHouse



