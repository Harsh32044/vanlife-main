import { Outlet, Link } from "react-router-dom"

export default function HostLayout() {
    return (
        <>
        <div className="host-header">
            <nav className="navbar-host">
                <Link to={`/host/`}>Dashboard</Link>
                <Link to={`/host/income`}>Income</Link>
                <Link to={`/host/vans`}>Vans</Link>
                <Link to={`/host/reviews`}>Reviews</Link>
                <div></div>
                <div></div>
            </nav>
        </div>
        <Outlet/>
        </>
    )
}