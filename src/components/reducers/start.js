export default startReducer;

function startReducer(state = false, action) {
  switch (action.type) {
    case 'START':
      return true;
    
    case 'STOP':
      return false;
      
    default:
      return state;
  }
}