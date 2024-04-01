import { Link } from "react-router-dom";
import './404.css'
const PageNotFound=()=>{
    return(
        <div class="container">
        <div class="box">
          <h1>404</h1>
          <p>Oops! Page not found</p>
            <Link className="back-link" to="/">Go back to homepage</Link>
        </div>
      </div>
    );
}

export default PageNotFound;