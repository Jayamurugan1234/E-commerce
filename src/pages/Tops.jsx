import { topsProducts } from "../data/topsProducts";
import ProductCard from "../components/ProductCard";
import React from "react";
import "./ProductsPage.css";

function Tops() {

   const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

  return (
    <div>
      <h2 className="section-title">Tops Collection</h2>

      <div className="grid">
        {topsProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

            <button className="home1-top" onClick={backToTop}>BacK to Top</button>

           
<br /><br />
    </div>
  );
}

export default Tops;