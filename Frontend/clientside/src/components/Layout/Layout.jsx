import Footer from "./Footer";
import Header from "./Header";
import Orbs from "./Orbs";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Layout=({children})=>{
    return(
  <div className="d-flex flex-column" style={{minHeight:"100vh"}}>
      <Header/>
        {/* <Orbs/> */}
        {/* <ToastContainer/> */}
        <div className="flex-grow-1">
           {children}
        </div>
    <Footer className="mt-auto " />
  </div>
    );
}

export default Layout;