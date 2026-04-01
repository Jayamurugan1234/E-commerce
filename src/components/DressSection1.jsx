import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import "./DressSection1.css";

function DressSection1() {

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="dress-section1">
            <div className="dress-content1">


                <h2 className="why-dressora">Why Dressora?</h2>
                <p>
                    At Dressora, we are passionate about bringing fashion and comfort together. Our goal is to provide stylish clothing that suits every personality, occasion, and lifestyle. We carefully select designs that reflect modern trends while maintaining quality and affordability.
                    <br /><br />

                    • Trendy and modern fashion collections
                    <br /><br />

                    • High-quality fabrics for comfort and durability
                    <br /><br />

                    • Affordable prices for everyday fashion
                    <br /><br />

                    • Stylish clothing for women, men, and kids
                    <br /><br />

                    • A wide range of casual, party, and seasonal wear
                    <br /><br />





                </p>

                <h5 className="slogan1">Dressora – Dress Smart, Look Stunning.</h5>
                <h5 className="slogan1">Dressora – Where Style Begins...</h5>
            </div>



            <div className="dress-image1">

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
                        <img src="https://uptownie.com/cdn/shop/files/05-02-202604880_540x.jpg?v=1772106112" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://uptownie.com/cdn/shop/files/default7_54_540x.jpg?v=1771237651" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images-magento.shoppersstop.com/pub/media/catalog/product/SPG3001NAVYBLUE/SPG3001NAVYBLUE_BLUE/SPG3001NAVYBLUE_BLUE.jpg_2000Wx3000H" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images-magento.shoppersstop.com/pub/media/catalog/product/A22CSGDR32564BL/A22CSGDR32564BL_BLUE/A22CSGDR32564BL_BLUE.jpg_2000Wx3000H" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images-magento.shoppersstop.com/pub/media/catalog/product/A25USBTSH1873EC/A25USBTSH1873EC_ECRU/A25USBTSH1873EC_ECRU.jpg" />
                    </SwiperSlide>

                </Swiper>

            </div>

            {/* Content Box */}


            <div>
                <button className="home-top" onClick={backToTop}>BacK to Top</button>

            </div>
        </div>



    );
}

export default DressSection1;