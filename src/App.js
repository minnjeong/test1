import React, { useState } from "react"
import './App.css';

const App = () => {
  const [user, setUsers] = useState([
    // { id: 1, body: '리액트를 배워봅시다' }
  ]);


  const [body, setBody] = useState('');

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  }

  const addUserHandler = () => {
    const newUser = {
      id: user.length + 1,
      body: body
    };
    if (body === '') alert('내용을 추가해주세요')
    setUsers([...user, newUser]);
  };

  return (
    <div className="layout">
      <div 
      className="container">
        <input
        placeholder="todolist를 입력해주세요"
        value={body}
        onChange={bodyChangeHandler}></input>
        <button onClick={addUserHandler}>추가하기</button>
      </div>

      <div className="add">
          <div className="title">
            <span>
              Todo List
            </span>
          </div>

          <div className="lists"> 
            {user
          .map((user)=> {
            return (
              <div className="list">
                {user.body}
              </div>
            )
          })}
          </div>
        
      </div>
    </div>

    
  )

};


export default App;
