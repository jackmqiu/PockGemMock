import { combineReducers } from 'redux';
import Legendary1Reducer from './reducer_Legendary1_28_rewards';
import Legendary2Reducer from './reducer_Legendary2_40_rewards';
import Legendary3Reducer from './reducer_Legendary3_40_rewards';
import DiscountReducer from './reducer_Discount_28_rewards';
import SeasonObjectReducer from './reducer_season_branches';
import ActiveBranchReducer from './reducer_active_branch';

const rootReducer = combineReducers({
  activeBranch: ActiveBranchReducer,
  seasonObject: SeasonObjectReducer,
  legendary1: Legendary1Reducer,
  legendary2: Legendary2Reducer,
  legendary3: Legendary3Reducer,
  discount: DiscountReducer,
})

export default rootReducer;
