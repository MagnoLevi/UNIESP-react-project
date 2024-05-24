import { Link } from 'react-router-dom';
import './style.css';
import { TiHome } from 'react-icons/ti';

const Header = () => {
    return (
        <header>
            <Link to="/" className='title'>
                <TiHome />
                <span>Ideal Meal</span>
            </Link>

            <ul className='nav'>
                <li> Pesquisa </li>
                <span className='pipe'>|</span>
                <li> Segunda Aba </li>
            </ul>
        </header>
    )
}

export default Header;