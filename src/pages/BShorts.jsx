import ProductCard from "../components/ProductCard";
import { bshortsProducts } from "../data/bshortsProducts";
import "./ProductsPage.css";

function BShorts() {
   const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  return (
    <div>
      <h2 className="section-title">Pants Collection</h2>

      <div className="grid">
        {bshortsProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <button className="home1-top" onClick={backToTop}>BacK to Top</button>

           
<br /><br />
    </div>
  );
}

export default BShorts;