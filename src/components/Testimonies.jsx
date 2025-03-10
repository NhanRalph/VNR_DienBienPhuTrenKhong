import { useState } from "react";

const testimonies = [
    {
      id: 1,
      name: "Phạm Tuân",
      role: "Trung tướng - Phi công thuộc Trung đoàn Không quân 921, người đầu tiên bắn rơi máy bay B-52 của Mỹ trong chiến dịch.",
      testimony: "Tôi không thể nào quên ngày 19-7-1965, khi đến thăm Trung đoàn 324 bộ đội phòng không - không quân, Bác Hồ nói: 'Dù đế quốc Mỹ lắm súng, nhiều tiền; dù chúng có B57, B52 hay 'bê' gì đi nữa, ta cũng đánh. Từng ấy máy bay, từng ấy quân Mỹ, chứ nhiều hơn nữa, ta cũng đánh. Mà đã đánh là nhất định thắng'.",
    },
    {
      id: 2,
      name: "Nghiêm Đình Tích",
      role: "Đại tá - Anh hùng Lực lượng Vũ trang Nhân dân, nguyên Đài trưởng P-35, Đại đội 45, Trung đoàn 291, Sư đoàn 365, Quân chủng Phòng không-Không quân.",
      testimony: "Tôi vô cùng tự hào trước thắng lợi của Chiến dịch 'Hà Nội-Điện Biên Phủ trên không' vĩ đại của quân và dân Thủ đô cũng như cả dân tộc, trong đó lực lượng Phòng không-Không quân là nòng cốt.",
    },
    {
      id: 3,
      name: "Võ Nguyên Giáp",
      role: "Đại tướng - Tổng Tư lệnh Quân đội Nhân dân Việt Nam, người đã chỉ đạo chiến dịch.",
      testimony: "Chúng tôi đã cất cánh và đối đầu với B-52 ngay trên bầu trời Hà Nội, một nhiệm vụ đầy cam go.",
    },
    {
      id: 4,
      name: "Nguyễn Văn Phiệt",
      role: "Đại tá - Nguyên Trung đoàn trưởng Trung đoàn Tên lửa 257, Quân chủng Phòng không - Không quân.",
      testimony: "Đêm 27/12/1972, chúng tôi bắn rơi tại chỗ một chiếc B-52, đó là một niềm vui lớn lao không thể tả xiết.",
    },
    {
      id: 5,
      name: "Phạm Tuyên",
      role: "Nhạc sĩ - Tác giả ca khúc 'Hà Nội - Điện Biên Phủ trên không'.",
      testimony: "Tôi đã sáng tác bài hát ngay trong những ngày chiến dịch, với niềm tự hào về chiến thắng vĩ đại này.",
    },
    {
      id: 6,
      name: "Nguyễn Xuân Mậu",
      role: "Nhà báo - Nguyên phóng viên chiến trường của Báo Nhân Dân.",
      testimony: "Từng viên đạn phòng không vẽ lên bầu trời những vòng lửa đỏ, một cảnh tượng hùng vĩ và bi tráng.",
    },
    {
      id: 7,
      name: "Nguyễn Văn Nhạ",
      role: "Trung tá - Nguyên sĩ quan điều khiển tác chiến tại Sở chỉ huy Quân chủng Phòng không - Không quân.",
      testimony: "Mỗi đêm chiến đấu là một thử thách, nhưng chúng tôi luôn vững tin vào chiến thắng của dân tộc.",
    },
    {
      id: 8,
      name: "Trần Hanh",
      role: "Thượng tướng - Nguyên Tư lệnh Quân chủng Không quân Việt Nam.",
      testimony: "Không có chiến công nào mà không phải đánh đổi bằng máu và nước mắt, nhưng đó là sự hy sinh xứng đáng.",
    },
    {
      id: 9,
      name: "Nguyễn Thế Lục",
      role: "Cựu dân quân tự vệ Hà Nội.",
      testimony: "Khi còi báo động vang lên, chúng tôi lập tức vào vị trí chiến đấu, quyết tâm bảo vệ thành phố.",
    },
    {
      id: 10,
      name: "Thomas Eugene Wilber",
      role: "Con trai một phi công Mỹ từng bị giam tại Nhà tù Hỏa Lò.",
      testimony: "Những câu chuyện về sự đối xử nhân đạo của người Việt Nam đã giúp hàn gắn vết thương chiến tranh.",
    }
  ];  

export default function Testimonies() {
  const [index, setIndex] = useState(0);

  const nextTestimony = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  const prevTestimony = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center", padding: "20px" }}>
      <h1 style={{marginTop: "0"}}>📜 Lời chứng</h1>
      <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px", background: "#f9f9f9", color: "#333" }}>
        <h3 style={{color: "#CC0000", fontSize: "30px"}}>{testimonies[index].name}</h3>
        <p><strong>{testimonies[index].role}</strong></p>
        <p>"{testimonies[index].testimony}"</p>
      </div>
      <button onClick={prevTestimony} style={{ margin: "10px" }}>⬅️ Trước</button>
      <button onClick={nextTestimony} style={{ margin: "10px" }}>Tiếp ➡️</button>
    </div>
  );
}
