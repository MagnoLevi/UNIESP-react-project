import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import $ from "jquery";
import { Link } from "react-router-dom";

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonDetails {
    name: string;
    id: number;
    sprites: {
        front_default: string;
    };
}

const List = () => {
    // Variáveis
    const [regions, setRegions] = useState<any>();
    const [types, setTypes] = useState<any>();
    const [pokemonList, setPokemonList] = useState<PokemonDetails[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


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

    const fetchPokemonList = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=300');
            const results = response.data.results as Pokemon[];

            const detailedPokemonList = await Promise.all(
                results.map(async (pokemon) => {
                    const detailsResponse = await axios.get(pokemon.url);
                    const details = detailsResponse.data;

                    return {
                        name: details.name,
                        id: details.id,
                        sprites: details.sprites,
                    } as PokemonDetails;
                })
            );

            setPokemonList(detailedPokemonList);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching Pokémon list:', error);
        }
    };

    const fetchPokemonFilter = async () => {
        setLoading(true);

        const nome = document.querySelector<HTMLInputElement>('#input_pokemon')?.value;
        const id = document.querySelector<HTMLInputElement>('#input_id')?.value;
        let response;

        if (nome) {
            response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + nome);
        } else if(id) {
            response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id);
        }
        
        if (response) {
            console.log('asdasd');
            
            const details = response.data;
    
            const arrayAbacaxi = [{
                name: details.name,
                id: details.id,
                sprites: details.sprites,
            }];
    
            setPokemonList(arrayAbacaxi);
            setLoading(false);
        } else {
            fetchPokemonList();
        }
    };

    // Chama funções
    useEffect(() => {
        getReions();
        getTypes();
        fetchPokemonList();
    }, []);


    // Função para alternar a visibilidade com animação jQuery
    const toggleFilter = () => {
        $("#container_add_filter").slideToggle();
    };


    // Html
    return (
        <main>
            <div className="filter-container">
                <div className="d-flex align-items-center">
                    <FaBars id="icon_show_add_filter" className="filter-bars" onClick={toggleFilter} />

                    <div className="col d-flex align-items-center justify-content-end">
                        <div className="d-flex align-items-center me-2">
                            <label htmlFor="" className="text-nowrap me-1">Nº Pokedex:</label>
                            <input id="input_id" className="form-control" type="number" placeholder="(Opcional)" />
                        </div>

                        <div className="d-flex align-items-center me-2">
                            <label htmlFor="" className="text-nowrap me-1">Pokemon:</label>
                            <input id="input_pokemon" className="form-control" type="text" placeholder="(Opcional)" />
                        </div>

                        <div>
                            <button className="btn-custom btn-primary-custom" onClick={fetchPokemonFilter}>
                                <FaMagnifyingGlass />
                            </button>
                        </div>
                    </div>
                </div>

                <div id="container_add_filter" style={{ display: 'none' }}>
                    <hr />
                    <h3>Regiões</h3>
                    <div className="d-flex flex-wrap">
                        {
                            regions ? regions.map((region: any) => (
                                <button className="btn-custom btn-outline-primary-custom mx-4 my-2" key={region.name}>
                                    <h6>{region.name}</h6>
                                </button>
                            )) : <i className="spinner-border spinner-border-sm"></i>
                        }
                    </div>

                    <h3 className="mt-4">Tipos</h3>
                    <div className="d-flex flex-wrap">
                        {
                            types ? types.map((type: any) => (
                                <button className="btn-custom btn-outline-primary-custom mx-4 my-2" key={type.name}>
                                    <h6>{type.name}</h6>
                                </button>
                            )) : <i className="spinner-border spinner-border-sm"></i>
                        }
                    </div>
                </div>
            </div>

            <h6 className="list-pokemon-count">Resultados encontrados: {pokemonList.length}</h6>
            <div className="list-pokemon-container">
                {
                    loading
                        ? <i className="spinner-border spinner-border-sm"></i>
                        : pokemonList.map((pokemon) => (
                            <div className="col-12 col-md-6 col-lg-4 col-xl-2" key={pokemon.id}>
                                <Link to={{ pathname: "/display", search: `?id=${pokemon.id}` }} style={{ textDecoration: "none" }}>
                                    <div className="pokemon-container">
                                        <div className="pokemon-entry">
                                            <h3>{pokemon.id}</h3>
                                        </div>

                                        <div className="pokemon-content">
                                            <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
                                            <div className="pokemon-details">
                                                <h4>{pokemon.name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                }
            </div>
        </main>
    );
}

export default List