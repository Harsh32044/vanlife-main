import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function VanItem() {
  const params = useParams();
  const [van, setVan] = React.useState({});
  const location = useLocation()

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || ""
  const type = location.state?.type || "all"

//   const getType = () => {
//     let typeIndex, ampIndex;
//     typeIndex = search.indexOf("type")
//     ampIndex = search.indexOf("&") == -1 ? ampIndex = search.length : search.indexOf("&")
//     if (typeIndex == -1) {
//         return "all"
//     }
//     else {
//         return search.slice(typeIndex + 5, ampIndex)
//     }
// }
  return (
    <div className="each-van-route">
      <Link to={`..${search}`} relative="path" className="back-to-vans">
      &larr; Back to {type} vans
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
                  van.type === "rugged"
                    ? "#115E59"
                    : van.type === "luxury"
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
