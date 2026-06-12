import { useState } from 'react'


export default function ChatInput() {
  const [input, setInput] = useState('')
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  )
}