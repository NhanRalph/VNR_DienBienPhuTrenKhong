import { useState } from "react";

const questions = [
  { question: "Chiến dịch Điện Biên Phủ trên không diễn ra vào năm nào?", answer: "1972" },
  { question: "Loại máy bay nào bị bắn hạ nhiều nhất?", answer: "B-52" },
  { question: "Chiến dịch này kéo dài trong bao nhiêu ngày?", answer: "12" },
  { question: "Ai là Tổng tư lệnh chỉ huy chiến dịch?", answer: "Võ Nguyên Giáp" },
  { question: "Tên lửa nào được sử dụng để bắn hạ B-52?", answer: "SAM-2" },
  { question: "Trận đánh này diễn ra chủ yếu tại thành phố nào?", answer: "Hà Nội" },
  { question: "Nước nào là đối thủ chính của Việt Nam trong trận đánh này?", answer: "Mỹ" },
  { question: "Ngày nào đánh dấu chiến thắng của chiến dịch?", answer: "29/12/1972" },
  { question: "Hệ thống phòng không của Việt Nam do ai chỉ huy?", answer: "Lê Văn Tri" },
  { question: "Bao nhiêu chiếc B-52 đã bị bắn hạ?", answer: "34" },
  { question: "Nhạc sĩ nào sáng tác bài hát về chiến thắng này?", answer: "Phạm Tuyên" },
  { question: "Chiến dịch này còn được gọi là gì?", answer: "Điện Biên Phủ trên không" },
  { question: "Nhà tù nào giam giữ phi công Mỹ bị bắt?", answer: "Hỏa Lò" },
  { question: "B-52 chủ yếu bị bắn rơi bằng vũ khí nào?", answer: "Tên lửa" },
  { question: "Ai là phi công Việt Nam bắn rơi B-52?", answer: "Phạm Tuân" },
  { question: "Loại máy bay hộ tống B-52 trong trận đánh?", answer: "F-4 Phantom" },
  { question: "Mỹ đã thả bao nhiêu tấn bom xuống Hà Nội?", answer: "36.000" },
  { question: "Ai là Tổng thống Mỹ thời điểm đó?", answer: "Richard Nixon" },
  { question: "Sư đoàn phòng không chủ lực bảo vệ Hà Nội?", answer: "361" },
  { question: "Tên lửa SAM-2 có tầm bắn tối đa bao nhiêu km?", answer: "34" },
];

export default function Quiz() {
  const getRandomQuestionIndex = () => Math.floor(Math.random() * questions.length);

  const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestionIndex());
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const checkAnswer = () => {
    if (input.trim().toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setMessage("✅ Đúng!");
      setWrongAttempts(0);
      setTimeout(() => {
        setMessage("");
        setCurrentQuestion(getRandomQuestionIndex());
        setInput("");
        setShowAnswer(false);
      }, 1500);
    } else {
      setWrongAttempts(wrongAttempts + 1);
      setMessage(`❌ Sai! Bạn còn ${3 - wrongAttempts - 1} lần thử.`);
    }
  };

  const revealAnswer = () => {
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    setCurrentQuestion(getRandomQuestionIndex());
    setInput("");
    setMessage("");
    setWrongAttempts(0);
    setShowAnswer(false);
  };

  return (
    <div style={{textAlign: "center", paddingBottom: "20px" }}>
      <h3>--------------------------------------</h3>
      <h2>{questions[currentQuestion].question}</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "5px", fontSize: "16px" }}
      />
      <button onClick={checkAnswer} style={{ marginLeft: "10px", padding: "5px 10px", fontSize: "16px" }}>
        Kiểm tra
      </button>
      <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>{message}</p>

      {wrongAttempts >= 3 && (
        <div>
          <button onClick={revealAnswer} style={{ margin: "10px", padding: "5px 15px", fontSize: "16px" }}>
            Hiện đáp án
          </button>
          <button onClick={nextQuestion} style={{ margin: "10px", padding: "5px 15px", fontSize: "16px" }}>
            Chuyển câu hỏi
          </button>
        </div>
      )}

      {showAnswer && <p style={{ textAlign: 'center', fontSize: "20px", fontWeight: "bold"}}>Đáp án: {questions[currentQuestion].answer}</p>}
    </div>
  );
}
