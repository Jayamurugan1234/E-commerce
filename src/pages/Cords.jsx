import { cordsProducts } from "../data/cordsProducts";
import ProductCard from "../components/ProductCard";
import "./ProductsPage.css";

function Cords() {
   const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  return (
    <div>
      <h2 className="section-title">Co-ords Sets Collection</h2>

      <div className="grid">
        {cordsProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <button className="home1-top" onClick={backToTop}>BacK to Top</button>

           
<br /><br />
    </div>
  );
}

export default Cords;