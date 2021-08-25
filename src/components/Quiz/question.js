import './question.css';
import {useDispatch} from 'react-redux';
import {submitAnswer,cancelAnswer} from '../actions';

export default function Question(props) {
  const {id,question,answer,options,selected} = props;
  const dispatch = useDispatch();

  console.log(selected);
  
  function submit(ans) {
    console.log(ans);
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