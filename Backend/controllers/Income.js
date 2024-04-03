
const Incomes=require('../models/incomeModel');

const addIncome=async (req,res)=>{
try{
const {title,amount,date,category,description}=req.body;
if(!title||!amount||!date||!category||!description){
   return  res.status(400).send({success:false,message:"All fields are required"});
}
if(amount<0||!amount==='Number'){
return res.status(400).send({success:false,message:"Amount must be non negative Integer"});
}
const income=new Incomes({title,amount,date,category,description});
const createIncome=await income.save();
res.status(201).send({success:true,message:"Income added Succesfully",createIncome});
}
catch(error){
res.status(500).send("Server Error: " + error);
}
};

const getIncomes=async (req,res)=>{
    try{
       const allIncomes=await Incomes.find().sort({"createdAt":-1});
       res.status(200).send({success:true,message:"Income rendered Successfully",allIncomes});
    }
    catch(error){
        res.status(500).send("Server Error:" + error);
    }
}

const deleteIncome=async (req,res)=>{
    try{
       const _id=req.params.id;
       const deletedIncome=await Incomes.findByIdAndDelete({_id});
       res.status(200).send(deletedIncome);
    }
    catch(error){
        res.status(500).send("Server Error:" + error);
    }
}

module.exports={addIncome,getIncomes,deleteIncome};