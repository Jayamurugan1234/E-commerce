import ProductCard from "../components/ProductCard";
import { bpantsProducts } from "../data/bpantsProducts";
import "./ProductsPage.css";

function BPants() {
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
        {bpantsProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <button className="home1-top" onClick={backToTop}>BacK to Top</button>

           
<br /><br />
    </div>
  );
}

export default BPants;