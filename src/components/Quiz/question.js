import './question.css';
import {useDispatch,useSelector} from 'react-redux';
import {submitAnswer,cancelAnswer} from '../actions';

export default function Question(props) {
  const {question,options} = props;
  const dispatch = useDispatch();
  const {answers,currentQuestion:id} = useSelector(state=>state);
  
  const selected = answers[id];

  function submit(ans) {
    dispatch(submitAnswer(id,ans));
  }
  
  return (
    <div className="question-box">
      <div className="question">
        {question}
      </div>
      <div className="options">
      {options.map(i=>{
        return (
          <p key={i} 
            onClick={()=>submit(i)}
            className={selected===i?'selected':''}>
            {i}
          </p>
        );
      })}
      </div>
      {selected?
        <button onClick={()=>dispatch(cancelAnswer(id))}>Clear</button>
        :<></>
      }
    </div>
  )
}