import Layout from "../components/Layout/Layout";


const Aboutus=()=>{
  localStorage.setItem('active',1);
    return(
        <Layout>
          <div className="about-title"><h1 >About Us</h1></div>
             <img className="bottom-img"  style={{minWidth:'100vw',minHeight:'100vh'}} src="https://moneyview.in/images/blog/wp-content/uploads/2017/10/Blog-11-reasonsfeature-min.jpg" alt="about-2-img" />
    <div className="about-us-container">
    {/* <img style={{width:'300px',height:'300px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0Z_C2HjVGOg9QWsibcYxCHNEBf9OWRnCgI0XXu-SPGCAYr8_mNAIDYzcXUxiXJN8I1Q&usqp=CAU" alt="about-1-img" /> */}
    
        <div className="about-content">
        <div className="img-div">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DR1B9EcSyThAs0IjlUNOdZDzvIIMfTqmFtAcgg1wYmulrY41S0qSxcFLaROSVuoFXtk&usqp=CAU" alt="" />
          </div>
          <div className="para-div">
            <p>We are committed to helping you manage your finances effectively.
            Our mission is to provide you with a user-friendly platform to track your expenses, 
            set budgets, and achieve your financial goals.</p>
          </div>
          
        </div>
       <div className="about-content">
       <div className="img-div">
             <img  src="https://static.wixstatic.com/media/99fd11_6de9151ea9d545308d60e51ece599c6e~mv2.jpg/v1/fill/w_871,h_482,al_c,q_85,enc_auto/99fd11_6de9151ea9d545308d60e51ece599c6e~mv2.jpg
               " alt="" />
          </div> 
          <div className="para-div">
            <p>Create a Budget: Analyze your expenses and create a budget that allocates funds to
               different categories such as housing, transportation, food, and entertainment.
                Make sure your budget aligns with your income and financial goals.</p>
          </div>
          
          </div>
          <div className="about-content">
            <div className="img-div">
             <img  src="https://icma.org/sites/default/files/2022-03/AdobeStock_259292592.jpg" alt="" />
          </div> 
          <div className="para-div">
            <p>Track Your Expenses: Start by tracking all your expenses.
               This includes both fixed expenses like rent and utilities,
               as well as variable expenses like groceries and entertainment.</p>
          </div>
          
          </div>
            

           </div>
       
                
       </Layout>
    );
}

export default Aboutus;
