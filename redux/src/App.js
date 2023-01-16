import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';
//redux : 상태관리가 가능한 라이버러리 // 저장소.
//useDispatch ==> 컴포넌트가 던지는 액션
//useSelector ==> 컴포넌트 store에 있는 값을 가져와서 쓸때 사용. 
function App() {
  let counter = useSelector(state => state.counter)
  let id = useSelector(state => state.id)
  let passworld = useSelector(state => state.passworld)

  const disPatch = useDispatch()
  const increase = () => {
    disPatch({type:"INCREMENT",payload:{num:5}}) //무조건 객체 안에 type == 액션의 이름 ,  payload ==> 함수의 매개변수 느낌/ 필요한 정보 전송
  }

  const login = () => {
    disPatch({type:"LOGIN",payload:{id:"giheyodk",passworld:"1234"}})
  }
  return (
    <div>
        <h1>{id},{passworld}</h1>
        <h1>{counter}</h1>
        <button onClick={increase}>증가</button>
        <button onClick={login}>Login</button>
        <Box/>
    </div>
  );
}

export default App;
