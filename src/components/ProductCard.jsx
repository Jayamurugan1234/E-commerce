import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import ReactDOM from "react-dom";

import "./ProductCard.css";

function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // OPEN MODALS
  const handleBuyNow = () => {
    console.log("Buy clicked");
    setShowModal(true);
  };

  const handleCart = () => {
    console.log("Cart clicked");
    setShowCartModal(true);
  };

  // BUY NOW FUNCTION
  const handleConfirm = async () => {
    console.log("Confirm button clicked");

    if (!size || !phone || !address) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        productId: product.id,
        productName: product.title,
        price: product.price,
        quantity,
        size,
        phone,
        address,
        createdAt: Timestamp.now(),
      });

      console.log("Order saved ✅");
      alert("Order placed successfully!");

      setShowModal(false);
      setQuantity(1);
      setSize("");
      setPhone("");
      setAddress("");

    } catch (error) {
      console.error("Order Error ❌", error);
      alert("Error placing order");
    }
  };

  // ADD TO CART FUNCTION
  const handleAddCart = async () => {
    console.log("Add to cart button clicked");

    try {
      await addDoc(collection(db, "cart"), {
        productId: product.id,
        productName: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
        createdAt: Timestamp.now(),
      });

      console.log("Cart saved ✅");
      alert("Product added to cart!");

      setShowCartModal(false);

    } catch (error) {
      console.error("Cart Error ❌", error);
      alert("Error adding to cart");
    }
  };

  return (
    <div className="product-card">

      <div className="image-wrapper">
        <img src={product.image} alt={product.title} />

        <div className="overlay">
          <button className="buy-btn" onClick={handleBuyNow}>
            Buy Now
          </button>

          <button className="cart-btn" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <h4>{product.title}</h4>

      <p className="price">
        ₹{product.price}
        <span className="old-price"> ₹{product.oldPrice}</span>
      </p>

      {/* BUY NOW MODAL */}
      {showModal &&
        ReactDOM.createPortal(
          <div className="modal-backdrop" onClick={() => setShowModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>

              <h3>Buy {product.title}</h3>
              <p>Price: ₹{product.price}</p>

              <div className="form-group">
                <label>Quantity:</label>
                <input type="number" value={quantity} min="1"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>

              <div className="form-group">
                <label>Size:</label>
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                  <option value="">Select size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>

              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Address:</label>
                <textarea
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="modal-buttons">
                <button className="buy-btn" onClick={handleConfirm}>
                  Confirm Purchase
                </button>

                <button className="cart-btn" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>

            </div>
          </div>,
          document.body
        )}

      {/* ADD TO CART MODAL */}
      {showCartModal &&
        ReactDOM.createPortal(
          <div className="modal-backdrop" onClick={() => setShowCartModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>

              <h3>{product.title}</h3>

              <img src={product.image} width="120" alt="" />

              <p>Price: ₹{product.price}</p>

              <div className="modal-buttons">
                <button className="buy-btn" onClick={handleAddCart}>
                  Add to Cart
                </button>

                <button className="cart-btn" onClick={() => setShowCartModal(false)}>
                  Cancel
                </button>
              </div>

            </div>
          </div>,
          document.body
        )}

    </div>
  );
}

export default ProductCard;