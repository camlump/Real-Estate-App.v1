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


module.exports = router;