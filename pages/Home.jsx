import { Link } from "react-router-dom";

export default function Home() {
    return (
            <div className="home-container">
                <div className="home-first-subheading">You got the travel plans, we got the travel vans.</div>
                <div className="home-desc-text">Add adventure to your life by joining the #vanlife movement. 
                    Rent the perfect van to make your perfect road trip.</div>
                <Link to={`/vans`} className="link-button home">Find your van</Link>
            </div>
    )
}