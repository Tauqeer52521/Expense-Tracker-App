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



const router=createBrowserRouter([
    {path:"/",element:<App/>, children:[
    {path:"/",element:<Home/>},
    {path:"/financial-tracking",element:<PrivateRoutes/>,children:[
    {path:"",element:<FinancialTracking/>}
    ]},
    {path:"/aboutus",element:<Aboutus/>},
    {path:"/contactus",element:<Contactus/>},
    {path:"",element:<PrivateLoginRegister/>,children:[
    {path:"/register",element:<Register/>},
    {path:"/login",element:<Login/>}
    ]},
    {path:"*",element:<PageNotFound/>}
   ]}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)