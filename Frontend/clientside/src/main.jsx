import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Contactus from './pages/Contactus.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Register from './pages/Auth/Register.jsx';
import Login from './pages/Auth/Login.jsx';
import FinancialTracking from './pages/Finance/FinancialTracking.jsx';
import PrivateRoutes from './PrivateRoutes/privateRoute.jsx';
import PrivateLoginRegister from './PrivateRoutes/private-login-reg.jsx';
import Forget from './pages/Auth/Forget.jsx';
import Dashboard from './pages/Finance/Dashboard.jsx';
import Transaction from './pages/Finance/Transaction.jsx';
import Incomes from './pages/Finance/income/Incomes.jsx';
import Expenses from './pages/Finance/Expense/Expenses.jsx';



const router=createBrowserRouter([
    {path:"/",element:<App/>, children:[
    {path:"/",element:<Home/>},
    {path:"/financial-tracking",element:<PrivateRoutes/>,children:[
    {path:"/financial-tracking",element:<FinancialTracking/>,children:[
    {path:"/financial-tracking/dashboard",element:<Dashboard/>},
    {path:"/financial-tracking/transaction",element:<Transaction/>},
    {path:"/financial-tracking/incomes",element:<Incomes/>},
    {path:"/financial-tracking/expenses",element:<Expenses/>},
    ]}
    ]},
    {path:"/aboutus",element:<Aboutus/>},
    {path:"/contactus",element:<Contactus/>},
    {path:"",element:<PrivateLoginRegister/>,children:[
    {path:"/register",element:<Register/>},
    {path:"/login",element:<Login/>},
    {path:"/forget",element:<Forget/>}
    ]},
    {path:"*",element:<PageNotFound/>}
   ]}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
