import "./Memorial.css";

const heroes = [
  {
    name: "Phạm Tuân",
    role: "Phi công MiG-21",
    sacrifice: "Bắn hạ B-52 đầu tiên",
  },
  {
    name: "Nguyễn Văn Bảy",
    role: "Phi công huyền thoại",
    sacrifice: "Lập chiến công bắn rơi nhiều máy bay địch",
  },
  {
    name: "Lê Văn Trọng",
    role: "Trung đội trưởng phòng không",
    sacrifice: "Bảo vệ Hà Nội trong đêm oanh tạc",
  },
  {
    name: "Trần Hữu Dực",
    role: "Tư lệnh Phòng không - Không quân",
    sacrifice: "Lãnh đạo chiến dịch bảo vệ bầu trời",
  },
  {
    name: "Nguyễn Hồng Nhị",
    role: "Phi công MiG-21",
    sacrifice: "Bắn hạ 8 máy bay địch",
  },
  {
    name: "Lê Thanh Đạo",
    role: "Trung đoàn trưởng tên lửa",
    sacrifice: "Chỉ huy bắn hạ B-52",
  },
  {
    name: "Hoàng Văn Khánh",
    role: "Lính phòng không",
    sacrifice: "Chiến đấu tại trận địa Cầu Diễn",
  },
  {
    name: "Vũ Xuân Thiều",
    role: "Phi công MiG-21",
    sacrifice: "Lao thẳng vào B-52 để tiêu diệt",
  },
  {
    name: "Lê Hải",
    role: "Chỉ huy pháo cao xạ",
    sacrifice: "Bảo vệ cầu Long Biên khỏi bom Mỹ",
  },
];

const historicalImages = [
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.me6HuvZ3hGFcXQY7tmtS-QHaEl&pid=Api",
    alt: "Hệ thống phòng không Hà Nội",
    description:
      "Bộ đội phòng không sẵn sàng chiến đấu bảo vệ bầu trời Hà Nội.",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.bo9QCtI9ULBQhFFsMJzINwHaFw&pid=Api",
    alt: "Tên lửa SAM bắn hạ B-52",
    description: "Hình ảnh B-52 bị bắn hạ bởi tên lửa SAM-2 của Việt Nam.",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.Ld3TGY9ofxmOX5sg-mA92QHaEi&pid=Api",
    alt: "Bộ đội tên lửa trong chiến dịch",
    description:
      "Bộ đội tên lửa phòng không Việt Nam theo dõi mục tiêu trên radar.",
  },
  {
    src: "https://www.bqllang.gov.vn/images/Thang_12-2015/8-12-2015/DBP_tren_khong__phan_1_anh_2.png",
    alt: "B-52 bốc cháy trên bầu trời",
    description: "Hình ảnh B-52 trúng đạn phòng không và bốc cháy trên không.",
  },
  {
    src: "https://cdnmedia.baotintuc.vn/Upload/c2tvplmdloSDblsn03qN2Q/files/2022/12/21/Bocongan/ha-noi-dien-bien-phu-tren-khong-21122022a1.jpg",
    alt: "Xác máy bay B-52",
    description: "Một xác B-52 của Mỹ bị bắn rơi tại Hà Nội năm 1972.",
  },
  {
    src: "https://special.vietnamplus.vn/wp-content/uploads/2022/02/TTXVN_2802cau17.jpg",
    alt: "Cầu Long Biên bị bom Mỹ tấn công",
    description:
      "Cầu Long Biên bị tấn công nhưng vẫn đứng vững nhờ phòng không kiên cường.",
  },
  {
    src: "https://mediafile.qdnd.vn//images/2022/12/15/pham-tuan.jpg",
    alt: "Phi công Phạm Tuân",
    description: "Phi công Phạm Tuân - người Việt Nam đầu tiên bắn hạ B-52.",
  },
  {
    src: "https://cdn.daibieunhandan.vn/images/b9dccf2610944215cc16af20b31f4841840363c988dcd0acba1d273a627a71144e288b47331c7848663e71b0ef55182a092e60fcc33c04fcfdcf60c3968ef108/1651829448070.jpg",
    alt: "Radar theo dõi B-52",
    description: "Hệ thống radar của Việt Nam theo dõi máy bay B-52.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOIiMjSnTi_vJ1AcCBiDxT5K6HatvoDcerQ&s",
    alt: "Lực lượng phòng không Hà Nội",
    description: "Bộ đội phòng không chuẩn bị tên lửa SAM trước trận đánh.",
  },
];

export default function MemorialPage() {
  return (
    <div className="fullscreen-container">
      <div className="content">
        <h1 style={{margin: "0"}}>Trang tưởng niệm</h1>
        <p>Danh sách những người anh hùng đã hy sinh vì Hà Nội.</p>

        <ul
          style={{
            width: "80%",
            margin: "auto",
            listStyleType: "none",
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {heroes.map((hero, index) => (
            <li
              key={index}
              style={{
                width: "48%", // Mỗi cột chiếm 48% để có khoảng cách
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              <strong>{hero.name}</strong> - {hero.role} <br />
              <i>{hero.sacrifice}</i>
            </li>
          ))}
        </ul>

        <h2>Hình ảnh lịch sử</h2>
        <div className="image-gallery">
          {historicalImages.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.src} alt={image.alt} />
              <p>{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
