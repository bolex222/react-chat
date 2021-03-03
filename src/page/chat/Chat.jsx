import React, {useEffect} from 'react';
import './chat.scss'
import {auth} from '../../config/firebase.config';
import { useHistory } from 'react-router-dom'

const Chat = () => {
  const history = useHistory()

  const disconnect = async () => {
    try {
      await auth.signOut()
      console.log('diconnected');
    } catch (e) {
      console.log('error :(');
    }
  }

  return (
    <>
      <div className="chat-list">
        les conversations
      </div>
      <div className="chat-messages">
        les messages
      </div>
      <button onClick={disconnect}>sign out</button>

    </>
  )
}
export default Chat