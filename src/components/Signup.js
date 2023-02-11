import React, { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, []);



  const saveData = async () => {
    console.warn(name, email, password);

    let result = await fetch("http://localhost:5000/register", {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
          'Content-Type': 'application/json'
      }
    });
      
     result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));

    // localStorage.setItem = ("user", JSON.stringify(result));
    navigate('/');
  

  
  };


 
  



  




  return (
    <div className="signup">
      <h1>Ragister</h1>

      <input
        className="inputBox"
        type="text"
        placeholder="enter your name"
        
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        className="inputBox"
        type="email"
        placeholder="enter your email"
       
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="enter password"
      
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={saveData} type="button">
        Sign-Up
      </button>
    </div>
  );
};

export default Signup;
