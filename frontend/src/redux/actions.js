export function addToCheckboxList(id) {
  return {
    type: "ADD_TO_CHECKBOX_LIST",
    id
  };
}

export function showView(id) {
  return {
    type: "SHOW",
    id
  };
}

export function resetState() {
  return {
    type: "RESET_STATE"
  };
}
