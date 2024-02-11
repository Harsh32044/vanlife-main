import React from "react"
import VanComp from "../../components/VanComp"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => {
                return res.json()
            })
                .then(data => {
                    setVans(data.vans)
                })
    }, [])

    return (
        <div className="vans-route">
            <div className="vans-container">
                <div className="vans-route-heading">Explore our van options</div>
                <div className="filter-buttons-div">
                    <div className="filterbuttons">Simple</div>
                    <div className="filterbuttons">Luxury</div>
                    <div className="filterbuttons">Rugged</div>
                    <div className="clear-filters">Clear Filters</div>
                </div>
                <div className="vans-grid">
                    {vans.map(van => <VanComp key={van.id} vanItem={van}/>)}
                </div>
            </div>
        </div>        
    )
}