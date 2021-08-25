import './question.css';
import {useDispatch} from 'react-redux';
import {submitAnswer} from '../actions';

export default function Question(props) {
  const {id,question,answer,options} = props;
  const dispatch = useDispatch();
  
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
          <p onClick={()=>submit(i)}>
            {i}
          </p>
        );
      })}
      </div>
    </div>
  )
}