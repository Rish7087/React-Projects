const HeroSection = () => {
    return(
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>
                    YOUR FEET DESERVES THE BEST AND
                     WE'RE HERE TO HEP YOU WITH OUR SHOES. 
                </p>

                <div className= "hero-btn">
                    <button>Shop Now</button>
                    <button className="secondry-btn">Catergory</button>
                </div>

                <div className="shopping">
                <p>Also available on</p>

                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
                </div>

            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="hero-image"></img>
            </div>
        </main>
    );
};

export default HeroSection;
