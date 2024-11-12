import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Outlet } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import GlobalContextProvider from './context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
    return(
    
    <AuthContextProvider>
        <GlobalContextProvider>    
            <Outlet/>
            <ToastContainer/>
        </GlobalContextProvider>
    </AuthContextProvider> 
    );
  
}

export default App
