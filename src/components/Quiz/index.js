import './quiz.css';
import data from '../data.json';
import TopRow from './topRow';
import Progress from './progress';
import Question from './question';

import {useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {initAnswers,initCounter} from '../actions';

export default function Quiz() {
  const {counter,answers} = useSelector(state=>state);
  const dispatch = useDispatch();
  const [currentQuestion,setCurrentQuestion] = useState(6)
  
  console.log(answers);
  
  useEffect(()=>{
    dispatch(initAnswers(data.length));
    dispatch(initCounter(data.length));
    // eslint-disable-next-line
  },[]);
  
  return (
    <div className="quiz">
      <TopRow />
      <Question {...data[currentQuestion]} selected={answers[currentQuestion]} />
      <Progress />
    </div>
  );
}