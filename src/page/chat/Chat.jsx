import React, {useEffect} from 'react';
import './chat.scss'
import firebase from '../../config/firebase.config';
const Chat = () => {
  const auth = firebase.auth()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(`${user.uid} is connected`);
      } else {
        console.log('no user connected yet');
      }
    })
  })

  return (
    <>
      <div className="chat-list">
        les conversations
      </div>
      <div className="chat-messages">
        les messages
      </div>
    </>
  )
}
export default Chat