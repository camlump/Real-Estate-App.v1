const mongoose = require('mongoose');


const HouseSchema = mongoose.Schema({
    
        city:{type:String, required: true},
        county:{type:String, required: true},
        us_state: {type: String, required: true},
        squarefeet:{type: Number, required: true},
        price: { type: Number, required: true},
        isSaleOrRent: {type: String, required: true},
        numOfBeds: {type: Number, required: true},
        numOfBaths: {type: Number, required: true},
        numOfGarages: { type: Number, required: true},
        house_image: {type: String, required: true}
    
});


const House = mongoose.model("House", HouseSchema);
module.exports = {House}