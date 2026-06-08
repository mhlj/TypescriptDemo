import { Link } from 'react-router-dom'

function NotFound() {


  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404</h1>
      <p>页面未找到</p>
      <Link to="/" style={{ color: '#646cff' }}>
        返回首页
      </Link>
    </div>
  )
}

export default NotFound
