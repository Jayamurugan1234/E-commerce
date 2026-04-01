import ProductCard from "../components/ProductCard";
import { btshirtsProducts } from "../data/btshirtsProducts";
import "./ProductsPage.css";

function BTShirts() {
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
        {btshirtsProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <button className="home1-top" onClick={backToTop}>BacK to Top</button>

           
<br /><br />
    </div>
  );
}

export default BTShirts;