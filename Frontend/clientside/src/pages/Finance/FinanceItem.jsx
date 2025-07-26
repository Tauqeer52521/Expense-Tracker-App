import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway,tv, trash, trend, users, yt } from "../../utils/Icons";
import './financeItem.css'

const FinanceItems=({finances,deleteFinance})=>{
    const incomeCategoryIcon=(category)=>{
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

    const expenseCategoryIcon=(category)=>{
        switch(category){
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return users;
            case 'other':
                return circle;
            default:
                return '';                                 
        }
    }
    return(
        <div className="finance-item-content">
             {finances.map((finance)=>(
            <div key={finance._id} className="finance-inner-content">
                    <div className="category-icon">
                        {finance.type==='Expense'?expenseCategoryIcon(finance.category):incomeCategoryIcon(finance.category)}
                    </div>
                <div className="finance-detail">
                    <p><span className="dot-before"></span> {finance.title}</p>
                    <div className="finance-time">
                        <p style={{color:'#151412',fontWeight:'bold'}}>{dollar} {finance.amount}</p>
                        <p style={{color:'#151412'}}>{calender} {new Date(finance.date).toLocaleDateString('en-GB')}</p>
                        <p style={{color:'#151412'}}>{comment} {finance.description}</p>
                        <button className="delete-btn" onClick={()=>{deleteFinance(finance._id)}}>{trash}</button>
                    </div>
                </div> 
            </div>
             ))}
             {/* <ToastContainer/> */}
        </div>

    );
}

export default FinanceItems;