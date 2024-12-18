import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let [글제목,b]=useState('여자 코트 추천');
let a = '역삼 우동 맛집'
  return (
    <div>
    <div className="black-nav">
      <h4>reactLogo</h4>
    </div>
  <div className="list">
    <h4>글제목</h4>
    <p>2월 17일 발행</p>
  </div>
  </div>
  )
}
export default App
