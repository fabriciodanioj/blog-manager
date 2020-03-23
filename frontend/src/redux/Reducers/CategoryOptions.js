export default function Categories(state = [], action) {
  switch (action.type) {
    case "SET_CATEGORIES":
      return [
        ...state,
        { value: action.payload._id, label: action.payload.name }
      ];
    default:
      return state;
  }
}
