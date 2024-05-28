import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselHome from "../../components/carousel_home/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { SiPokemon } from "react-icons/si";

const Home = () => {
    // Variáveis
    const [regions, setRegions] = useState<any>();
    const [types, setTypes] = useState<any>();

    // Funções
    const getReions = () => {
        axios
            .get("https://pokeapi.co/api/v2/region")
            .then((res) => {
                setRegions(res.data.results)
            });
    }

    const getTypes = () => {
        axios
            .get("https://pokeapi.co/api/v2/type")
            .then((res) => {
                setTypes(res.data.results)
            });
    }

    // Chama funções
    useEffect(() => {
        getReions();
        getTypes();
    }, []);

    return (
        <main>
            <div className="welcome-container">
                <div className="welcome-content col-7">
                    <SiPokemon className="welcome-icon" />
                    <span className="welcome-title">Bem vindo</span>
                    <span className="welcome-subtitle">
                        Sinta-se à vontade para explorar o potencial de <span className="title-name">Poke Search</span>, aqui você poderá ver toda info necessária sobre seu Pokemón favorito
                    </span>
                </div>

                <div className="col-5">
                    <CarouselHome />
                </div>
            </div>

            <div className="filter-buttons-container">
                <h1>Regiões</h1>
                <div className="filter-buttons">
                    {
                        regions ? regions.map((region: any) => (
                            <button className="btn-custom btn-primary-custom mx-4 my-2" key={region.name}>
                                <h3>{region.name}</h3>
                            </button>
                        )) : <i className="spinner-border spinner-border-sm"></i>
                    }
                </div>
            </div>

            <div className="filter-buttons-container">
                <h1>Tipos</h1>
                <div className="filter-buttons">
                    {
                        types ? types.map((type: any) => (
                            <button className="btn-custom btn-primary-custom mx-4 my-2" key={type.name}>
                                <h3>{type.name}</h3>
                            </button>
                        )) : <i className="spinner-border spinner-border-sm"></i>
                    }
                </div>
            </div>
        </main>
    );
}

export default Home