import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useLocation } from "react-router-dom";

const Display = () => {
    const location = useLocation();

    // Função para parsear a query string
    const useQuery = () => {
        return new URLSearchParams(location.search);
    }

    const query = useQuery();
    const id = query.get('id');

    return (
        <main>
            <h1>Display Page</h1>
            {id ? <p>ID: {id}</p> : <p>No ID provided</p>}
        </main>
    );
}

export default Display