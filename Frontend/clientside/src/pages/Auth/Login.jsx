import { useContext, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import './register.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { GlobalContext } from "../../context/GlobalContext";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { auth, setAuth, prevLocation } = useContext(AuthContext);
    const { setUser_Id } = useContext(GlobalContext);

    const email = useRef();
    const password = useRef();

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/login-user`, {
                email: email.current.value,
                password: password.current.value,
            });

            if (data?.success) {
                toast.success("Login Successfully", { position: "top-right", autoClose: 3000 });
                setAuth({ ...auth, user: data.user, token: data.token });
                setUser_Id(data.user._id);
                localStorage.setItem('auth', JSON.stringify(data));
                
                const redirectPath = location.state || prevLocation || '/';
                navigate(redirectPath);
            } else {
                toast.error(data?.message || "Login failed", { position: "top-right", autoClose: 3000 });
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
            }else{
            toast.error("Something went wrong", { position: "top-right", autoClose: 3000 });
            }
        }
    };

    return (
        <Layout>
            <form className="form-box" autoComplete="off"  onSubmit={handleOnSubmit}>
                <div className="d-flex flex-column form-container">
                    <h1 className="form-heading">Hello, Again!</h1>
                    <h4 className="form-subheading">We are happy to have you back.</h4>
                    <div className="mb-3">
                        <input type="email" autoComplete="off"  ref={email} className="form-control input-field" id="exampleInputEmail1" placeholder="Enter your Email" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <input type="password" autoComplete="off"  ref={password} className="form-control input-field" id="exampleInputPassword1" placeholder="Enter Password" required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <Link className="btn mb-3 submit-button" to='/forget'>Forget Password?</Link>
                    <button type="submit" className="btn submit-button">Login</button>
                </div>
            </form>
            {/* <ToastContainer /> */}
        </Layout>
    );
}

export default Login;
