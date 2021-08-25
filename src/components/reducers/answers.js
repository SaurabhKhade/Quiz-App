export default answerReducer;

function answerReducer(state = [], action) {
  switch (action.type) {
    case 'INITANSWERS':
      return new Array(action.payload.length).fill(undefined);
      
    case 'RESETANSWERS':
      return [];
      
    case 'SUBMITANSWER':
      let {answer,id} = action.payload;
      state[id-1] = answer;
      return [...state];
      
    case 'CANCELANSWER':
      id = action.payload.id;
      state[id-1] = undefined;
      return state;
      
    default:
      return state;
  }
}