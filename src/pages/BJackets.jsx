import ProductCard from "../components/ProductCard";
import { bjacketsProducts } from "../data/bjacketsProducts";
import "./ProductsPage.css";

function BJackets() {
   const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  return (
    <div>
      <h2 className="section-title">T Shirts Collection</h2>

      <div className="grid">
        {bjacketsProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <button className="home1-top" onClick={backToTop}>BacK to Top</button>

           
<br /><br />
    </div>
  );
}

export default BJackets;