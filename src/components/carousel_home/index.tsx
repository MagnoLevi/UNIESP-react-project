import "./style.css"
import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
    return (
        <Carousel className="carousel-home">
            <Carousel.Item interval={99999} className="carousel-item-outside-home">
                <div className="carousel-item-home">
                    <div className="carousel-item-img">
                        <img src="/src/assets/images/pikachu.png" alt="" />
                    </div>

                    <div className="carousel-item-details">
                        <h2>Pikachu</h2>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselHome;