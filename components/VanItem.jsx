import React from "react";
import { Link, useParams } from "react-router-dom";

export default function VanItem() {
  const params = useParams();
  const [van, setVan] = React.useState({});

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="each-van-route">
      <Link to={`/vans`} className="back-to-vans">
        Back to all vans
      </Link>
      {van.imageUrl ? (
        <div className="each-van-div">
          <div>
            <img className="each-van-img" src={van.imageUrl} alt={van.name} />
          </div>
          <div>
            <div
              style={{
                backgroundColor:
                  van.type === "Rugged"
                    ? "#115E59"
                    : van.type === "Luxury"
                    ? "#161616"
                    : "#E17654",
                maxWidth: "fit-content",
                color: "white",
                borderRadius: "5px",
                padding: "0.25rem 1.25rem",
                fontSize: "1rem",
                fontWeight: "600",
                lineHeight: "2rem",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              {van.type}
            </div>
            <div className="each-van-name">{van.name}</div>
            <div>
              <span className="each-van-price">${van.price}</span>
              <span>/day</span>
            </div>
            <div className="each-van-desc">{van.description}</div>
            <button className="each-van-rentBtn">Rent this Van!</button>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
