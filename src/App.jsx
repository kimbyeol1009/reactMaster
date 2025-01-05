import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [글제목,b]=useState('여자 코트 추천');
  const [content, setContent] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let[like, likes]=useState([0,0,0]);
  let [num, nums] = useState(0);

  let [modal, setModal] = useState('false');
  
  return (
    <div>
      <div className="black-nav">
        <h4>reactLogo</h4>
      </div>

    {/* <div className="list">
      <button onClick={()=>{
        const sortedContent = [...content].sort();
        setContent(sortedContent);
        }}>가나다순정렬</button>

      <button onClick={()=>{
          const updatedContent = [...content];
          updatedContent[0] = '여자 코트 추천';
          setContent(updatedContent);
        }}>button</button>

      <h4>{content[0]}<span onClick={()=>{likes(like+1)}}>❤️</span> {like} </h4>
      <p>2월 17일 발행</p>
    </div>

    <div className="list">
      <h4>{content[1]}</h4>
      <p>2월 17일 발행</p>
    </div>

    <div className="list">
      <h4 onClick={()=>{setModal(!modal)}}>{content[2]}</h4>
      <p>2월 17일 발행</p>
    </div> */
    

    
    }

      
      {
        content.map(function(a, i){
          return(
            <div className='list' key = {i}>
              <h4>{content[i]}<span onClick={()=>{
                const setLike = [...like];
                setLike[i]+=1;
                likes(setLike);
               
              }}>❤️{like[i]}</span></h4>
              <p onClick={()=>{
                setModal(!modal);
                nums(i);
              }}>2월 17일 발행</p>
            </div>
          )
        })
      }
      
      {
        modal == true ? <Modal content={content} 글제목={글제목} setContent={setContent} num={num}/> : null
      }
  </div>
  )
}

function Modal(props){
  return(
    <div className="modal">
      <h4>{props.content[props.num]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let setContent = [...props.content];
        setContent[0] = props.글제목;
        props.setContent(setContent);
        console.log(setContent);
        
      }}>글수정</button>
    </div>
  )
}
export default App
