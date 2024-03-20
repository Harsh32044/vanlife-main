import React from "react"
import HostVanTile from "../../components/HostVanTile"

export default function HostVans() {

    const [hostVans, setHostVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
                .then(data => {
                    setHostVans(data.vans)
                })
    },[])

    return (
        <div className="home-van-route">
            <div className="home-van-route-details">Your Listed Vans</div>
            <div className="home-listed-vans">
                {hostVans.length > 0 ? (
                    hostVans.map(van => <HostVanTile key={van.name} vanItem={van}/>)
                    ) : <h3>Loading...</h3>}
            </div>
        </div>
    )
}