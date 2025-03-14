export default function Aircrafts() {
  const vnOverview = "Không quân Nhân dân Việt Nam chủ yếu sử dụng các máy bay tiêm kích MiG với số lượng nhỏ hơn đối thủ, nhưng có lợi thế về phòng không và chiến thuật đánh chặn.";
  const usOverview = "Không quân Mỹ triển khai số lượng lớn máy bay ném bom chiến lược B-52 cùng với các tiêm kích và máy bay hỗ trợ hiện đại, tạo ưu thế về hỏa lực và sức mạnh tấn công.";

  const vnAircrafts = [
    { name: "MiG-21", role: "Tiêm kích đánh chặn", image: "https://upload.wikimedia.org/wikipedia/commons/6/68/1_Pucki_Dywizjon_Lotniczy_MiG-21_bis.jpg" },
    { name: "MiG-19", role: "Tiêm kích cường kích", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Mig-19-6058-01.jpg" },
    { name: "MiG-17", role: "Tiêm kích cận chiến", image: "https://www.flugzeuginfo.net/acimages/mig17_karstenpalt.jpg" },
  ];

  const vnSupport = [
    { name: "SAM-2", role: "Tên lửa phòng không", image: "https://file3.qdnd.vn/data/images/0/2022/12/22/tuanson/2.jpg" },
    { name: "Radar P-35", role: "Hệ thống radar cảnh giới", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/P-35M_radar_in_Latvia.jpg" },
  ]

  const usAircrafts = [
    { name: "B-52 Stratofortress", role: "Máy bay ném bom chiến lược", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uFcB9BR_2e1-pZQdR_2JEfaMeTLM0s_Dmg&s" },
    { name: "F-4 Phantom II", role: "Tiêm kích đa nhiệm", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/QF-4_Holloman_AFB.jpg/1200px-QF-4_Holloman_AFB.jpg" },
    { name: "A-6 Intruder", role: "Máy bay cường kích", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Grumman_KA-6D_Intruder_of_VA-34_in_flight%2C_in_1988.jpg" },
  ];

  const usSupport = [
    { name: "EB-66", role: "Máy bay tác chiến điện tử - gây nhiễu radar", image: "https://media.defense.gov/2006/Nov/03/2000537037/2000/2000/0/061103-F-1234P-008.JPG" },
    { name: "KC-135 Stratotanker", role: "Máy bay tiếp nhiên liệu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6spg0eY-mK0cV3MSJRv3E8WtHewSFbrBITA&s" },
  ]

  return (
    <div style={styles.container}>
      {/* Cột của Việt Nam */}
      <div style={styles.column}>
        <h2 style={styles.title}>Không quân Việt Nam</h2>
        <p style={styles.overview}>{vnOverview}</p>
        {vnAircrafts.map((plane, index) => (
          <div key={index} style={styles.card}>
            <img src={plane.image} alt={plane.name} style={styles.image} />
            <h3>{plane.name}</h3>
            <p>{plane.role}</p>
          </div>
        ))}


      <h2 style={styles.title2}>Hỗ trợ chiến đấu</h2>
        {vnSupport.map((plane, index) => (
          <div key={index} style={styles.card}>
            <img src={plane.image} alt={plane.name} style={styles.image} />
            <h3>{plane.name}</h3>
            <p>{plane.role}</p>
          </div>
        ))}
      </div>

      {/* Cột của Mỹ */}
      <div style={styles.column}>
        <h2 style={styles.title}>Không quân Mỹ</h2>
        <p style={styles.overview}>{usOverview}</p>
        {usAircrafts.map((plane, index) => (
          <div key={index} style={styles.card}>
            <img src={plane.image} alt={plane.name} style={styles.image} />
            <h3>{plane.name}</h3>
            <p>{plane.role}</p>
          </div>
        ))}


        <h2 style={styles.title2}>Hỗ trợ chiến đấu</h2>
          {usSupport.map((plane, index) => (
            <div key={index} style={styles.card}>
              <img src={plane.image} alt={plane.name} style={styles.image} />
              <h3>{plane.name}</h3>
              <p>{plane.role}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  },
  column: {
    flex: 1,
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    color: "#eee",
  },
  title2: {
    textAlign: "center",
    color: "#eee",
    margin: "50px 0 20px 0"
  },
  overview: {
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: "10px",
    color: "#ccc",
  },
  card: {
    background: "#f9f9f930",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    marginBottom: "15px",
  },
  image: {
    width: "100%",
    height: "280px",
    borderRadius: "5px",
    objectFit: "cover",
  },
};
