import "./style.css"
import Carousel from 'react-bootstrap/Carousel';

function CarouselFood() {
    return (
        <Carousel className="carousel-custom">
            <Carousel.Item interval={99999}  className="carousel-item-outside-custom">
                <div className="carousel-item-custom">
                    <div className="carousel-item-img">
                        <img src="/src/assets/images/pikachu.png" alt="" />
                    </div>
                    
                    <div className="carousel-item-details">
                        <h2>Pokemon</h2>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item interval={99999}>
                <div className="carousel-item-custom">
                    <div className="carousel-item-img">
                        <img src="/src/assets/images/pikachu.png" alt="" />
                    </div>
                    
                    <div className="carousel-item-details">
                        <h2>Pokemon</h2>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFood;