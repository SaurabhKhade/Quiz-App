import './topRow.css';
import {useSelector,useDispatch} from 'react-redux';
import {resetCounter,resetAnswers,stop,resetCurrent} from '../actions';

export default function Row({setSubmitted}) {
  const counter = useSelector(state=>state.counter);
  const intervalId = useSelector(state=>state.intervalId);
  const dispatch = useDispatch();

  let min = Math.floor(counter/60);
  let sec = counter%60;

  function stopAll() {
    dispatch(resetCounter());
    dispatch(resetAnswers());
    dispatch(resetCurrent());
    dispatch(stop());
    clearInterval(intervalId);
  }

  if(counter<0) {
    alert("Time Over! Quiz will be submitted automatically.");
    clearInterval(intervalId);
    setSubmitted(true);
  }
  
  return (
    <div className="top-row">
      <p>Brand</p>
      <p>Quiz App</p>
      <button onClick={stopAll}>Stop the Quiz</button>
      <div className="timer">
        <p>{min}:{sec<10?'0':''}{sec}</p>
      </div>
    </div>
  );
}