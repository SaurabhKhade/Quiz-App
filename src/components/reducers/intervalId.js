export default intervalIdReducer;

function intervalIdReducer(state = 0, action) {
  switch (action.type) {
    case 'SETID':
      return action.payload.id;
      
    default:
      return state;
  }
}