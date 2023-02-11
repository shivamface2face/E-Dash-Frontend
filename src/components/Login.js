import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate("");

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, []);




    const handleLogin = async() => {
        console.warn(email, password);

        let result = await fetch("http://localhost:5000/lgn", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-type':'application/json'
            }
        });

        result = await result.json();
        console.warn(result);

        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/")
        } else {
            alert("enter correct credentials");
        }
    };

  return (
      <div className='login'>
          

          <h1>Login Page</h1>
        
          <input type="email" className='inputBox' name="" id="" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" className='inputBox' name="" id="" placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)} />
          <button onClick={handleLogin} className="appButton" type="button">Login</button>


    </div>
  )
}

export default Login