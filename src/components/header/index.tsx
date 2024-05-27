import { Link } from 'react-router-dom';
import './style.css';
import { TiHome } from 'react-icons/ti';

const Header = () => {
    return (
        <header>
            <div className='title'>
                <TiHome />
                <span>Poke Search</span>
            </div>

            <ul className='nav'>
                <Link to="/" className='nav-link'>
                    Home
                </Link>
                
                <span className='pipe'>|</span>

                <Link to="/" className='nav-link'>
                    Pesquisa
                </Link>
            </ul>
        </header>
    )
}

export default Header;