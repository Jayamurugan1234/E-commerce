import CategoryCards from "../components/CategoryCards";
import "./About.css";


function About() {

     const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div>
            <h2 className="about">About</h2>
            <div className="about-border">

            <h5 className="about-title">Our Story: Style, Confidence & Elegance</h5>

            <p className="about-content"> Dressora is a modern fashion brand created to bring stylish, comfortable, and affordable clothing to everyone. Our collections are carefully designed to match the latest fashion trends while keeping comfort and quality as our top priority. Every Dressora outfit is made to help people express their personality with confidence and elegance.



                We believe fashion should be simple, accessible, and enjoyable for everyone. From women’s fashion to men’s and kids’ collections, Dressora offers a wide range of clothing designed to suit different styles, occasions, and lifestyles. By focusing on customer preferences and feedback, we continuously improve our designs, fabrics, and fit to create clothing that people truly love to wear.



                Today, Dressora is growing as an online fashion destination where customers can explore trendy outfits and shop easily from the comfort of their homes. Our goal is to make fashion more exciting, affordable, and accessible to everyone.
            </p>
            </div>
            <CategoryCards />


<div className="about-border">
            <h5 className="about-title">Our Process: Quality, Trends & Comfort</h5>
            <p className="about-content">At Dressora, we follow modern fashion trends and carefully design collections that suit different body types, styles, and occasions. Our design process focuses on combining style with comfort so that every outfit feels as good as it looks.

                We select quality fabrics and pay attention to every detail in stitching and finishing to ensure our products are durable and fashionable. Our collections are regularly updated with fresh styles to keep up with the fast-changing world of fashion.

                Our commitment is simple — to deliver clothing that is stylish, comfortable, high-quality, and affordable, making Dressora a brand people trust for everyday fashion and special occasions.</p>

</div>
<br />

<p className="about-slogan">"At Dressora, we believe fashion should be stylish, comfortable, and accessible for everyone, no matter the occasion. "
    <br /> <br />
    "Dressora creates clothing that blends modern trends with comfort so you can look great and feel great every day. "
    <br /><br />
    "Step into the world of Dressora where fashion meets creativity, confidence, and everyday elegance." 

    <br /><br />
    "Dressora – Dress Better with Dressora."
    <br /><br />
    "Wear Your Confidence."
</p>
{/* <blockquote>hiii</blockquote> */}
<br /> <br />

<button className="home1-top" onClick={backToTop}>BacK to Top</button>

           
<br /><br /> 
        </div>
        

    )
}
export default About;