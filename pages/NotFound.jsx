import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="not-found-div">
            <h1>Sorry, the page you were looking for does not exist.</h1><br/>
            <Link to="/" className="not-found-button">Go to Home</Link>
        </div>
    )
}