import React from 'react';
import {Route, IndexRoute} from 'react-router';
import { browserHistory, Router, Link, withRouter } from 'react-router-3';


//component imports
import NavBar from './components/NavBar';
import RewardBranch from './components/RewardBranch';
import RewardList from './components/RewardList';
import RewardListItem from './components/RewardListItem';
import Armoury from './components/Armoury';
import Battle from './components/Battle';
import Prizes_Ranks from './components/Prizes_Ranks';
import Season from './components/Season';
import App from './index.jsx';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="battle/" component={Battle} />
      <Route path="prizes&ranks/" component={Prizes_Ranks} />
      <Route path="rewards/" component={Season}>
        <Route path="/:branchId/rewards/:pg" component={RewardList}/>
      <Route/>//this.props.params.id
      <Route path="armoury/" component={Armoury}/>
    </Route>
  </Router>
)
