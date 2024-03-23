import { useOutletContext } from "react-router-dom";

export default function HostVanDetails() {
  const currentVan = useOutletContext();

  return (
    <div className="host-van-detail">
      {currentVan.name ? (
        <>
          <div>
            <strong>Name: </strong>
            {currentVan.name}
          </div>
          <br />
          <div>
            <strong>Category: </strong>
            {currentVan.type}
          </div>
          <br />
          <div>
            <strong>Description: </strong>
            {currentVan.description}
          </div>
          <br />
          <div>
            <strong>Visibility: </strong>Public
          </div>
        </>
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
