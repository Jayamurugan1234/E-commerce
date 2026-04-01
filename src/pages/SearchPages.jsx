import { useLocation } from "react-router-dom";
import allProducts from "../data/allProducts";
import "./SearchPages.css";
function SearchPages() {

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const filteredProducts = allProducts.filter((product) =>
    product?.title?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>

      <h2 className="search-title">
        Search Results for "{query}"
      </h2>

      <div className="grid">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
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
          ))
        ) : (
          <h2 className="no-products">No Products Found</h2>
        )}

      </div>

    </div>
  );
}

export default SearchPages;