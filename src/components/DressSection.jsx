import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import "./DressSection.css";
function DressSection() {
    return (
        <div className="dress-section">


            <div className="dress-image">

                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2500 }}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <img src="https://uptownie.com/cdn/shop/files/default_3_3_540x.jpg?v=1772689889" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://uptownie.com/cdn/shop/files/default18-11-2502650_540x.jpg?v=1767159121" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://uptownie.com/cdn/shop/files/default21-08-2025-20493_1_540x.jpg?v=1761379947" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images-magento.shoppersstop.com/pub/media/catalog/product/AW24TF24JMOT022/AW24TF24JMOT022_BEIGE/AW24TF24JMOT022_BEIGE.jpg_2000Wx3000H" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images-magento.shoppersstop.com/pub/media/catalog/product/CCJSH31639/CCJSH31639_WHITE/CCJSH31639_WHITE.jpg_2000Wx3000H" />
                    </SwiperSlide>

                </Swiper>

            </div>

            {/* Content Box */}
            <div className="dress-content">
                <h2>Dressora – Discover Your Perfect Style</h2>
                <p>
                    Welcome to Dressora, your ultimate destination for trendy and elegant fashion. At Dressora, we believe that the right outfit can boost confidence and express individuality. Our collection is carefully curated to bring you the latest styles in women's, men's, and kids' fashion.
                    <br />
                    <br />
                    From stylish everyday wear to elegant dresses for special occasions, Dressora offers a wide variety of high-quality clothing designed for comfort, style, and affordability. Each piece is selected to match modern fashion trends while ensuring great quality.
                    <br />
                    <br />
                    Explore our collections, discover new trends, and redefine your wardrobe with Dressora. Whether you're looking for casual outfits, party dresses, or seasonal fashion, Dressora has something perfect for everyone.
                    <br />
                    <br />
                   
                </p>

                <h5 className="slogan">Dressora – Wear Your Style...</h5>
                <h5 className="slogan">Dressora – Where Style Begins...</h5>
            </div>

        </div>
    );
}

export default DressSection;