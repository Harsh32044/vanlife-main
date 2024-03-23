import { Link } from "react-router-dom";

export default function VanComp({ vanItem, searchParams, typeFilter }) {
  const vanTypeStyle = {
    backgroundColor:
      vanItem.type === "rugged"
        ? "#115E59"
        : vanItem.type === "luxury"
        ? "#161616"
        : "#E17654",
    color: "white",
    maxWidth: "fit-content",
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "2rem",
    textAlign: "center",
    borderRadius: '5px',
    padding: '0.25rem 1rem'
  };

  return (
    <Link className="van-item-container" to={vanItem.id} state={
      {
        search: `?${searchParams.toString()}`,
        type: typeFilter
      }
      }>
      <img
        src={vanItem.imageUrl}
        alt={vanItem.name}
        className="van-item-image"
      />
      <div className="name-price-div">
        <div className="van-name">{vanItem.name}</div>
        <div>
          <div className="van-price">${vanItem.price}</div>
          <div>/day</div>
        </div>
      </div>
      <div style={vanTypeStyle}>{vanItem.type.toString()}</div>
    </Link>
  );
}
