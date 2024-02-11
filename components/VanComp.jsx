import { useNavigate } from "react-router-dom";

export default function VanComp({ vanItem }) {
  const vanTypeStyle = {
    backgroundColor:
      vanItem.type === "Rugged"
        ? "#115E59"
        : vanItem.type === "Luxury"
        ? "#161616"
        : "#E17654",
    color: "white",
    maxWidth: "fit-content",
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "2rem",
    letterSpacing: "0em",
    textAlign: "center",
    borderRadius: '5px',
    padding: '0.25rem 1rem'
  };

  const navigate = useNavigate()

  const handleNav = (path) => navigate(path)
  //id, name, imageUrl,type, price
  return (
    <div className="van-item-container" onClick={() => handleNav(`/vans/${vanItem.id}`)}>
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
    </div>
  );
}