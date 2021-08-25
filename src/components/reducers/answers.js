export default answerReducer;

function answerReducer(state = [], action) {
  
  switch (action.type) {
    case 'INITANSWERS':
      return init(action.payload.length);
      
    case 'RESETANSWERS':
      return reset();
      
    case 'SUBMITANSWER':
      return submit(action.payload.id,action.payload.answer,state);
      
    case 'CANCELANSWER':
      return cancel(action.payload.id,state);
      
    default:
      return state;
  }
}

function init(length) {
  let answers = sessionStorage.getItem('answers');
  if (answers) {
    return JSON.parse(answers);
  }
  else {
    answers = new Array(length).fill(null);
    sessionStorage.setItem('answers',JSON.stringify(answers));
    return answers;
  }
}

function reset() {
  sessionStorage.removeItem('answers');
  return [];
}

function submit(id,answer,state) {
  state[id] = answer;
  sessionStorage.setItem('answers',JSON.stringify(state));
  return [...state];
}

function cancel(id,state) {
  state[id] = null;
  sessionStorage.setItem('answers',JSON.stringify(state));
  return [...state];
}