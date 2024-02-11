export default function HostVanTile({ vanItem }) {
  const price = parseFloat(vanItem.price);
  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="host-van-tileItem">
        <img src={vanItem.imageUrl} alt="" className="tileItem-img" />
        <div>
          <div className="tileItem-name">{vanItem.name}</div>
          <div className="tileItem-price">{formattedPrice}/day</div>
        </div>
    </div>
  );
}
