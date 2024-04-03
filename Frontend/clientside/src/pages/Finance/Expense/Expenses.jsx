
import { useContext, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import '../finance.css'
import FinanceItems from '../FinanceItem';
import { GlobalContext } from '../../../context/GlobalContext';

const Expenses=()=>{
  const {expenses,getExpenses,deleteExpense,totalExpense}=useContext(GlobalContext);
  useEffect(()=>{
     getExpenses();  
  },[]);
    return(
        <div className="finance-container">
            <h1>Expenses</h1>
            <h1 className='total-finance' style={{height:"300px"}}>Total Expenses:<span style={{color:'red'}}>${totalExpense()}</span></h1>
            <div className="finance-content">
                <div className="form-content">
                    <ExpenseForm/>
                </div>
               <div className="finance-status">
                  <FinanceItems finances={expenses} deleteFinance={deleteExpense}/>
               </div>
        </div>
    </div>
    );
}

export default Expenses;