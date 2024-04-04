
import { useContext, useEffect } from 'react';
import IncomeForm from './IncomeForm';
import '../finance.css'
import FinanceItems from '../FinanceItem';
import { GlobalContext } from '../../../context/GlobalContext';

const Incomes=()=>{
  const {incomes,getIncomes,deleteIncome,totalIncome}=useContext(GlobalContext);
  useEffect(()=>{
     getIncomes();  
  },[]);
    return(
        <div className="finance-container">
            <h1>Incomes</h1>
            <h1 className='total-finance' style={{minHeight:"80px"}}>Total Incomes:<span style={{color:'green'}}>${totalIncome()}</span></h1>
            <div className="finance-content">
                <div className="form-content">
                    <IncomeForm/>
                </div>
               <div className="finance-status">
                  <FinanceItems finances={incomes} deleteFinance={deleteIncome}/>
               </div>
            </div>
    </div>
    );
}

export default Incomes;