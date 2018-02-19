import { combineReducers } from 'redux';
import Legendary1Reducer from './reducer_Legendary1_28_rewards';
import Legendary2Reducer from './reducer_Legendary2_40_rewards';
import Legendary3Reducer from './reducer_Legendary3_40_rewards';
import DiscountReducer from './reducer_Discount_28_rewards';

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
})

export default rootReducer;
