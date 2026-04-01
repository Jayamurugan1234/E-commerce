import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./CartModal.css";

function CartModal({ product, close }) {

  const addToCart = async () => {
    try {
      await addDoc(collection(db, "cart"), {
        title: product.title,
        price: product.price,
        image: product.image
      });

      alert("Product added to cart");
      close();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <img src={product.image} alt={product.title} width="150"/>

        <h3>{product.title}</h3>

        <p>₹{product.price}</p>

        <button onClick={addToCart}>Add To Cart</button>

        <button onClick={close}>Close</button>

      </div>

    </div>
  );
}

export default CartModal;