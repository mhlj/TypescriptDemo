import { useState } from 'react'


export default function ChatList() {
  const [messages, setMessages] = useState([
    {
      role: 'user',
      content: '你好'
    },
    {
      role: 'assistant',
      content: '你好！有什么我可以帮助你的吗？'
    }
  ])
  return (
    <div className="chat-list">
      <div className="chat-list-header">
        <h2>会话列表</h2>
      </div>
      {messages.map((message, index) => (
        <div key={index}>
          {message.content}
        </div>
      ))}
    </div>
  )
}