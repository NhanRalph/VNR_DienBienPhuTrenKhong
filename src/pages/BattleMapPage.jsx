import BattleMap from "../components/BattleMap";

export default function BattleMapPage() {
  return (
    <div className="fullscreen-container">
      <div className="content">
      <h1>🗺️ Bản đồ trận đánh</h1>
      <p>Trận địa phòng không Hà Nội trong chiến dịch "Điện Biên Phủ trên không".</p>
      <BattleMap />
      </div>
    </div>
  );
}
