import { menProducts } from "../data/menProducts";
import ProductCard from "../components/ProductCard";
import "./ProductsPage.css";

function Men() {
   const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  return (
    <div>
      <h2 className="section-title">Men Collection</h2>

      <div className="grid">
        {menProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <button className="home1-top" onClick={backToTop}>BacK to Top</button>

           
<br /><br />
    </div>
  );
}

export default Men;