import React, { useState } from 'react';
import el1 from './../img/el1.svg';
import el2 from './../img/el2.svg';
import Mask from './../img/Mask.svg';
import tg from './../img/tg.svg';
import { Link } from 'react-router-dom';
import './style.css';

const serverRequest = async (message) => {
  try {
    const req = await fetch('https://8867-2-133-130-122.ngrok-free.app/api/gpt3', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    });

    if (!req.ok) {
      throw new Error(`HTTP error! Status: ${req.status}`);
    }

    const res = await req.json();
    return res;
  } catch (error) {
    console.error("Error making server request:", error);
    return { error: "An error occurred during the server request." };
  }
};

const ChatWithChatGPT = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    try {
      const response = await serverRequest(userInput);
      setMessages([...messages, { type: 'user', content: userInput }, { type: 'server', content: response.message }]);
    } catch (error) {
      console.error("Error handling server response:", error);
    }

    setUserInput('');
    
  };

  return (
    <div>
      <header className="header_gpt">
        <div className="wrapper_chat">
          <Link to='/'>
            <img src={Mask} alt="" />
          </Link>

          <div className="info_gpt">
            <h1>Chat with ChatGPT</h1>
          </div>
        </div>
      </header>

      <section className="section_gpt">
        <div className="wrapper_gpt">
            {messages.map((msg, index) => (
              <div key={index} className={`group ${msg.type === 'server' ? 'server-message' : 'user-message'}`}>
                <div className="logo_gpt">
                  <img src={msg.type === 'server' ? el1 : el2} alt="" />
                  <h1>{msg.type === 'server' ? 'ChatGpt' : 'You'}</h1>
                </div>
                <div className="text_gpt">
                  <p>{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer_gpt">
        <div className="footer_mesage">
          <div className="message_gpt">
            <input className='inn'
              type="text"
              placeholder="Your message"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>
          <button onClick={handleSendMessage} className='btn'>
            <img src={tg} alt="Send" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatWithChatGPT;
