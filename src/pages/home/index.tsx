import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselFood from "../../components/carousel_food/index";
import { PiChefHat } from "react-icons/pi";

const Home = () => {
    return (
        <main>
            <div className="welcome">
                <div className="welcome-content">
                    <PiChefHat className="welcome-icon" />
                    <span className="welcome-title">Bem vindo</span>
                    <span className="welcome-subtitle">
                        Sinta-se à vontade para explorar as receitas disponiveis e experimenta-las você mesmo
                    </span>
                </div>

                <div className="welcome-carousel">
                    <CarouselFood />
                </div>
            </div>

            <div className="search-category-list">
                <div className="col-12 col-md-6 col-lg-3 px-2">
                    <div className="search-category">
                        <img className="category-img" src="/src/assets/images/teste1.jpg" alt="" />
                        <div className="category-details">
                            <h2>Comidas com carne</h2>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 px-2">
                    <div className="search-category">
                        <img className="category-img" src="/src/assets/images/teste1.jpg" alt="" />
                        <div className="category-details">
                            <h2>Comidas com carne</h2>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 px-2">
                    <div className="search-category">
                        <img className="category-img" src="/src/assets/images/teste1.jpg" alt="" />
                        <div className="category-details">
                            <h2>Comidas com carne</h2>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 px-2">
                    <div className="search-category">
                        <img className="category-img" src="/src/assets/images/teste1.jpg" alt="" />
                        <div className="category-details">
                            <h2>Comidas com carne</h2>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 px-2">
                    <div className="search-category">
                        <img className="category-img" src="/src/assets/images/teste1.jpg" alt="" />
                        <div className="category-details">
                            <h2>Comidas com carne</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home