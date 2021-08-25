export default counterReducer;

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INITCOUNTER':
      return action.payload.length*30;
      
    case 'RESETCOUNTER':
      return 0;
      
    case 'ELAPSE':
      return state-1;
      
    default:
      return state;
  }
}