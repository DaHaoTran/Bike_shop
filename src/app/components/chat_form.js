"use client"
import React, { useCallback, useEffect, useState } from 'react'
import styles from './chat_form.module.css'
import { Input } from 'reactstrap'
import botImage from '../../../public/chat_icon.png'
import Image from 'next/image'
import { animate } from 'animejs'
import { generateChatResponse } from '../methods/chatbot'

export default function ChatForm({ isVisible }) {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputChat, setInputChat] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!isVisible) return
    
    animate('#chat-form', {
      height: {
        from: '0px',
        to: '450px'
      },
      // rotate: '360deg',
      duration: 500,
    });
  }, [isVisible])

  const botChat = (content) => (
    <div className={styles.bot_chat_part_container}>
      <Image 
        src={botImage}
        width={50}
        height={50}
        alt='bot image'
      />
      <div className={styles.bot_chat_part_content}>
          {content == null ? <p className='text-secondary'>Thinking... !</p> : content}
      </div>
    </div> 
  )

  const userChat = (content) => (
    <div className={styles.user_chat_part_container}>
      <div className={styles.user_chat_part_content}>
        {content == null ? 'null' : content.trim()}
      </div>
    </div>
  )

  const onChatEnter = useCallback(() => {
    if(inputChat.length <= 0) return

    setIsGenerating(true);

    const createUser = {role: 'user', content: inputChat.trim()};
    setChatHistory(prev => [...prev, createUser]);

    setInputChat('');

    const createBot = {role: 'bot', content: generateChatResponse(inputChat.trim())}

    setTimeout(() => {
      setIsGenerating(false);

      if(createBot) setChatHistory(prev => [...prev, createBot]) 

      // Scroll to bottom of div
      const chatList = document.querySelector("#chat_history");
      if(!chatList) return
      chatList.scrollTop = chatList.scrollHeight;

    }, 2000);
  }, [inputChat])

  if(!isVisible) return null;
  return (
    <>
      <div className={styles.chat_form_container} id='chat-form'>
        <div className={styles.chat_form_header}><h3 className='text-center'>CHATBOT</h3></div>
        <div className={styles.chat_form_chat_list} id='chat_history'>
          {chatHistory && chatHistory.map((x, index) => (
            <div key={index}>
              {x.role === 'user' ? userChat(x.content) : botChat(x.content)}
            </div>
          ))}
          {isGenerating && botChat(null)}
        </div>
        <div className={styles.chat_form_input_container}>
          <Input
            className={styles.chat_form_input_message}
            type='text' 
            placeholder='Chat something....'
            name='input_message'
            value={inputChat}
            onChange={x => setInputChat(x.target.value)} />
          <button className={styles.chat_form_button_submit} disabled={isGenerating} onClick={x => onChatEnter()}>→</button>
        </div>
      </div>
    </>
  )
}
