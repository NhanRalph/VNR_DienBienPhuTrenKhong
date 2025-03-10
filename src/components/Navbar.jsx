import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Theo dõi kích thước màn hình để cập nhật giao diện responsive
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={styles.navbar}>
      {/* Nút menu trên mobile */}
      {isMobile && (
        <button style={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      )}

      {/* Menu chính */}
      <div
        style={{
          ...styles.navLinks,
          ...(isMobile && mobileStyles.navLinks),
          ...(isMobile && { display: isOpen ? "flex" : "none" }),
        }}
      >
        <Link to="/" onClick={() => setIsOpen(false)} style={styles.link}>
          🏠 Trang chủ
        </Link>
        <Link to="/battle-map" onClick={() => setIsOpen(false)} style={styles.link}>
          🗺️ Bản đồ trận đánh
        </Link>
        <Link to="/testimonies" onClick={() => setIsOpen(false)} style={styles.link}>
          🎙️ Nhân chứng
        </Link>
        <Link to="/memorial" onClick={() => setIsOpen(false)} style={styles.link}>
          🕊️ Tưởng niệm
        </Link>
        <Link to="/interactive" onClick={() => setIsOpen(false)} style={styles.link}>
          🎮 Tương tác
        </Link>
      </div>
    </nav>
  );
}

// **CSS Styles**
const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#222",
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
  },
  navLinks: {
    display: "flex",
    gap: "10px",
    transition: "all 0.3s ease-in-out",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "0.3s",
    ":hover": {
      background: "#444",
    },
  },
  hamburger: {
    width: "60px",
    fontSize: "24px",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "10px",
  },
};

// **Media Query - Responsive cho Mobile**
const mobileStyles = {
  navLinks: {
    flexDirection: "column",
    position: "absolute",
    top: "92px",
    left: "0",
    width: "100%",
    background: "#222",
    padding: "10px 0",
    textAlign: "center",
  },
};

export { styles, mobileStyles };