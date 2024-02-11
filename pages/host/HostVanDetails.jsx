import { useParams } from 'react-router-dom'

export default function HostVanDetails() {
    const params = useParams()

    return <h1>The param you passed is <em>{params.id}</em></h1>
}