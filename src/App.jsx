import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let [글제목,b]=useState('여자 코트 추천');
  let[content, setContent] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let[like, likes]=useState(0);
  return (
    <div>
      <div className="black-nav">
        <h4>reactLogo</h4>
      </div>
    <div className="list">
      <h4>{content[0]}<span onClick={()=>{likes(like+1)}}>❤️</span> {like} </h4>
      <p>2월 17일 발행</p>
    </div>
    <div className="list">
      <h4>{content[1]}</h4>
      <p>2월 17일 발행</p>
    </div>
    <div className="list">
      <h4>{content[2]}</h4>
      <p>2월 17일 발행</p>
    </div>
  </div>
  )
}
export default App
