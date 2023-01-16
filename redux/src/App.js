import { useDispatch,useSelector } from 'react-redux';
import './App.css';
//redux : 상태관리가 가능한 라이버러리 // 저장소.
//useDispatch ==> 컴포넌트가 던지는 액션
//useSelector ==> 컴포넌트 store에 있는 값을 가져와서 쓸때 사용. 
function App() {
  const counter = useSelector(state => state.counter)
  const disPatch = useDispatch()
  const increase = () => {
    disPatch({type:"INCREMENT"}) //무조건 객체 안에 type == 액션의 이름
  }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
