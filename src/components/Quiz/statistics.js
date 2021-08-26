import './statistics.css';
import {useSelector,useDispatch} from 'react-redux';
import {resetCounter,resetAnswers,stop,resetCurrent} from '../actions';

export default function Stats({data}) {
  const {answers,counter} = useSelector(state=>state);
  let correct=0, incorrect=0, unattempt=0,total=data.length;
  const dispatch = useDispatch();

  for(let i=0; i<data.length; i++) {
    if (answers[i]===null) unattempt++;
    else if (answers[i]===data[i].answer) correct++;
    else incorrect++;
  }
  
  const score = correct*4 - incorrect;
  
  let correctDeg = correct/total*360;
  let incorrectDeg = incorrect/total*360 + correctDeg;
  
  let timeTaken = data.length*30 - counter;
  let min = Math.floor(timeTaken/60);
  let sec = timeTaken%60;
  
  const style = {
    background: `
      conic-gradient(
        var(--success) 0deg,
        var(--success) ${correctDeg}deg,
        var(--danger) ${correctDeg}deg,
        var(--danger) ${incorrectDeg}deg,
        var(--warn) ${incorrectDeg}deg,
        var(--warn) 360deg
      )
    `
  }
  
  function resetAll() {
    dispatch(resetCounter());
    dispatch(resetAnswers());
    dispatch(resetCurrent());
    dispatch(stop());
  }
  
  return (
    <div className="statistics">
      <h1>Statistics</h1>
      <p>Time Taken:- {min}:{sec}</p>
      <div className="summary">
        <p className="success">Correct: {correct}</p>
        <p className="danger">Incorrect: {incorrect}</p>
        <p className="warn">Unattempted: {unattempt}</p>
        <p className="simple">Score: {score}</p>
      </div>
      <h2>{score>=12?'Passed!!!':'Failed!'}</h2>
      <div className="pie-wrapper">
        <div className="pie" style={style}></div>
      </div>

      <button onClick={resetAll}>Close</button>
    </div>
  );
}