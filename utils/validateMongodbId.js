const mongoose = require("mongoose")
const validateMongooseId = (id) =>{
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid){
        throw new Error("Id nott found")
    }
}

module.exports = validateMongooseId