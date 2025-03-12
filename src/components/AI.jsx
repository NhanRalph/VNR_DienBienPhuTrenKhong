import React, { useState } from "react";

const ChatWithAI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const API_KEY = "AIzaSyBFE5KLAqjHRa4nRyqWzlTxLEb8LPGHlnI";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const formatText = (text) => {
    return text
      .replace(/\. \*\* (.*?) \*\*/g, ". <br><b>$1</b>")
      .replace(/\*\*\*(.*?)\*\*\*/g, "<i>$1</i></b>")
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.*?)\*/g, "<i>$1</i>")
      .replace(/\* (.*?)/g, "<br/>$1");
  };

  const sendMessage = async (prompt) => {
    if (!prompt.trim()) return;

    const newMessages = [...messages, { sender: "user", text: prompt }];
    setMessages(newMessages);
    setInput("");

    const requestBody = {
      contents: [{ parts: [{ text: prompt }] }],
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error(`Lỗi HTTP: ${response.status}`);

      const data = await response.json();
      const aiResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "AI không thể trả lời ngay bây giờ.";

      setMessages([
        ...newMessages,
        { sender: "ai", text: formatText(aiResponse) },
      ]);
    } catch (error) {
      console.error("Lỗi khi gọi AI:", error);
      setMessages([
        ...newMessages,
        { sender: "ai", text: "Đã xảy ra lỗi, vui lòng thử lại." },
      ]);
    }
  };

  const handleSend = () => sendMessage(input);
  const handleSuggestion = (text) => sendMessage(text);
  const clearHistory = () => setMessages([]);

  return (
    <div className="chat-container">
      <h2>Cùng AI tìm hiểu về "Điện Biên Phủ trên không" nào</h2>
      <div style={{textAlign: "right"}}>
        <button className="clear-btn noW100" onClick={clearHistory}>
            Xóa toàn bộ lịch sử
        </button>
      </div>

      <div className="chat-box">
        {messages.length === 0 && (
            <p>Chào bạn! Hãy nhập câu hỏi để bắt đầu cuộc trò chuyện.</p>
        )}
        {messages.map((msg, index) => (
          <p
            key={index}
            className={msg.sender === "ai" ? "ai-msg" : "user-msg"}
            dangerouslySetInnerHTML={{
              __html:
                msg.sender === "ai" ? `AI: ${msg.text}` : `Bạn: ${msg.text}`,
            }}
          ></p>
        ))}
      </div>

      <div className="input-box">
        <input
          type="text"
          placeholder="Nhập câu hỏi..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="noW100" onClick={handleSend}>Gửi</button>
      </div>

      <div className="suggestions">
        <button
            className="noW100"
          onClick={() =>
            handleSuggestion("Chiến dịch Điện Biên Phủ trên không là gì?")
          }
        >
          Chiến dịch Điện Biên Phủ trên không là gì?
        </button>
        <button
            className="noW100"
          onClick={() =>
            handleSuggestion("Vai trò của Hà Nội trong chiến dịch 12 ngày đêm?")
          }
        >
          Vai trò của Hà Nội trong chiến dịch 12 ngày đêm?
        </button>
        <button
            className="noW100"
          onClick={() =>
            handleSuggestion(
              "Tại sao B-52 thất bại trong chiến dịch Điện Biên Phủ trên không?"
            )
          }
        >
          Tại sao B-52 thất bại trong chiến dịch Điện Biên Phủ trên không?
        </button>
        <button
            className="noW100"
          onClick={() =>
            handleSuggestion(
              "Những trận đánh tiêu biểu trong chiến dịch Điện Biên Phủ trên không?"
            )
          }
        >
          Trận đánh tiêu biểu?
        </button>
        <button
            className="noW100"
          onClick={() =>
            handleSuggestion(
              "Chiến thắng trận Hà Nội 12 ngày đêm, Điện Biên Phủ trên không ảnh hưởng như thế nào đến hòa bình thế giới?"
            )
          }
        >
          Tác động của chiến thắng này đến hòa bình thế giới?
        </button>
      </div>

      <style jsx>{`
        .chat-container {
          margin: 0 auto;
          width: 80%;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.35);
          text-align: center;
          color: white;
        }
        .chat-box {
          height: 300px;
          overflow-y: auto;
          border: 1px solid #ccc;
          padding: 10px;
          background: white;
          color: black;
          border-radius: 8px;
          text-align: left;
        }
        .input-box {
          display: flex;
          margin-top: 10px;
        }
        input {
          flex: 1;
          padding: 0 10px;
          border-radius: 8px;
          border: none;
        }
        button {
          padding: 10px 15px;
          margin: 0;
          margin-left: 8px;
          border: none;
          color: white;
          border-radius: 8px;
          cursor: pointer;
        }
        .suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 10px;
        }
        .suggestions button {
          background: #f1c40f;
          color: black;
          padding: 8px;
          font-size: 14px;
        }
        div .clear-btn {
            text-align: right;
        }
        .clear-btn {
          background: #ff4c4c;
          padding: 8px 12px;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          border: none;
          margin-bottom: 10px;
        }
        .ai-msg {
          color: green;
        }
        .user-msg {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default ChatWithAI;
