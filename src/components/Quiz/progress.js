import './progress.css';
import {FaLongArrowAltLeft,FaLongArrowAltRight} from 'react-icons/fa';

export default function Progress() {
  return (
    <div className="progress">
      <div className="buttons">
        <FaLongArrowAltLeft className="icon"/>
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
      <div className="buttons">
        <p>Next</p>&nbsp;&nbsp;
        <FaLongArrowAltRight className="icon"/>
      </div>
    </div>
  );
}