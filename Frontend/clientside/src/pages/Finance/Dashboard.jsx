import { useContext, useEffect } from 'react';
import './finance.css'
import { GlobalContext } from '../../context/GlobalContext';
import  Chart from '../../components/Chart'
import { AuthContext } from '../../context/AuthContext';

const Dashboard=()=>{
    const {incomes,getIncomes,expenses,getExpenses,totalIncome,totalExpense,totalBalance,transactionHistory}=useContext(GlobalContext);
    const {auth}=useContext(AuthContext);
    const [...history]=transactionHistory();
    useEffect(()=>{
       getIncomes();
       getExpenses();
    },[]);
    return(
        <div className="finance-container">
           <h1>{auth?.user?.name&&auth?.user?.name.toUpperCase()}'S Dashboard</h1>
           <div className='transaction-container'>
              <div className='dashboard-container'>
                <div className='chart-container'>
                  <Chart/>
                </div>
              <div className='amount-detail'>
                  <div className='total-amount'>
                      <h2>Total Incomes</h2> 
                      <p className='amount-value'>${totalIncome()}</p>
                  </div>
                  <div className='total-amount'>
                      <h2>Total Expenses </h2>
                      <p className='amount-value'>${totalExpense()}</p>
                  </div>
                  <div className='total-amount'>
                      <h2>Total Balance </h2>
                      <span  className='amount-value' style={{color:(totalBalance()<0?'red':'green')}}>${totalBalance()}</span>
                  </div>
                </div>
             </div>
           <div className='transaction-detail'> 
            <div className="history-container">
              <h2>Recent History</h2>
              {history.map((data)=>(
                <div key={data._id} className="recent-data">
                     <p style={{color:data.type==='Expense'?'red':'green'}}>{data.title}</p>
                     <p style={{color:data.type==='Expense'?'red':'green'}}>
                        {data.type==='Expense'?`-$${data.amount}`:`+$${data.amount}`}
                    </p>
                </div>
              ))}
          </div>
          <div className="salary-container">
              <h2 className='salary-title'>Min <span>Salary</span> Max</h2>
              <div className='salary-value'>
                 <p>${incomes.length>0?Math.min(...incomes.map(income=>income.amount)):0}</p>
                 <p>${incomes.length>0?Math.max(...incomes.map(income=>income.amount)):0}</p>
              </div>
          </div>
          <div className="expense-container">
              <h2 className='expense-title'>Min <span>Expense</span> Max</h2>
              <div className='expense-value'>
                 <p>${expenses.length>0?Math.min(...expenses.map(expense=>expense.amount)):0}</p>
                 <p>${expenses.length>0?Math.max(...expenses.map(expense=>expense.amount)):0}</p>
              </div>
          </div>
          </div> 
         </div>
     </div>
    );
}

export default Dashboard;