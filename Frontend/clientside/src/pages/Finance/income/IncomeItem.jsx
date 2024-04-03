import { useContext,useEffect } from "react"
import { GlobalContext } from "../../../context/GlobalContext"
import { bitcoin, calender, card, circle, comment, dollar, freelance, money, piggy, stocks, trash, trend, users, yt } from "../../../utils/Icons";
import './income.css'

const IncomeItems=()=>{
    const {incomes,getIncomes,deleteIncome}=useContext(GlobalContext);
    useEffect(()=>{
       getIncomes();  
    },[]);
    const categoryIcon=(category)=>{
        switch(category){
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investments':
                return trend;
            case 'stocks':
                return stocks;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return '';                                 
        }
    }
    return(
        <div className="income-item-content">
             {incomes.map((income)=>(
            <div key={income._id} className="income-inner-content">
                    <div className="category-icon">
                        {categoryIcon(income.category)}
                    </div>
                <div className="income-detail">
                    <p><span className="dot-before"></span> {income.title}</p>
                    <div className="income-time">
                        <p style={{color:'#151412',fontWeight:'bold'}}>{dollar} {income.amount}</p>
                        <p style={{color:'#151412'}}>{calender} {new Date(income.date).toLocaleDateString('en-GB')}</p>
                        <p style={{color:'#151412'}}>{comment} {income.description}</p>
                        <button className="delete-btn" onClick={()=>{deleteIncome(income._id)}}>{trash}</button>
                    </div>
                </div> 
            </div>
             ))}
        </div>

    );
}

export default IncomeItems;