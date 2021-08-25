import './progress.css';
import {FaLongArrowAltLeft,FaLongArrowAltRight} from 'react-icons/fa';
import {AiOutlineUpload} from 'react-icons/ai';

import {useSelector,useDispatch} from 'react-redux';
import {next,prev} from '../actions';

export default function Progress({total,setSubmitted}) {
  const current = useSelector(state=>state.currentQuestion);
  const intervalId = useSelector(state=>state.intervalId);
  const dispatch = useDispatch();
  
  const style = {
    "--progress": `${(current+1)/total*100}%`
  };
  
  const disabled = {
    "opacity": current===0?'.5':'1'
  };
  
  function previous() {
    dispatch(prev());
  }
  function nextQuestion() {
    dispatch(next(total-1));
  }

  function submit() {
    clearInterval(intervalId);
    setSubmitted(true);
  }

  return (
    <div className="progress" style={style}>
      <div className="buttons" style={disabled}>
        <FaLongArrowAltLeft className="icon" onClick={previous}/>
        &nbsp;&nbsp;<p>Previous</p>
      </div>
      <div className="bar-wrapper">
        <div className="bar">
          <div className="strip">
          </div>
          <div className="ball">
          </div>
        </div>
      </div>
      {
        current===(total-1)?
        <div className="buttons">
          <p>Submit</p>&nbsp;&nbsp;
          <AiOutlineUpload className="icon" onClick={submit}/>
        </div>:
        <div className="buttons">
          <p>Next</p>&nbsp;&nbsp;
          <FaLongArrowAltRight className="icon" onClick={nextQuestion}/>
        </div>
      }
      
    </div>
  );
}