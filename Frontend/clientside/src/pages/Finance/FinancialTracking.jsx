import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Sidebar from "./Sidebar";

const FinancialTracking=()=>{
    return(
        <Layout>
            <div className="main-container">
                <div className="sidbar-box">
                   <Sidebar/>
                </div>
                <div className="body-container">
                   <Outlet/>
                </div>
            </div>
        </Layout>
    ); 
}

export default FinancialTracking;
