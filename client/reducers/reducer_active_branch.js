export default function(state = null, action) {
  switch (action.type) {
    case "BRANCH_SELECTED":
      return action.payload;
  }

  return state;
}
