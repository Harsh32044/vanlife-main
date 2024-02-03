import {  useNavigate } from "react-router-dom";

export default function Navbar({children}) {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
    navigate(path);
  };
    return (
        <>
        <nav className="navbar">
            <div className="vanlife-home" onClick={() => handleNavigation("/")}>#VANLIFE</div>
            <div>
                <div className="navbar-routes route-about"  onClick={() => handleNavigation("/about")}>About</div>
                <div className="navbar-routes" onClick={() => handleNavigation("vans/")}>Vans</div>
            </div>
        </nav>
        {children}
        </>
    )
}