import { useState } from 'react'

export default function ChatContent() {
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
    <div className="chat-content">
      <div className="chat-content-header">
        <h2>会话内容</h2>
      </div>
      {messages.map((message, index) => (
        <div key={index}>
          {message.role === 'user' ? '用户' : '助手'}
          {message.content}
        </div>
      ))}
    </div>
  )
}

