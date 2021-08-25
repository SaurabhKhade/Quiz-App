import './home.css';

import {useDispatch} from 'react-redux';
import {start} from '../actions';

export default function Home() {
  const dispatch = useDispatch();
  
  return (
    <div className="home">
      <h3>Welcome to</h3>
      <h1>Quiz App</h1>
      <hr />
      <h3>Some important instructions</h3>
      <ol className="list">
        <li>Quiz will be consist of 10 questions</li>
        <li>You will have 5 minutes to submit answers. (30 seconds per question)</li>
        <li>4 marks will be awarded for each correct answer.</li>
        <li>1 mark will be deducted for each incorrect answer.</li>
        <li>No marks will be deducted for unattempted answers.</li>
        <li>You must score atleast 12 marks (30%) to pass the quiz.</li>
        <li>Your Progress will be saved until you stop the quiz by your own or submit the quiz or close the current browser window.</li>
      </ol>
      <hr />
      <button className="button" onClick={()=>dispatch(start())}>
        Start Now
      </button>
    </div>
  );
}