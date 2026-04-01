import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Hero.css";

function Hero({ title, subtitle }) {
  const images = [
    "https://baghindia.com/cdn/shop/files/Desktop_Banner_7cd629c8-8d71-47be-96db-b5ca9e8758bd_1600x.jpg?v=1770112739",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/hP.jpg?w=1500&dpr=2",
    "https://bighello.in/cdn/shop/files/bageecha.png?v=1770098110&width=1920"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
// navigate("/women")
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${images[currentIndex]})`
      }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button onClick={()=>navigate("/about")}>EXPLORE NOW</button>
      </div>
    </div>
  );
}

export default Hero;