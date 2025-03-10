import Quiz from "../components/Quiz";

export default function InteractivePage() {
  return (
    <div className="fullscreen-container">
      <div className="content">
      <h1>🎮 Trải nghiệm tương tác</h1>
      <p>Hãy thử sức với những câu hỏi về chiến dịch "Điện Biên Phủ trên không".</p>
      <Quiz />
    </div>
    </div>
  );
}
