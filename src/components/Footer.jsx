import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

import { FaGithub, FaInstagram, FaFacebook, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {

  const navigate = useNavigate();

    // const scrollTop =()=>{
    //   // navigate("/home");
    //   window.scrollTo({
    //     top:0,
    //     behavior:"smooth"
    //   });
    // };


      const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${search}`);
    }
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), form);

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }

  

  };

  return (
    <div className="footer">
      <h2 className="logo1">DRESSORA</h2>

      <div className="footer-links">

        <div className="links">
          <Link to="" onClick={backToTop} > 🏠 Home</Link>
          <Link to="/women/tops"> 👩Women</Link>
          <Link to="/men/bshirts"> 👨 Men</Link>
          <Link to="/kids/boys"> 👶 Kids</Link>
          <Link to="/about"> ℹ️ About</Link>
        </div>



      </div>

      <div>
        <h3 className="search-products">Search Your Products</h3>
        <input
          className="footer-search"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />
        <div className="contact-icons">
          <a className="contact-item" href="tel:+919876543210">
            <FaPhone /> +91 9876543210
          </a>

          <a className="contact-item" id="contact-item1" href="mailto:dressora@gmail.com">
            <FaEnvelope />  dressora@gmail.com
          </a>
        </div>



      </div>




      {/* <div className="getin">
        <h3 className="dressora-title">Dressora Makes You,</h3>
        <p className="dressora-content">👗 Stylish <br />
          ✨ Elegant <br />
          🔥 Trendy <br />
          💃 Confident <br />
          🌟 Unique
        </p>

      </div> */}

      <marquee behavior="relative" className="contact-us">Any Quries, Contact free to feel Us</marquee >

      <div className="contact">
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
 </form>
 <form className="contact-form1" onSubmit={handleSubmit}>

          <input className="address1"
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <textarea className="message1"
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          

          <button type="submit" >Submit</button>
          
 </form>

       
        <div>
          <h3 className="get-in-touch">Get in Touch :</h3>

          <div className="social-icons">

            <a href="https://github.com/Jayamurugan1234" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/jayamurugan-v-7a3571269/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>





          </div>
          
        </div>
        <marquee behavior="relative" className="website">www.dressora12345.com</marquee>
        <p className="copy">© 2026 Dressora. All Rights Reserved.</p>

      </div>
    </div>

  );
}

export default Footer;