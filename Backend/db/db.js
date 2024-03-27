const mongoose=require('mongoose');

const db=async()=>{
    try{
    const dbConnection=await mongoose.connect(process.env.MONGO_URL);
    console.log("Database succesfully connected:");
    }
    catch (e){
        console.log("Database not connect:->",e);
    }
}

module.exports={db};