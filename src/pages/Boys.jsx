import { boysProducts } from "../data/boysProducts";
import ProductCard from "../components/ProductCard";
import "./ProductsPage.css";

function Boys() {
   const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  return (
    <div>
      <h2 className="section-title">Boys Collection</h2>

      <div className="grid">
        {boysProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <button className="home1-top" onClick={backToTop}>BacK to Top</button>

           
<br /><br />
    </div>
  );
}

export default Boys;