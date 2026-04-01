import allProducts from "../data/allProducts";
import "./SearchProducts.css";

function SearchProducts({ searchTerm }) {

  const filteredProducts = allProducts.filter((product) =>
    product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid">

      {filteredProducts.map((item) => (
        <div key={item.id} className="product-card">

          <div className="image-wrapper">

            <img src={item.image} alt={item.title} />

            {/* Hover buttons */}
            <div className="overlay">
              <button className="buy-btn">BUY NOW</button>
              <button className="cart-btn">ADD TO CART</button>
            </div>

          </div>

          <h3>{item.title}</h3>

          <p className="price">
            ₹{item.price}
            <span className="old-price">₹{item.oldPrice}</span>
          </p>

        </div>
      ))}

    </div>
  );
}

export default SearchProducts;