export default counterReducer;

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INITCOUNTER':
      return init(action.payload.length);
      
    case 'RESETCOUNTER':
      return reset();
      
    case 'ELAPSE':
      return elapse(state);
      
    default:
      return state;
  }
}

function init(length) {
  let counter = sessionStorage.getItem('counter');
  if (counter) {
    return parseInt(counter);
  }
  else {
    let time = length*30;
    sessionStorage.setItem('counter',time.toString());
    return time;
  }
}

function reset() {
  sessionStorage.removeItem('counter');
  return 0;
}

function elapse(state) {
  sessionStorage.setItem('counter',(state-1).toString());
  return state-1;
}