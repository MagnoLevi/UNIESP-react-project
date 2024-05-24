import "./style.css"
import Carousel from 'react-bootstrap/Carousel';

function CarouselFood() {
    return (
        <Carousel className="carousel-food">
            <Carousel.Item interval={99999} className="item-carousel-food">
                <img src="/src/assets/images/teste1.jpg" alt="" />

                <div className="item-carousel-details-food">
                    <h2>Teste</h2>
                </div>
            </Carousel.Item>

            <Carousel.Item interval={99999} className="item-carousel-food">
                <img src="/src/assets/images/teste1.jpg" alt="" />

                <div className="item-carousel-details-food">
                    <h2>Teste 2</h2>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFood;