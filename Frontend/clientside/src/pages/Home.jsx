import { useContext } from "react";
import Layout from "../components/Layout/Layout";
import { AuthContext } from "../context/AuthContext";

const Home=()=>{
    const {auth,setAuth}=useContext(AuthContext);
    return(
        <Layout>
            <h1>Home Page</h1>
            <p>{JSON.stringify(auth)}</p>
        </Layout>
    );
}

export default Home;