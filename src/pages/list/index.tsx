import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import $ from "jquery";

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

    // Função para alternar a visibilidade com animação jQuery
    const toggleFilter = () => {
        $("#container_add_filter").slideToggle();
    };

    // Chama funções
    useEffect(() => {
        getReions();
        getTypes();
    }, []);

    return (
        <main>
            <div className="filter-container">
                <div className="d-flex align-items-center">
                    <FaBars id="icon_show_add_filter" className="filter-bars" onClick={toggleFilter} />

                    <div className="col d-flex align-items-center justify-content-end">
                        <div className="d-flex align-items-center me-2">
                            <label htmlFor="" className="text-nowrap me-1">Nº Pokedex:</label>
                            <input className="form-control" type="text" placeholder="(Opcional)" />
                        </div>

                        <div className="d-flex align-items-center me-2">
                            <label htmlFor="" className="text-nowrap me-1">Nome Pokemon:</label>
                            <input className="form-control" type="text" placeholder="(Opcional)" />
                        </div>

                        <div>
                            <button className="btn-custom btn-primary-custom">
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

            <div className="list-container">

            </div>
        </main>
    );
}

export default List