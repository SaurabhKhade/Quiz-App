export default currentQuestionReducer;

function currentQuestionReducer(state = 0, action) {
  switch (action.type) {
    case 'INITCURRENT':
      return init();
      
    case 'NEXT':
      return next(action.type.last,state);
      
    case 'PREV':
      return prev(state);

    case 'RESETCURRENT':
      return resetCurrent();
      
    default:
      return state;
  }
}

function next(last,state) {
  let update = state===last?state:state+1;
  sessionStorage.setItem('currentQuestion',update.toString());
  return update;
}

function prev(state) {
  let update = state===0?state:state-1;
  sessionStorage.setItem('currentQuestion',update.toString());
  return update;
}

function init() {
  let current = sessionStorage.getItem('currentQuestion');
  if (current) {
    return parseInt(current);
  } else {
    sessionStorage.setItem('currentQuestion','0');
    return 0;
  }
}

function resetCurrent() {
  sessionStorage.setItem('currentQuestion','0');
  return 0;
}