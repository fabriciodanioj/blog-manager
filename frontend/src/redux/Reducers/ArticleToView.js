export default function Article(state = null, action) {
  switch (action.type) {
    case "SHOW":
      return action.id;
    default:
      return state;
  }
}
