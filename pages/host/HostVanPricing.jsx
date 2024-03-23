import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const currentVan = useOutletContext();

  return (
    <div className="host-van-detail">
      {/* <h2>{currentVan.price ? `$${currentVan.price}/day` : "Loading..."}</h2> */}
      {currentVan.price ? (
        <h2>{`$${currentVan.price}/day`}</h2>
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
