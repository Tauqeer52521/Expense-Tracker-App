import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Outlet } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import GlobalContextProvider from './context/GlobalContext';

function App() {
    return(
    
    <AuthContextProvider>
        <GlobalContextProvider>    
            <Outlet/>
        </GlobalContextProvider>
    </AuthContextProvider> 
    );
  
}

export default App
