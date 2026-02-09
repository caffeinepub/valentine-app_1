import { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  type: 'bot' | 'user';
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ text: 'Hey… I have something to tell you 💭', type: 'bot' }]);
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleReply = (replyType: 'miss' | 'love' | 'date') => {
    if (replyType === 'miss') {
      setMessages((prev) => [...prev, { text: 'I miss you 🥺', type: 'user' }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: 'I know… and honestly, that makes my heart feel warm 💞', type: 'bot' }
        ]);
      }, 700);
    }

    if (replyType === 'love') {
      setMessages((prev) => [...prev, { text: 'I love you 💕', type: 'user' }]);
      setTimeout(() => {
        const botMessage = { text: "That's my favorite sentence ever 🥹💖", type: 'bot' as const };
        setMessages((prev) => [...prev, botMessage]);
      }, 700);
    }

    if (replyType === 'date') {
      setMessages((prev) => [...prev, { text: 'Will you be my Valentine? 💌', type: 'user' }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: 'I was waiting for you to ask… yes 💘 always yes.', type: 'bot' }
        ]);
      }, 700);
    }
  };

  return (
    <div className="valentine-container">
      <div className="valentine-app">
        <div className="valentine-header">💘 Valentine App</div>

        <div className="valentine-chat" ref={chatRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`valentine-msg ${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="valentine-actions">
          <button onClick={() => handleReply('miss')}>I miss you 🥺</button>
          <button onClick={() => handleReply('love')}>I love you 💕</button>
          <button onClick={() => handleReply('date')}>Driti Will you be my Valentine? 💌</button>
        </div>
      </div>

      <footer className="valentine-footer">
        © 2026. Built with 💖 using{' '}
        <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer">
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

export default App;
