import { Link, NavLink } from 'react-router-dom';
import './styles.css';

export default function Header() {

    return (
        <header>
            <div className="header-content-container container">
                <Link to="/">
                    <h1 className="site-name">MeuSite</h1>
                </Link>
                <nav>
                    <ul className="navbar">
                        <NavLink to="/home" className={({ isActive }) => isActive ? "menu-active" : "menu-disable"}>Início</NavLink>
                        <NavLink to="/promotion" className={({ isActive }) => isActive ? "menu-active" : "menu-disable"}>Promoção</NavLink>
                        <NavLink to="/sub" className={({ isActive }) => isActive ? "menu-active" : "menu-disable"}>Participar</NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
