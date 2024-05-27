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
                {
                    window.location.pathname == "/"
                        ? <Link to="/" className='nav-link nav-link-selected'>
                            Home
                        </Link>
                        :
                        <Link to="/" className='nav-link'>
                            Home
                        </Link>
                }

                <span className='pipe'>|</span>

                {
                    window.location.pathname == "/list"
                        ? <Link to="/list" className='nav-link nav-link-selected'>
                            Lista
                        </Link>
                        :
                        <Link to="/list" className='nav-link'>
                            Lista
                        </Link>
                }
            </ul>
        </header>
    )
}

export default Header;