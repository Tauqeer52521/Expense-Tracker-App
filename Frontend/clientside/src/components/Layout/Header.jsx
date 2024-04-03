import { Link, useLocation, useNavigate} from "react-router-dom";
import { RiMoneyEuroBoxFill } from "react-icons/ri";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";


const Header=()=>{
    const {auth,setAuth,setPrevLocation}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();

    const handleLogout=()=>{
       setAuth({...auth,user:null,token:""});
       if(location.pathname!=='/register'&&location.pathname!=='/login')
       setPrevLocation(location.pathname);
       localStorage.removeItem("auth");
       toast.success("LogOut Successfully"); 
       console.log(location.pathname);
       navigate('/login'); 
    }
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-header">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand header-brand-link" to="/"><span className="head-title-icon"><RiMoneyEuroBoxFill /></span>Expense Tracker App</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link header-link"  to="/">Home</Link>
              </li>
             
              {!auth.user?
              <>
              <li className="nav-item">
                <Link className="nav-link header-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-link" to="/login">Login</Link>
              </li>
              </>:
              <>
              <li className="nav-item">
                <Link className="nav-link header-link"  onClick={handleLogout}>LogOut</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-link" to="/financial-tracking">Financial-Tracking</Link>
              </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header;