import { useContext, useEffect, useRef, useState } from 'react';
import './finance.css'
import { AuthContext } from '../../context/AuthContext';
import { GlobalContext } from '../../context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
const Profile=()=>{
    const {auth,setAuth}=useContext(AuthContext);
    const {totalIncome,totalExpense,totalBalance,setUser_Id,getIncomes,getExpenses}=useContext(GlobalContext);
    const [isEditMode,setIsEditMode]=useState(false);
    const [profile,setProfile]=useState({name:'',email:'',phone:false,address:''}); 

    useEffect(()=>{
        const {name,email,phone,address}=auth?.user;
        setProfile( {name,email,phone,address});
    },[]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { name, email, phone, address } = auth?.user;
                setProfile({ name, email, phone, address });
                // Fetch income and expense data again
                await getIncomes();
                await getExpenses();
            } catch (error) {
                console.error('Error fetching profile data:', error);
                setLoading(false);
            }
        };
        fetchData();
        },[])


   
    const {name,email,phone,address}=profile;


    const handleInput=name=>e=>{
        setProfile({...profile,[name]:e.target.value});
    }

    const handleOnSubmit=async (event)=>{
        event.preventDefault();
        try{
            const {data}=await axios.patch(`${import.meta.env.VITE_REACT_APP_API}/api/v1/update-user`,profile);
                if(data?.success){
                    console.log(data?.updatedUser);
                    setAuth({...auth,user:data?.updatedUser});
                    setUser_Id(data?.updatedUser._id);
                    setIsEditMode(false);
                    const ls=JSON.parse(localStorage.getItem('auth'));
                    ls.user=data?.updatedUser;
                    localStorage.setItem('auth',JSON.stringify(ls));
                    toast.success("Profile Updated Successfully");
                }
                else{
                    toast.error(data?.message);
                }
        }
        catch (error){
            console.log(error);
            toast.error("Something went wrong");
        }
    }
    return(
        <div className="finance-container">
             <h1>{auth?.user?.name&&auth?.user?.name.toUpperCase()}'S Profile</h1>
          <div className="profile-container">
               <div className="profile-img-container">
                   <img className='profile-photo' src="https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg" alt="profile-avtar" />
                </div> 
                <form className="profile-detail-container" onSubmit={handleOnSubmit}>
                    <div className='profile-detail-item'>
                          <div className='detail-type'>Full Name</div>
                          <input className="profile-value" type="text" name='name' value={name?.toUpperCase()} onChange={handleInput('name')}  readOnly={!isEditMode}/>
                    </div>
                    <div className='profile-detail-item'>
                          <div className='detail-type'>Email</div>
                          <input className="profile-value" type="email" value={email?.toLowerCase()}  readOnly/>
                    </div>
                    <div className='profile-detail-item'>
                          <div className='detail-type'>Phone no.</div>
                          <input className="profile-value" type="number" name='phone' value={phone} onChange={handleInput('phone')}  readOnly={!isEditMode}/>
                    </div>
                    <div className='profile-detail-item'>
                          <div className='detail-type'>Address</div>
                          <input className="profile-value" style={{whiteSpace:'pre-wrap'}} type="text" name='address' value={address?.toUpperCase()} onChange={handleInput('address')}  readOnly={!isEditMode}/>
                    </div>
                    {!isEditMode && <button className="edit-profile-btn" onClick={() => setIsEditMode(true)}>Edit Detail</button>}
                    {isEditMode && <button type="submit" className="edit-profile-btn">Save Changes</button>}
                </form>
                <div className='amount-detail'>
                  <div className='total-amount'>
                      <h2>Total Incomes</h2> 
                      <p className='amount-value'>${totalIncome()}</p>
                  </div>
                  <div className='total-amount'>
                      <h2>Total Expenses </h2>
                      <p className='amount-value'>${totalExpense()}</p>
                  </div>
                  <div className='total-amount'>
                      <h2>Total Balance </h2>
                      <span  className='amount-value' style={{color:(totalBalance()<0?'red':'green')}}>${totalBalance()}</span>
                  </div>
                </div>
          </div>
          <ToastContainer/>
        </div>
       
    );
}

export default Profile;