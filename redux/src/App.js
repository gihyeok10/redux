import { useState } from 'react';
import './App.css';
//redux : 상태관리가 가능한 라이버러리 // 저장소.
//useDispatch ==> 컴포넌트가 던지는 액션
//useSelector ==> 컴포넌트 store에 있는 값을 가져와서 쓸때 사용. 
function App() {
  const [counter,setCounter] =useState(0);
  const increase = () => {
    setCounter(counter+1)
  }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
