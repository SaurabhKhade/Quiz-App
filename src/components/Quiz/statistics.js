import './statistics.css';
import {useSelector} from 'react-redux';

export default function Stats({data}) {
  const {answers} = useSelector(state=>state);
  let correct=0, incorrect=0, unattempt=0,total=data.length;
  
  for(let i=0; i<data.length; i++) {
    console.log(answers[i],data[i].answer)
    if (answers[i]===null) unattempt++;
    else if (answers[i]===data[i].answer) correct++;
    else incorrect++;
  }
  
  let correctDeg = correct/total*360;
  let incorrectDeg = incorrect/total*360 + correctDeg;
  let unattemptDeg = unattempt/total*360 + incorrectDeg;
  
  const style = {
    "--correct": `${correctDeg}deg`,
    "--incorrect": `${incorrectDeg}deg`,
    "--unattempt": `${unattemptDeg}deg`
  }
  
  console.log(style)
  
  return (
    <div className="statistics" style={style}>
      <h1>Statistics</h1>
      <div className="summary">
        <p className="success"><strong>Correct: {correct}</strong></p>
        <p className="danger"><strong>Incorrect: {incorrect}</strong></p>
        <p className="warn"><strong>Unattempted: {unattempt}</strong></p>
      </div>
      <div className="pie-wrapper">
        <div className="pie"></div>
      </div>
    </div>
  );
}