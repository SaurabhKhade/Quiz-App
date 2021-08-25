export default answerReducer;

function answerReducer(state = [], action) {
  
  switch (action.type) {
    case 'INITANSWERS':
      return new Array(action.payload.length).fill(undefined);
      
    case 'RESETANSWERS':
      return [];
      
    case 'SUBMITANSWER':
      state[action.payload.id-1] = action.payload.answer;
      return [...state];
      
    case 'CANCELANSWER':
      state[action.payload.id-1] = undefined;
      return [...state];
      
    default:
      return state;
  }
}