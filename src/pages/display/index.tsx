import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { AiFillSound } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
    const id = parseInt(query.get("id") || "0");


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


    // Função para tocar o som
    const executeSound = (urlSound: string) => {
        const audio = new Audio(urlSound);
        audio.play();
    };

console.log(pokemon)
    return (
        <main>
            <div className="display-pokemon-container">
                {/* Btns prev e next */}
                <div className="d-flex justify-content-between mb-4">
                    {
                        id > 1
                            ? <Link to={{ pathname: "/display", search: `?id=${id - 1}` }}>
                                <button className="btn-custom btn-outline-primary-custom">
                                    <FaAngleLeft />
                                </button>
                            </Link>
                            : <div></div>
                    }

                    {
                        id < 1000
                            ? <Link to={{ pathname: "/display", search: `?id=${id + 1}` }}>
                                <button className="btn-custom btn-outline-primary-custom">
                                    <FaAngleRight />
                                </button>
                            </Link>
                            : <div></div>
                    }
                </div>

                {
                    !pokemon
                        ? <i className="spinner-border"></i>
                        :
                        <>
                            {/* main info */}
                            <div className="d-flex align-items-center">
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
                                    <p className="pokemon-name">
                                        {pokemon.name}
                                    </p>

                                    <p className="pokemon-type">
                                        Tipo:
                                        {pokemon.types.map((type: any, index: number) => (
                                            <span className="mx-2" key={type.slot}>
                                                {type.type.name}
                                                {index + 1 == pokemon.types.length ? "" : ","}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>

                            {/* Detalhes */}
                            <div className="mt-4">
                                <div className="d-flex align-items-center">
                                    <h2 className="m-0 me-2">Detalhes</h2>
                                    <button className="btn-custom btn-sm btn-outline-primary-custom" onClick={() => executeSound(pokemon.cries.latest)}>
                                        <AiFillSound />
                                    </button>
                                </div>

                                <hr className="mt-2" />

                                {/* Peso e altura */}
                                <div>
                                    <div className="d-flex align-items-center">
                                        <h4>Peso:</h4>
                                        <span className="ms-1">{pokemon.weight / 10}kg</span>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <h4>Altura:</h4>
                                        <span className="ms-1">{pokemon.height / 10}m</span>
                                    </div>
                                </div>

                                {/* Habilidades */}
                                <div className="mt-4">
                                    <h4>Habilidades</h4>
                                    <ul>
                                        {pokemon.abilities.map((ability: any) => (
                                            <li key={ability.slot}>{ability.ability.name}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Jogos */}
                                <div className="mt-4">
                                    <h4>Jogos</h4>
                                    <ul>
                                        <li>
                                            {
                                                pokemon.game_indices.length > 10
                                                    ? "Mais de 10 jogos"
                                                    : pokemon.game_indices.map((game: any, index: number) => (
                                                        <span key={game.game_index}>{game.version.name}{index + 1 == pokemon.game_indices.length ? "" : ", "}</span>
                                                    ))
                                            }
                                        </li>
                                    </ul>
                                </div>

                                {/* Status */}
                                <div className="mt-4">
                                    <h4>Stats</h4>

                                    {pokemon.stats.map((stat: any) => (
                                        <div className="mb-3" key={stat.stat.name}>
                                            <span className="ms-2">{stat.stat.name}</span>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: `${stat.base_stat}%` }} role="progressbar" aria-valuenow={12} aria-valuemin={0} aria-valuemax={100}>
                                                    {stat.base_stat}%
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </>
                }
            </div>
        </main>
    );
}

export default Display