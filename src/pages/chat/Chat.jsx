import React from 'react'
import './chat.scss'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const Chat = () => {

  const { signOut } = useAuth()
  const history = useHistory()

  const handleDisconnect = async e => {
    e.preventDefault()
      try {
        await signOut()
        history.push('/signin')
      } catch {

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
      <button onClick={handleDisconnect}>sign out</button>

    </>
  )
}
export default Chat