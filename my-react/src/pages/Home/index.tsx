import './index.css'
import ChatList from './components/ChatList'
import ChatContent from './components/ChatContent'
import ChatInput from './components/ChatInput'

function Home() {

  return (
    <div id="home" className="home">
      {/* 左侧会话功能区 */}
      <div id="chat-list" className="chat-list">
        <ChatList />
      </div>  
      {/* 中间会话内容区 */}
      <div id="chat-content" className="chat-content">
        <ChatContent />
        <ChatInput />
      </div>
    </div>
     
  )
}

export default Home
