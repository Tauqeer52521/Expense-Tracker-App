import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MenuItems } from "../../utils/MenuItems";
import {Link} from 'react-router-dom'
import './sidebar.css'
const Sidebar=()=>{
    const {auth,active,setActive}=useContext(AuthContext);
return(
    <div className="sidebar-container">
        <div className="user-profile">
            <img src="https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg" alt="user-avtar" />
            <div className="user-name">
                <h5>{auth?.user?.name.toUpperCase()}</h5>
                <p>Your Profile!</p> 
            </div> 
        </div>
        <div className="menu-items d-flex flex-column">
                {MenuItems.map((item)=>(
                <Link className={`sidebar-link ${active===item.id?'active-link':''}`}
                 key={item.id} to={item.link} onClick={()=>setActive(item.id)}>
                        {item.icon}
                      <span>{item.title}</span>
                </Link>
                ))}
        </div>
    </div>
);
}

export default Sidebar;