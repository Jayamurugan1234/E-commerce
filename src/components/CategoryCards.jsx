import { useNavigate } from "react-router-dom";
import "./CategoryCards.css";

function CategoryCards() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Women",
      image: "https://primhi.com/wp-content/uploads/2024/12/KT-RG-Black_Beauty-1-e1733899508940.jpg",
      path: "/women"
    },
    {
      name: "Men",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c",
      path: "/men"
    },
    {
      name: "Boys",
      image: "https://images-magento.shoppersstop.com/pub/media/catalog/product/A25USBTSH1873EC/A25USBTSH1873EC_ECRU/A25USBTSH1873EC_ECRU.jpg",
      path: "/boys"
    },
    {
      name: "Girls",
      image: "https://images-magento.shoppersstop.com/pub/media/catalog/product/SPFK3004NAVBLUE/SPFK3004NAVBLUE_NAVY_BLUE/SPFK3004NAVBLUE_NAVY_BLUE.jpg_2000Wx3000H",
      path: "/girls"
    }
  ];

  return (
    <div className="category-section">
      <h2 className="section-title">Shop By Category</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => navigate(item.path)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCards;