export default function(state = null, action) {
  switch (action.type) {
    case "MODAL_TOGGLED":
      return action.payload;
  }

  return state;
}
