import {Chart as ChartJs,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,ArcElement} from 'chart.js'
import { useContext } from 'react';
import {Line} from 'react-chartjs-2'
import { GlobalContext } from '../context/GlobalContext';

ChartJs.register({
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
});

const Chart=()=>{
    const {incomes,expenses}=useContext(GlobalContext);
    const data={
        labels:incomes.map((income)=>{
            return (new Date(income.date).toLocaleDateString('en-GB'));
        }),
        datasets:[
            {
            label:'Income',
            data:[...incomes.map((income)=>{
                return income.amount;
            })],
            backgroundColor:'green',
            borderColor:'#373635',
            pointBackgroundColor:'#58DB15',
            borderWidth:2,
            tension:0.2
            },
            {
            label:'Expense',
            data:[...expenses.map((expense)=>{
                return expense.amount;
            })],
            backgroundColor:'red',
            borderColor:'#373635',
            pointBackgroundColor:'#F60909',
            borderWidth:2,
            tension:0.2
            }
            ],
        
    }
    return(
        <Line data={data}/>
    );
}

export default Chart;