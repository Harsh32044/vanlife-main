import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetails() {
    const params = useParams()
    const [currentVan, setCurrentVan] = useState({})
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans[0]))
    }, [params.id])

    return (
        <div className="host-van-detail">
            {currentVan.name ? (<>
                <div><strong>Name: </strong>{currentVan.name}</div><br/>
                <div><strong>Category: </strong>{currentVan.type}</div><br/>
                <div><strong>Description: </strong>{currentVan.description}</div><br/>
                <div><strong>Visibility: </strong>Public</div>
                </>
            ): <h2>Loading...</h2>}
        </div>
    )
}