import './quiz.css';
import data from '../data.json';
import TopRow from './topRow';
import Progress from './progress';
import Question from './question';
import Statistics from './statistics';

import {useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {initAnswers,initCounter,elapse,initCurrentQuestion,setIntervalId} from '../actions';

export default function Quiz() {
  const {answers,currentQuestion} = useSelector(state=>state);
  const dispatch = useDispatch();
  
  const [submitted,setSubmitted] = useState(false);
  
  useEffect(()=>{
    dispatch(initAnswers(data.length));
    dispatch(initCounter(data.length));
    dispatch(initCurrentQuestion());
    let id = setInterval(()=>dispatch(elapse()),1000);
    dispatch(setIntervalId(id));
    return ()=>{
      clearInterval(id);
    }
    // eslint-disable-next-line
  },[]);
  
  return (
    <div className="quiz">
      {
        submitted?
        <Statistics data={data}/>:
        <>
        <TopRow setSubmitted={setSubmitted} />
        <Question {...data[currentQuestion]} selected={answers[currentQuestion]} id={currentQuestion}/>
        <Progress total={data.length} setSubmitted={setSubmitted}/>
        </>
      }
    </div>
  );
}