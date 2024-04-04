import { useContext } from "react";
import Layout from "../components/Layout/Layout";
import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';
const Home=()=>{
    const {auth,setAuth}=useContext(AuthContext);
    localStorage.setItem('active',1);
    return(
  <Layout>
  <div className="home-container">
    <h1>Track your expenses and manage your finances with ease.</h1>
      <main>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Record and categorize your expenses</li>
            <li>View detailed expense reports and summaries</li>
            <li>Set budgets and financial goals</li>
            <li>Sync data across devices</li>
          </ul>
        </section>
      </main>
    </div> 
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a2d30e192904561.65e307b0a9bd2.png" style={{width:'100vw'}} alt="home-img" />
    {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/72e414192904561.65e307b0abc0f.png" alt="ghh" style={{width:'100vw'}}/>     */}
        </Layout>
    );
}

export default Home;