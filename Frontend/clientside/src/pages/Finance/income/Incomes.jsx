
import { useContext, useEffect } from 'react';
import IncomeForm from './IncomeForm';
import '../finance.css'
import IncomeItems from './IncomeItem';
import { GlobalContext } from '../../../context/GlobalContext';

const Incomes=()=>{
  const {totalIncome}=useContext(GlobalContext)
    return(
        <div className="finance-container">
            <h1>Incomes</h1>
            <h1 className='total-income' style={{height:"300px"}}>Total Incomes:<span style={{color:'green'}}>${totalIncome()}</span></h1>
            <div className="income-content">
                <div className="form-content">
                    <IncomeForm/>
                </div>
               <div className="incomes-status">
                  <IncomeItems/>
               </div>
        </div>
    </div>
    );
}

export default Incomes;