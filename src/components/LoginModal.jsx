
import { useState } from "react";
import "./LoginModal.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";
// import LoginModal from "../components/LoginModal";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile
// } from "firebase/auth";

// import { auth } from "../firebase/firebase"; 


function LoginModal({ onClose }) {
  const [view, setView] = useState("login");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // LOGIN USER
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  
const handleRegister = async () => {
  if (!username || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Save username in Firebase
    await updateProfile(userCredential.user, {
      displayName: username
    });

    alert("Account Created Successfully");

    setUsername("");
    setEmail("");
    setPassword("");

    setView("login");
  } catch (error) {
    alert("Registration Failed: " + error.message);
  }
};


  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {view === "login" && (
          <>
            <h2>Login</h2>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="links" onClick={() => setView("register")}>
              Create New Account
            </p>

            <div className="btns">
              <button onClick={handleLogin}>Login</button>
              <button className="cancel" onClick={onClose}>Cancel</button>
            </div>
          </>
        )}

        {view === "register" && (
          <>
            <h2>Create Account</h2>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="links" onClick={() => setView("login")}>
              Back to Login
            </p>

            <div className="btns">
              <button onClick={handleRegister}>Register</button>
              <button className="cancel" onClick={onClose}>Cancel</button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default LoginModal;

