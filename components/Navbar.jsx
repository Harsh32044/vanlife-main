import {  useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
    navigate(path);
  };
    return (
        <>
        <nav className="navbar">
            <div className="vanlife-home" onClick={() => handleNavigation("/")}>#VANLIFE</div>
            <div className="navbar-routes-container">
                <div className="navbar-routes" onClick={() => handleNavigation("/host")}>Host</div>
                <div className="navbar-routes route-vans" onClick={() => handleNavigation("/vans")}>Vans</div>
                <div className="navbar-routes"  onClick={() => handleNavigation("/about")}>About</div>
            </div>
        </nav>
        </>
    )
}