import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselFood from "../../components/carousel_food/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { CgPokemon } from "react-icons/cg";

const Home = () => {
    const [regions, setRegions] = useState<any>();
    const [types, setTypes] = useState<any>();

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

    useEffect(() => {
        getReions();
        getTypes();
    }, []);

    console.log('regions', regions);

    return (
        <main>
            <div className="welcome">
                <div className="welcome-content col-7">
                    <CgPokemon className="welcome-icon" />
                    <span className="welcome-title">Bem vindo</span>
                    <span className="welcome-subtitle">
                        Sinta-se à vontade para explorar o potencial de <span className="title-name">Poke Search</span>, aqui você poderá ver toda info necessária sobre seu Pokemón favorito
                    </span>
                </div>

                <div className="col-5">
                    <CarouselFood />
                </div>
            </div>

            <div className="filter-buttons-container">
                <h1>Regiões</h1>
                <div className="filter-buttons">
                    {
                        regions ? regions.map((region: any) => (
                            <div className="mx-4" key={region.name}>
                                <div className="filter-button">
                                    <h3>{region.name}</h3>
                                </div>
                            </div>
                        )) : null
                    }
                </div>
            </div>

            <div className="filter-buttons-container">
                <h1>Tipos</h1>
                <div className="filter-buttons">
                    {
                        types ? types.map((type: any) => (
                            <div className="mx-4" key={type.name}>
                                <div className="filter-button">
                                    <h3>{type.name}</h3>
                                </div>
                            </div>
                        )) : null
                    }
                </div>
            </div>
        </main>
    );
}

export default Home