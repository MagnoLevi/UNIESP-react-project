import { Link, useLocation } from 'react-router-dom';
import './style.css';
import { CgPokemon } from 'react-icons/cg';

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <div className='col-8 header-content'>
                <div className='header-title'>
                    <CgPokemon />
                    <span>Poke Search</span>
                </div>
                
                <ul className='header-nav'>
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'nav-link-selected' : ''}`}>
                        Home
                    </Link>
                
                    <span className='pipe'>|</span>
                
                    <Link to="/list" className={`nav-link ${location.pathname === '/list' ? 'nav-link-selected' : ''}`}>
                        Lista
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;