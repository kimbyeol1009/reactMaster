import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [글제목,글제목변경]=useState('여자 코트 추천');
  const [content, setContent] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let[like, likes]=useState([0,0,0]);
  let [num, nums] = useState(0);

  let [modal, setModal] = useState('false');

  let [입력값, 입력값변경] = useState('');
  
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
              <button onClick={()=>{
                setContent(content.filter((_,index) => index !== i))
                // likes(like.filter((_,index)=>index!==i))
                let copy = [...like];
                copy.splice(i,1);
                글제목변경(copy);
              }}>삭제</button>
          
            </div>
          )
        })
      }
      <input onChange={
      (e)=>{입력값변경(e.target.value);
      }}></input>
      
      <button onClick={()=>{
        setContent([입력값].concat(content));
        likes([0, ...like]);
        입력값변경('');
        
        }}>글발행</button>
      {
        modal == true ? <Modal content={content} 글제목={글제목} setContent={setContent} num={num}/> : null
      }
      {/* <Modal2></Modal2> */}
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

//아래는 class 컴포넌트 생성 방법입니다. 옛 틀 react 문법이지요.
// class Modal2 extends React.Component {
//   constructor(){
//     super();
//     this.state = { 
//       name : '김별',
//       age : 20
//      }
//   }
//   render(){
//     return(
//       <div>안녕{this.state.age}
//       <button onClick = {()=>{
//         this.setState({age : 21})
//       }}>버튼</button>
      
//       </div>
      
//     )
//   }
// }
export default App
