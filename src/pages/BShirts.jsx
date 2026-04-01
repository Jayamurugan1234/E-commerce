import ProductCard from "../components/ProductCard";
import { bshirtsProducts } from "../data/bshirtsProducts";
import "./ProductsPage.css";

function BShirts() {
   const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  return (
    <div>
      <h2 className="section-title">Shirts Collection</h2>

      <div className="grid">
        {bshirtsProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <button className="home1-top" onClick={backToTop}>BacK to Top</button>

           
<br /><br />
    </div>
  );
}

export default BShirts;