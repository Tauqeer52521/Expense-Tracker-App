import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const GlobalContext=createContext();

const GlobalContextProvider=({children})=>{
    const [incomes,setIncomes]=useState([]);
    const [expenses,setExpenses]=useState([]);
    const [error,setError]=useState([]);

    const getIncomes=async ()=>{
        try{
            const {data}=await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/v1/get-incomes`);
            if(data?.success){
                setIncomes(data.allIncomes);
            }  
        }
        catch(error){
            console.log(error);
            toast.error("Something went wrong");
        }
    }
    
    const addIncome=async (income)=>{
        try{
        const {data}=await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1//add-income`,income);
        if(!data?.success){
           toast.error(data.message);
        }
        }
        catch(error){
            console.log(error);
            setError(error)
        }
        getIncomes();
    }

    const deleteIncome=async (id)=>{
        try{
            const {data}=await axios.delete(`${import.meta.env.VITE_REACT_APP_API}/api/v1/delete-income/${id}`);
        }
        catch (error){
            console.log(error);
            toast.error("something went wrong");
        }
        getIncomes();
    }
    
    const totalIncome=()=>{
        let sum=0;
        incomes.forEach((income)=>{
            sum+=income.amount;
        });
        return sum;
    }
    return(
        <GlobalContext.Provider value={{addIncome,incomes,getIncomes,deleteIncome,totalIncome}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;