import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HostVanPhotos() {
  const params = useParams();
  const [currentVan, setCurrentVan] = useState({});
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, [params.id]);

  return (
    <div className="host-van-detail">
      {currentVan.imageUrl ? (
        <img src={currentVan.imageUrl} alt={currentVan.name} className="host-van-image"/>
      ): <h2>Loading...</h2>}
    </div>
  );
}
