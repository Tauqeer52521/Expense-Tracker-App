import { Link } from "react-router-dom";


const Footer=()=>{
    return(
    <div className="footer">
          <h4 className="mb-0">All right are reserved ©</h4>
        <div className="footer-link-container">
            <Link to='/aboutus' className="footer-link">About</Link>
            <Link to='/contactus' className="footer-link">Contact</Link>
         </div>
    </div>
    );
}

export default Footer;