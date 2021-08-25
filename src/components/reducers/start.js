export default startReducer;

function startReducer(state = false, action) {
  switch (action.type) {
    case 'INITISSTART':
      return init()
    
    case 'START':
      return start();
    
    case 'STOP':
      return stop();
      
    default:
      return state;
  }
}

function init() {
  let saved = sessionStorage.getItem('quiz started');
  if(saved) {
    return saved==='true'?true:false;
  }
  return false;
}

function start() {
  sessionStorage.setItem('quiz started','true');
  return true;
}

function stop() {
  sessionStorage.setItem('quiz started','false');
  return false;
}