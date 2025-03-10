import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const battleLocations = [
  { name: "Trận địa pháo Hồ Gươm", lat: 21.0285, lng: 105.8542 },
  { name: "Bãi cháy máy bay B-52", lat: 21.0235, lng: 105.8332 },
  { name: "Sân bay Gia Lâm", lat: 21.0406, lng: 105.8877 },
  { name: "Nhà tù Hỏa Lò", lat: 21.0243, lng: 105.8493 },
  { name: "Bảo tàng Chiến thắng B-52", lat: 21.0292, lng: 105.8251 },
  { name: "Trận địa phòng không Yên Viên", lat: 21.1000, lng: 105.9100 },
  { name: "Trận địa pháo Cổ Loa", lat: 21.1406, lng: 105.9001 },
  { name: "Khu vực bị ném bom Khâm Thiên", lat: 21.0253, lng: 105.8365 },
  { name: "Cầu Long Biên", lat: 21.0394, lng: 105.8644 },
  { name: "Hầm chỉ huy T1", lat: 21.0198, lng: 105.8334 },

  // 🔥 10 địa điểm mới bổ sung
  { name: "Trận địa pháo Xuân Đỉnh", lat: 21.0900, lng: 105.8100 },
  { name: "Sân bay Bạch Mai", lat: 21.0028, lng: 105.8333 },
  { name: "Trận địa phòng không Đông Anh", lat: 21.1402, lng: 105.8502 },
  { name: "Đài radar Sóc Sơn", lat: 21.2620, lng: 105.8284 },
  { name: "Nhà máy điện Yên Phụ", lat: 21.0498, lng: 105.8412 },
  { name: "Trận địa pháo Thường Tín", lat: 20.9440, lng: 105.8520 },
  { name: "Khu tập trung máy bay B-52 (Ba Vì)", lat: 21.1600, lng: 105.3700 },
  { name: "Bến phà Đuống", lat: 21.0862, lng: 105.9573 },
  { name: "Kho quân sự Gia Thụy", lat: 21.0505, lng: 105.8890 },
  { name: "Hồ Tây - Vùng phòng không quan trọng", lat: 21.0572, lng: 105.8212 },
];


// Danh sách các điểm ranh giới trận địa (chi tiết hơn)
const battleBoundary = [
  [21.1500, 105.9200], // Bắc
  [21.1200, 105.9400],
  [21.1000, 105.9300],
  [21.0800, 105.9200],
  [21.0600, 105.9100], // Đông Bắc

  [21.0500, 105.9000],
  [21.0400, 105.8900], // Đông
  [21.0300, 105.8800],
  [21.0200, 105.8700], // Đông Nam

  [21.0100, 105.8600],
  [21.0000, 105.8500], // Nam
  [21.0000, 105.8400],
  [21.0050, 105.8300], // Tây Nam

  [21.0100, 105.8200],
  [21.0200, 105.8100],
  [21.0300, 105.8000], // Tây
  [21.0400, 105.7900],
  [21.0500, 105.7800], // Tây Bắc

  [21.1000, 105.7800],
  [21.1200, 105.7900],
  [21.1400, 105.8000], // Khép lại đường viền
  [21.1500, 105.9200],
];

export default function BattleMap() {
  return (
    <MapContainer center={[21.0285, 105.8542]} zoom={12} style={{  width: "100%", height: "60vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Hiển thị các điểm quan trọng */}
      {battleLocations.map((loc, index) => (
        <Marker key={index} position={[loc.lat, loc.lng]}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}

      {/* Vẽ ranh giới chi tiết của trận đánh */}
      <Polyline positions={battleBoundary} color="red" weight={3} opacity={0.7} />
    </MapContainer>
  );
}
