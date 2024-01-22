import React from 'react';
import './style.css';
import rec1 from './../img/rec1.svg';
import rec2 from './../img/rec2.svg';
import { Link } from 'react-router-dom';
import ChatGpt from './ChatGpt';
import ChatSanta from './ChatSanta';
const NewChat = () => {
  return (
    <>

           

            <div className="desktop">
                <div className="info">
                    <h1 className="title">Desktop is boring</h1>
                    <p className="text">Open on your mobile!</p>
                </div>
            </div>


  <div className='contn'>
        <div className="Main__header">
          <h1>New chat</h1>
        </div>

        <section className="Chat__GPT__section">
          <Link to='/ChatGpt' className="Chat__GPT__wrapper">
            <img src={rec1} alt="Chat_GPT" />
            <div>
                    <Link to='/ChatGpt'>
                      <p>Chat GPT</p>
                    </Link>
              <Link to='/ChatGpt'><span>Default ChatGPT 3.5 model</span></Link>
            </div>
          </Link>
        </section>

        <section className="Chat__GPT__section">
          <Link to='/ChatSanta' className="Chat__GPT__wrapper">
            <img src={rec2} alt="Santa_GPT" />
            <div>
                    <Link to='/ChatSanta'>
                     <p> ChatSanta</p>
                    </Link>
              <Link to='/ChatSanta'><span>Santa Claus now is available!</span></Link>
            </div>
          </Link>
        </section>


            </div>
        </>
  );
};

export default NewChat;
