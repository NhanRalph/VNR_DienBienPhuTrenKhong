import React from "react";

const videos = [
  { id: "t_j0truPdrw", title: "Điện Biên Phủ Trên Không - Tư Liệu Lịch Sử" },
  { id: "EZAb6IBguSc", title: "Chiến Dịch 12 Ngày Đêm - Hủy Diệt B-52" },
  { id: "wL8J9VSIQcc", title: "PHÓNG SỰ TÀI LIỆU: CHIẾN THẮNG HÀ NỘI - ĐIỆN BIÊN PHỦ" },
  { id: "kILCkBij2b8", title: "Pháp Đã ĐẠI BẠI Ở Điện Biên Phủ Như Thế Nào?" },
  { id: "CD8sKixEDsI", title: "Tóm tắt nhanh Chiến Dịch Điện Biên Phủ (1954)" },
];

export default function BattleVideos() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>📽️ Video Tư Liệu: Trận Điện Biên Phủ Trên Không</h2>
      <div style={styles.videoContainer}>
        {videos.map((video, index) => (
          <div key={index} style={styles.videoItem}>
            <h4 style={{ textAlign: "left", height: "48px" }}>{video.title}</h4>
            <iframe
              style={styles.iframe}
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles sử dụng inline CSS
const styles = {
  videoContainer: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    justifyContent: "center",
  },
  videoItem: {
    width: "100%",
    textAlign: "center",
  },
  iframe: {
    width: "100%",
    height: "300px",
    borderRadius: "8px",
  },
};
