import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HostVanPricing() {
  const params = useParams();
  const [currentVan, setCurrentVan] = useState({});
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, [params.id]);

  return (
    <div className="host-van-detail">
      <h2>{currentVan.price ? `$${currentVan.price}/day` : "Loading..."}</h2>
    </div>
  );
}
