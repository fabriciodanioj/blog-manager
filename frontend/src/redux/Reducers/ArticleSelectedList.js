export default function Article(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CHECKBOX_LIST":
      return [...state, action.id];
    default:
      return state;
  }
}
