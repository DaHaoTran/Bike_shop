"use client"
import React, { useEffect } from 'react'
import styles from './chat_form.module.css'
import { Input } from 'reactstrap'
import botImage from '../../../public/chat_icon.png'
import Image from 'next/image'
import { animate } from 'animejs'

export default function ChatForm({ isVisible }) {
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

  if(!isVisible) return null;
  return (
    <>
      <div className={styles.chat_form_container} id='chat-form'>
        <div className={styles.chat_form_header}><h3 className='text-center'>CHATBOT</h3></div>
        <div className={styles.chat_form_chat_list}>
          {botChat()}
          {userChat()}
        </div>
        <div className={styles.chat_form_input_container}>
          <Input
            className={styles.chat_form_input_message}
            type='text' 
            placeholder='Chat something....'
            name='input_message'/>
          <button className={styles.chat_form_button_submit}>→</button>
        </div>
      </div>
    </>
  )
}
