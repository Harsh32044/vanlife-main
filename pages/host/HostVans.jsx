import React from "react"
import HostVanTile from "../../components/HostVanTile"
import { getHostVans } from "../../api"
import { useLoaderData } from 'react-router-dom'
import { requireAuth } from "../../utils"

export async function loader({request}) {
    await requireAuth(request)
    return getHostVans()
}

export default function HostVans() {
    const hostVans = useLoaderData()

    return (
        <div className="home-van-route">
            <div className="home-van-route-details">Your Listed Vans</div>
            <div className="home-listed-vans">
                {hostVans.map(van => <HostVanTile key={van.name} vanItem={van}/>)}
            </div>
        </div>
    )
}