const Expenses=require('../models/expenseModel');

const addExpense=async (req,res)=>{
    try{
    const {title,amount,date,category,description}=req.body;
    if(!title||!amount||!date||!category||!description){
       return res.status(400).send({success:false,message:"All fields are required"});
    }
    if(amount<0||!amount==='Number'){
        return res.status(400).send({success:false,message:"Amount must be non negative integers"});
    }
    const expense=new Expenses({title,amount,date,category,description});
    const createExpense=await expense.save();
    res.status(201).send({success:true,message:"Expense added Successfully",createExpense});
    }
    catch (error){
        res.status(500).send("Server Error" + error);
    }
};

const getExpenses=async (req,res)=>{
    try{
       const allExpenses=await Expenses.find().sort({"createdAt":-1});
       res.status(200).send({success:true,message:"Expense rendered Successfully",allExpenses}); 
    }
    catch (error){
        res.status(500).send("Server Error" + error);
    }
};

const deleteExpense=async (req,res)=>{
    try{
       const _id=req.params.id;
       const deletedExpense=await Expenses.findByIdAndDelete({_id});
       res.status(200).send(deletedExpense);
    }
    catch (error){
        res.status(500).send("Server Error" + error);
    }
};

module.exports={addExpense,getExpenses,deleteExpense};
