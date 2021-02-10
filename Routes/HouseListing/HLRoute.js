// const express = require('express')
// const router = express.Router()
const router = require('express').Router();
const {House} = require('../../Models/House');
const Formidable = require('formidable');
const cloudinary = require('cloudinary').v2
const mongoose = require('mongoose');
require("dotenv").config()
// const { request, response } = require('express');
// const dotenv = require("dotenv");
// dotenv.config();


// const validateHouseInput = require('../../validation/houseListFrom')


//mongoDB and Cloudinary

const mongoURI = process.env.Mongo_URI;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology:true}, (error)=>{
    if(error) {
        return console.log(error)
    }
    return console.log("database is connected")
})




router.post("/api/house-listing", async (request, response)=>{

    // const {errors, isValid} = validateHouseInput(request.body)

   

    const form = new Formidable.IncomingForm();

    form.parse(request, (error, fields, files)=>{
        const {
            price,
            city,
            county,
            numOfBeds,
            numOfBaths,
            numOfGarages,
            isSaleOrRent,
            us_state,
            squarefeet
        } = fields

        const { house_image } = files;

        console.log('Price: ', price)
        console.log('City: ', city)
        console.log('county: ', county)
        console.log('state: ', us_state)
        console.log('squarefeet', squarefeet)
        console.log('numOfGarages: ', numOfGarages)
        console.log('numOfBeds: ', numOfBeds)
        console.log('numOfBaths: ', numOfBaths)
        console.log('isSaleOrRent: ', isSaleOrRent)
        console.log('houseImage', house_image.path)
        

        cloudinary.uploader.upload( house_image.path, 
            {folder:"/houseAgency/houses"}, async(error, result)=>{
            if(error) {
                console.log(error)
            }
            const image_url = result.url;

            const newHouse = new House({
               
                    
                    county: county,
                    city: city,
                    us_state: us_state,
                    price: price,
                    squarefeet: squarefeet,
                    numOfBeds: numOfBeds,
                    numOfBaths: numOfBaths,
                    numOfGarages: numOfGarages,
                    isSaleOrRent: isSaleOrRent,
                    house_image: image_url,
                
            })
            
            
            const savedHouse = await newHouse.save();
            return response.status(200).json(savedHouse)
            


            
        })
    })
})

// router.put('/api/house-details/:id', (req, res) => {
//     const options = { new: true };
//     console.log(req.body)
//     House.findByIdAndUpdate(req.params.id, req.body, options).lean().exec().then((data)=>{
//         console.log(req.body)
//         if (data.value === null) {
//            return res.status(404).json({ errors: [{location: "house-details", msg: "Not found", param: req.params.id}]})
//         }
//         return res.status(200).json(data)
//     }).catch((error)=>{
//         return res.status(500).json({"error": error})
//     })
// });




router.put('/api/house-details/:id', (req, res)=>{
    House.findByIdAndUpdate(req.params.id, req.body).then(()=>{
        res.status(200).end()
    })
})


router.delete('/api/house-details/:id', (req, res)=>{
    House.findByIdAndDelete( req.params.id).then(()=>{
      res.status(200).end()
    })
  })








module.exports = router;
