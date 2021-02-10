// const validator = require("validator");

// const isEmpty = require("is-empty")

// module.exports = function validateHouseForm(data) {
//     let errors = {};

//     data.price = !isEmpty(data.price) ? data.name : "";
//     data.city = !isEmpty(data.city) ? data.city: "";
//     data.county = !isEmpty(data.county) ? data.county: "";
//     data.us_state = !isEmpty(data.us_state) ? data.us_state: "";
//     data.isSaleOrRent = !isEmpty(data.isSaleOrRent) ? data.isSaleOrRent: "";
//     data.numOfBeds = !isEmpty(data.numOfBeds) ? data.numOfBeds: "";
//     data.numOfBaths = !isEmpty(data.numOfBaths) ? data.numOfBaths: "";
//     data.numOfGarages = !isEmpty(data.numOfGarages) ? data.numOfGarages: "";
//     data.squarefeet = !isEmpty(data.squarefeet) ? data.squarefeet: "";

//     if(validator.isEmpty(data.price)) {
//         errors.price = "price field is required";
//     }

//     if(validator.isEmpty(data.city)) {
//         errors.city = "city field is required";
//     }

//     if(validator.isEmpty(data.county)) {
//         errors.county = "county field is required";
//     }

//     if(validator.isEmpty(data.us_state)) {
//         errors.us_state = "state field is required";
//     }

//     if(validator.isEmpty(data.isSaleOrRent)) {
//         errors.isSaleOrRent = "Sale or Rent field is required";
//     }

//     if(validator.isEmpty(data.numOfBeds)) {
//         errors.numOfBeds= "Bedroom field is required";
//     }

//     if(validator.isEmpty(data.numOfBaths)) {
//         errors.numOfBaths= "Bathroom field is required";
//     }

//     if(validator.isEmpty(data.numOfGarages)) {
//         errors.numOfGarages = "garage field is required";
//     }

//     if(validator.isEmpty(data.squarefeet)) {
//         errors.squarefeet = "sqft field is required";
//     }

//     return {
//         errors,
//         isValid: isEmpty(errors) 
//     }

// }