export default function Article(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CHECKBOX_LIST":
      const condition = state.indexOf(action.id);
      if (condition === -1) {
        return [...state, action.id];
      }

      state.splice(condition);

      return state;
    case "RESET_STATE":
      const amount = state.length;

      state.splice(0, amount);

      return state;
    default:
      return state;
  }
}
