import { useRef } from "react";
import Layout from "../../components/Layout/Layout";
import {toast} from 'react-toastify';
import axios from 'axios'
import './register.css'
import { useNavigate } from "react-router-dom";
const Register=()=>{
    const navigate=useNavigate();
    const name=useRef();
    const email=useRef();
    const phone=useRef();
    const password=useRef();
    const address=useRef();

    console.log(import.meta.env.VITE_REACT_APP_API);
    
    const handleOnSubmit=async (event)=>{
        event.preventDefault();
        try{
            const {data}=await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/register-user`,{name:name.current.value,
                email:email.current.value,
                phone:phone.current.value,
                password:password.current.value,
                address:address.current.value});
                if(data?.success){
                    toast.success("Register Successfully");
                    navigate("/login");
                }
                else{
                    toast.error(data?.message);
                }
        }
        catch (error){
            console.log(error);
            toast.error("Something went wrong");
        }
        
        console.log({name:name.current.value,
                    email:email.current.value,
                    phone:phone.current.value,
                    password:password.current.value,
                    address:address.current.value});
                    //toast.success("Register Successfully");
                   /// console.log(process.env);
    }

    return(
<Layout>
  <form className="form-box" onSubmit={handleOnSubmit}>
  <div className="d-flex flex-column form-container">
    <h1 className="form-heading">Hello, Register Now!</h1>
    <h4 className="form-subheading">We are happy to have you with us</h4>
    <div className="mb-3">
      <input type="text" ref={name} className="form-control input-field" id="exampleInputName1" placeholder="Enter your Name" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3">
      <input type="email" ref={email} className="form-control input-field" id="exampleInputEmail1" placeholder="Enter your Email" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3">
      <input type="text" ref={phone} className="form-control input-field" id="exampleInputPhone1" placeholder="Enter your Phone Number" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3">
      <input type="password" ref={password} className="form-control input-field" id="exampleInputPassword1" placeholder="Enter Password" required/>
    </div>
    <div className="mb-3">
      <input type="text" ref={address} className="form-control input-field" id="exampleInputAddress1" placeholder="Enter your Address" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3 form-check">
       <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
    </div>
    <button type="submit" className="btn submit-button">Submit</button>
  </div>
</form>
</Layout>
    );
}

export default Register;
