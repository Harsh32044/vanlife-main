import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const currentVan = useOutletContext();

  return (
    <div className="host-van-detail">
      {currentVan.imageUrl ? (
        <img
          src={currentVan.imageUrl}
          alt={currentVan.name}
          className="host-van-image"
        />
      ) : (
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </h2>
      )}
    </div>
  );
}
