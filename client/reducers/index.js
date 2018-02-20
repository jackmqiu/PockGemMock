import { combineReducers } from 'redux';

import ModalStatusReducer from './reducer_modal_status';
import RewardsReducer from './reducer_Rewards';
import SeasonObjectReducer from './reducer_season_branches';
import ActiveBranchReducer from './reducer_active_branch';
import TabsReducer from './reducer_tabs';
import ActiveTabReducer from './reducer_active_tab';

const rootReducer = combineReducers({
  activeBranch: ActiveBranchReducer,
  seasonObject: SeasonObjectReducer,
  rewards: RewardsReducer,
  tabs: TabsReducer,
  activeTab: ActiveTabReducer,
  modalStatus: ModalStatusReducer,
})

export default rootReducer;
