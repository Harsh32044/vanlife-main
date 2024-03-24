import { Link, NavLink } from "react-router-dom";
import imageUrl from "/profile-avatar.png"

export default function Navbar() {

    const activeStyle ={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
        <header className="navbar">
            <Link className="vanlife-home" to="/" >#VANLIFE</Link>
            <nav className="navbar-routes-container">
                <NavLink to="host" className="navbar-routes" style={({isActive})=> isActive ? activeStyle : null}>Host</NavLink>
                <NavLink to="vans" className="navbar-routes" style={({isActive})=> isActive ? activeStyle : null}>Vans</NavLink>
                <NavLink to="about" className="navbar-routes" style={({isActive})=> isActive ? activeStyle : null}>About</NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={imageUrl}
                        className="login-icon"
                        alt="Login"
                    />
                </Link>
            </nav>
        </header>
        </>
    )
}