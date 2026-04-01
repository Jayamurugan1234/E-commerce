import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar({ setSearchTerm }) {

  const [dropdown, setDropdown] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  // Hanburger NEW
  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      await signOut(auth);
      alert("Logged out successfully");
    }
  };

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? "" : menu);
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "cart", id));
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Delete error:", error.message);
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cart"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setCartItems(items);
      } catch (error) {
        console.log("Firestore Error:", error.message);
      }
    };

    if (user) fetchCart();
  }, [user]);


  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false); // reset menu on desktop
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <>
      <div className="navbar">

        <h2 className="logo">DRESSORA</h2>

        {/*  HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* UPDATED CLASS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <Link to="/" onClick={backToTop}>Home</Link>

          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("women")}
            onMouseLeave={() => toggleDropdown("")}
          >
            <span>Women ▾</span>
            {dropdown === "women" && (
              <div className="dropdown-menu">
                <Link to="/women/tops">Tops</Link>
                <Link to="/women/cords">Co-ords</Link>
                <Link to="/women/dresses">Dresses</Link>
                <Link to="/women/fshirts">Shirts</Link>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("men")}
            onMouseLeave={() => toggleDropdown("")}
          >
            <span>Men ▾</span>
            {dropdown === "men" && (
              <div className="dropdown-menu1">
                <Link to="/men/bshirts">Shirts</Link>
                <Link to="/men/bpants">Pants</Link>
                <Link to="/men/btshirts">Tshirts</Link>
                <Link to="/men/bjacket">Jacket</Link>
                <Link to="/men/bshorts">Shorts</Link>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("kids")}
            onMouseLeave={() => toggleDropdown("")}
          >
            <span>Kids ▾</span>
            {dropdown === "kids" && (
              <div className="dropdown-menu2">
                <Link to="/kids/boys">Boys</Link>
                <Link to="/kids/girls">Girls</Link>
              </div>
            )}
          </div>

          <Link to="/about">About</Link>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="search-box"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const value = e.target.value.trim();
              if (value !== "") {
                navigate(`/search?q=${value}`);
              }
            }
          }}
        />



         {/* Cart */}
        <div className="cart-icon" onClick={() => setShowCart(true)}>
          🛒
          <span className="cart-count">{cartItems.length}</span>
        </div>
        

        {/* Auth */}
        <div className="auth-buttons">
          {!user ? (
            <>
              <Link to="/login">
                <button className="login-btn">Login</button>
              </Link>
              <Link to="/signup">
                <button className="signup-btn">Signup</button>
              </Link>
            </>
          ) : (
            <div className="account-dropdown">
              <button
                className="account-btn"
                onClick={() => setShowAccount(!showAccount)}
              >
                Account ▾
              </button>

              {showAccount && (
                <div className="account-menu">
                  <p><strong>Name:</strong> {user.displayName || "User"}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

       

      </div>

      {/* Cart Popup */}
      {showCart && (
        <div className="cart-popup">
          <h3>Your Cart</h3>

          {cartItems.length === 0 && <p>No items in cart</p>}

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt="" width="50" />
              <div>
                <p>{item.productName}</p>
                <p>₹{item.price}</p>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}

          <button onClick={() => setShowCart(false)}>Close</button>
        </div>
      )}
    </>
  );
}

export default Navbar;