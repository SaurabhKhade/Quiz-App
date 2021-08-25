import './topRow.css';
import {useSelector} from 'react-redux';

export default function Row() {
  const counter = useSelector(state=>state.counter);
  
  let min = Math.floor(counter/60);
  let sec = counter%60;
  
  return (
    <div className="top-row">
      <p>Brand</p>
      <p>Sample Quiz</p>
      <button>Stop the Quiz</button>
      <div className="timer">
        <p>{min}:{sec<10?'0':''}{sec}</p>
      </div>
    </div>
  );
}