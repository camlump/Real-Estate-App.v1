// const express= require('express')

// const router = express.Router()
const router = require('express').Router();

const {House} = require('../../Models/House');



//HOUSE Fetch


router.get('/api/house-sale', async(req, res)=>{

    try{
        House.find({'isSaleOrRent': 'SALE'}).exec().then((data)=>{
            // console.log(data);
            return res.status(200).json(data)
        })
    } catch(error) {
        return res.status(500).json({msg: 'server is currently Down :('})
    }
   
})


router.get('/api/house-rent', async(req, res)=>{

    try{
        House.find({'isSaleOrRent': 'RENT'}).exec().then((data)=>{
            return res.status(200).json(data)
        })
    } catch(error) {
        return res.status(500).json({msg: 'server is currently Down :('})
    }
   
})



router.get('/api/house-details/:id', async(req, res)=>{

    await House.findOne({_id:req.params.id}).exec().then(data=>{

        return res.status(200).json(data)
    }).catch(error =>{
        return res.status(400).json(error)
    })
})






router.get("/api/house-search/:query", async (request, response) => {
    const us_states = [
      "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Minor Outlying Islands", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    
    const query = request.params.query;
  
    const result = [];
    for (let counter = 0; counter < us_states.length; counter++) {
      let currentStates = us_states[counter];
      if (query.toLowerCase().includes(currentStates.toLowerCase())) {
        result.push(currentStates);
      }
    }
  
    House.find({'us_state': result[0] })
      .exec()
      .then((data) => {
        return response.status(200).json(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

 

 

 
  
module.exports = router;