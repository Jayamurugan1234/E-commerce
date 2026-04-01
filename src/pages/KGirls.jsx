import ProductCard from "../components/ProductCard";
import { kgirlsProducts } from "../data/kgirlsProducts";
import "./ProductsPage.css";


function KGirls() {
   const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  return (
    <div>
      <h2 className="section-title">Girls Collection</h2>

      <div className="grid">
        {kgirlsProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <button className="home1-top" onClick={backToTop}>BacK to Top</button>

           
<br /><br />
    </div>
  );
}

export default KGirls;