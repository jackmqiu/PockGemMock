import {Tabs} from '../stateMock.js';

export default function(state = Tabs[2], action) {
  switch (action.type) {
    case "TAB_SELECTED":
      return action.payload;
  }

  return state;
}
