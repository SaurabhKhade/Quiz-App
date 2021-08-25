import './App.css';
import {useSelector} from 'react-redux';

import Home from './Home';
import Quiz from './Quiz';

function App() {
  
  const started = useSelector(state=>state.start);
  
  return started?<Quiz />:<Home />;
}

export default App;