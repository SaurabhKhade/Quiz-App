import './home.css';

import {useDispatch} from 'react-redux';
import {start} from '../actions';

export default function Home() {
  const dispatch = useDispatch();
  
  return (
    <div className="home">
      <h3>Welcome to</h3>
      <h1>Sample Quiz</h1>
      <hr />
      <h3>Some important instructions</h3>
      <ol className="list">
        <li>Quiz will be consist of 10 questions</li>
        <li>You will have 5 minutes to submit answers. (30 seconds per question)</li>
        <li>4 marks will be awarded for each correct answer.</li>
        <li>1 mark will be deducted for each incorrect answer.</li>
        <li>No marks will be deducted for unattempted answers.</li>
        <li>You must score atleast 12 marks (30%) to pass the quiz.</li>
      </ol>
      <hr />
      <button className="button" onClick={()=>dispatch(start())}>
        Start Now
      </button>
    </div>
  );
}