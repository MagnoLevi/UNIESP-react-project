import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselFood from "../../components/carousel_food/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { CgPokemon } from "react-icons/cg";

const List = () => {
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
            <div className="filter-container">
                a
            </div>

            <div className="list-container">
                
            </div>
        </main>
    );
}

export default List