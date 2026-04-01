import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Signup(){

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) =>{
    e.preventDefault();

    try{

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user,{
        displayName:username
      });

      alert("Account Created Successfully");

      navigate("/login");

    }catch(error){
      alert(error.message);
    }
  };

  return(
    <div className="auth-container">

      <div className="auth-box">

        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e)=>setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">Signup</button>

        </form>

        <p className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>

    </div>
  )
}

export default Signup;