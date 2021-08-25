import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';
import {initIsStarted} from './actions';

import Home from './Home';
import Quiz from './Quiz';

function App() {
  const dispatch = useDispatch()
  const started = useSelector(state=>state.start);
  
  useEffect(()=>{
    dispatch(initIsStarted());
    // eslint-disable-next-line
  },[]);
  
  return started?<Quiz />:<Home />;
}

export default App;