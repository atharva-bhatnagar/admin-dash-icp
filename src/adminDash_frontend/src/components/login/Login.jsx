import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './login.css'




const Login=({data,setLogin})=>{

    const nav=useNavigate()
    const [user,setUser]=useState({
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        const { name,value}=e.target
        setUser(
            {
                ...user,
                [name]:value
            }
        )

    }
    
    const login=(e)=>{
        e.preventDefault()
        if(user.email===data.email&&user.password===data.password){
            
            setUser({})
            setLogin(true)
        }else{
            alert('wrong email or password')
        }
    }

    return(
        <div>
            <div className="form-container">
            <form className="form" onSubmit={login}>
                <h1>Login</h1>
                <div className="form-seg">
                    <label>Email : </label>
                    <input type='text' name="email" value={user.email} onChange={handleChange}/>
                </div>
                <div className="form-seg">
                    <label>Password : </label>
                    <input type='password' name="password" value={user.password} onChange={handleChange}/>
                </div>
                {/*<p>Don't Have an account? Go to the <em className="link" onClick={()=>{nav('/register')}}>Register</em> page.</p>*/}
                <button type='submit' className="submit-btn">Login</button>
                
            </form>
        </div>
        </div>
    )
}
export default Login