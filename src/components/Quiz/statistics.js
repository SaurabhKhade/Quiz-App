import './statistics.css';
import {useSelector,useDispatch} from 'react-redux';
import {resetCounter,resetAnswers,stop,resetCurrent} from '../actions';

export default function Stats({data}) {
  const {answers} = useSelector(state=>state);
  let correct=0, incorrect=0, unattempt=0,total=data.length;
  const dispatch = useDispatch();

  for(let i=0; i<data.length; i++) {
    if (answers[i]===null) unattempt++;
    else if (answers[i]===data[i].answer) correct++;
    else incorrect++;
  }
  
  let correctDeg = correct/total*360;
  let incorrectDeg = incorrect/total*360 + correctDeg;
  
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
      <div className="summary">
        <p className="success"><strong>Correct: {correct}</strong></p>
        <p className="danger"><strong>Incorrect: {incorrect}</strong></p>
        <p className="warn"><strong>Unattempted: {unattempt}</strong></p>
      </div>
      <div className="pie-wrapper">
        <div className="pie" style={style}></div>
      </div>

      <button onClick={resetAll}>Close</button>
    </div>
  );
}