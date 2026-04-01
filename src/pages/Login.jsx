import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      await signInWithEmailAndPassword(auth,email,password);
      alert("Login Successful");
      navigate("/");
    }
    catch(error){
      alert(error.message);
    }
  };

  return(
    <div className="auth-container">

      <div className="auth-box">

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

        </form>

        <p className="auth-link">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>

      </div>

    </div>
  )
}

export default Login;