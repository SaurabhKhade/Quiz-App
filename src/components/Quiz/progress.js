import './progress.css';
import {FaLongArrowAltLeft,FaLongArrowAltRight} from 'react-icons/fa';

export default function Progress() {
  return (
    <div className="progress">
      <FaLongArrowAltLeft className="icon"/>
      <div className="bar-wrapper">
        <div className="bar">
          <div className="strip">
          </div>
          <div className="ball">
          </div>
        </div>
      </div>
      <FaLongArrowAltRight className="icon"/>
    </div>
  );
}