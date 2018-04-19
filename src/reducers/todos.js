const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        color: action.color,
        completed: false
      };
    case 'CHANGE_COLOR':
        return {
            id: state.id,
            text: state.text,
            color: state.color,
            completed: state.completed
        };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state
  }
};

const todos = (state = [], action) => {
  console.log("state todos - ", state);
  console.log("action - ", action);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'CHANGE_COLOR':
        return state.map(t =>
            todo(t, action)
        );
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state
  }
};

export default todos