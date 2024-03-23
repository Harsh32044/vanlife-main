import { useEffect, useState } from "react";
import { useParams, Outlet, NavLink } from "react-router-dom";

export default function HostVanDetailsLayout() {
    const [currentVan, setCurrentVan] = useState({})
    const params = useParams();

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans[0]))
    }, [params.id])

    const vanTypeStyle = {
        backgroundColor:
          currentVan.type === "rugged"
            ? "#115E59"
            : currentVan.type === "luxury"
            ? "#161616"
            : "#E17654",
        color: "white",
        maxWidth: "fit-content",
        fontSize: "1rem",
        fontWeight: "600",
        lineHeight: "2rem",
        letterSpacing: "0em",
        textAlign: "center",
        borderRadius: '5px',
        padding: '0.25rem 1rem'
      };

    const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#000000",
  };

  return (
    <div className="host-van-item">
      <NavLink
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></NavLink>
        <div className="host-van-item-top">
            <img src={currentVan.imageUrl} alt={currentVan.name} className="host-van-image"/>
            <div>
                <div style={vanTypeStyle}>{currentVan.type}</div>
                <h2>{currentVan.name}</h2>
                <div><span className="each-van-price">${currentVan.price}</span>/day</div>
            </div>
        </div>
      <div className="host-vanitem-header">
        <nav className="navbar-host">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </nav>
      </div>
      <Outlet context={currentVan}/>
    </div>
  );
}
