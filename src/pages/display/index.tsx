import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

const Display = () => {
    // Variáveis
    const location = useLocation();
    const [pokemon, setPokemon] = useState<any>(null);


    // Função para parsear a query string
    const useQuery = () => {
        return new URLSearchParams(location.search);
    };


    // Get id da página
    const query = useQuery();
    const id = query.get("id");


    // Função para buscar o Pokémon
    useEffect(() => {
        const getPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(response.data);
            } catch (error) {
                console.error("Error fetching Pokemon:", error);
            }
        };

        if (id) {
            getPokemon();
        }
    }, [id]);

    // Exibindo os dados do Pokémon
    console.log("pokemon", pokemon);


    return (
        <main>
            <div className="display-pokemon-container">
                {
                    !pokemon
                        ? <i className="spinner-border"></i>
                        : <div className="d-flex align-items-center">
                            <div className="col-2">
                                <Carousel className="carousel-display">
                                    <Carousel.Item interval={4000}>
                                        <div className="carousel-item-display">
                                            <div className="carousel-item-img">
                                                <img className="w-100" src={pokemon.sprites.front_default} alt="Imagem frontal normal" />
                                            </div>
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item interval={4000} className="carousel-item-outside-display">
                                        <div className="carousel-item-display">
                                            <div className="carousel-item-img">
                                                <img className="w-100" src={pokemon.sprites.back_default} alt="Imagem traseira normal" />
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>

                            <div className="ms-2">
                                <h1>{pokemon.name}</h1>
                                <h3>
                                    Tipo:
                                    {pokemon.types.map((type: any, index: number) => (
                                        <span className="mx-2">
                                            {type.type.name}
                                            {index + 1 == pokemon.types.length ? "" : ","}
                                        </span>
                                    ))}
                                </h3>
                            </div>
                        </div>
                }
            </div>
        </main>
    );
}

export default Display