import { useRef } from "react";
import Layout from "../../components/Layout/Layout";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from 'react-toastify';
import axios from 'axios'
import './register.css'
import { useNavigate } from "react-router-dom";
const Register=()=>{
    const navigate=useNavigate();
    const name=useRef();
    const email=useRef();
    const phone=useRef();
    const password=useRef();
    const answer=useRef();
    const address=useRef();

    const handleOnSubmit=async (event)=>{
        event.preventDefault();
        try{
            const {data}=await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/register-user`,
               {name:name.current.value,
                email:email.current.value,
                phone:phone.current.value,
                password:password.current.value,
                answer:answer.current.value,
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
            if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
            } else {
              toast.error("Something went wrong");
             }
        }
    }

return(
 <Layout>
  <form className="form-box" autoComplete="off" onSubmit={handleOnSubmit}>
  <div className="d-flex flex-column form-container">
    <h1 className="form-heading">Hello, Register Now!</h1>
    <h4 className="form-subheading">We are happy to have you with us</h4>
    <div className="mb-3">
      <input type="text" ref={name} autoComplete="off" className="form-control input-field" id="exampleInputName1" placeholder="Enter your Name" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3">
      <input type="email" ref={email} autoComplete="off" className="form-control input-field" id="exampleInputEmail1" placeholder="Enter your Email" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3">
      <input type="text" ref={phone} autoComplete="off" className="form-control input-field" id="exampleInputPhone1" placeholder="Enter your Phone Number" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3">
      <input type="password" ref={password} autoComplete="off" className="form-control input-field" id="exampleInputPassword1" placeholder="Enter Password" required/>
    </div>
    <div className="mb-3">
      <input type="text" ref={answer} autoComplete="off" className="form-control input-field" id="exampleInputAnswer1" placeholder="Enter your favourite Sport" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3">
      <input type="text" ref={address} autoComplete="off" className="form-control input-field" id="exampleInputAddress1" placeholder="Enter your Address" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3 form-check">
       <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
    </div>
    <button type="submit" className="btn submit-button">Submit</button>
  </div>
 </form>
 {/* <ToastContainer/> */}
</Layout>
);
}

export default Register;
