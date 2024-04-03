import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Sidebar from "./Sidebar";

const FinancialTracking=()=>{
    return(
        <Layout>
            <div className="row">
                <div className="col-md-3">
                   <Sidebar/>
                </div>
                <div className="col-md-9">
                   <Outlet/>
                </div>
            </div>
        </Layout>
    ); 
}

export default FinancialTracking;