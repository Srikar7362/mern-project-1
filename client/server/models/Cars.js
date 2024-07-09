const mongoose =require('mongoose')
const CarsSchema =new mongoose.Schema({
    fullname:String,
    lastname:String,
    email:String,
    mobileno:String,
    fromaddress:String,
    toaddress:String,
    status: { type: String, default: 'Pending' }

    
})
const CarsModel=mongoose.model("Cars",CarsSchema)
module.exports=CarsModel