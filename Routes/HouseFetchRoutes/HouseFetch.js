// const express= require('express')

// const router = express.Router()
const router = require('express').Router();

const {House} = require('../../Models/House');



//HOUSE Fetch


router.get('/api/house-sale', async(req, res)=>{

    try{
        House.find({'house_details.isSaleOrRent': 'SALE'}).exec().then((data)=>{
            console.log(data);
            return res.status(200).json(data)
        })
    } catch(error) {
        return res.status(500).json({msg: 'server is currently Down :('})
    }
   
})


router.get('/api/house-rent', async(req, res)=>{

    try{
        House.find({'house_details.isSaleOrRent': 'RENT'}).exec().then((data)=>{
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
      "Maryland",
      "Virginia",
      "California",
      "Georgia",
      "Texas",
      "Florida",
      "North Carolina",
      "New York",
    ];
    const query = request.params.query;
  
    const result = [];
    for (let counter = 0; counter < us_states.length; counter++) {
      let currentStates = us_states[counter];
      if (query.toLowerCase().includes(currentStates.toLowerCase())) {
        result.push(currentStates);
      }
    }
  
    House.find({ "house_location.us_state": result[0] })
      .exec()
      .then((data) => {
        return response.status(200).json(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;