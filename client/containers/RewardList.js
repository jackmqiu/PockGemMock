import React, {Component} from "react";
import RewardListItem from "../components/RewardListItem";
import OverlayModal from "../components/OverlayModal";
import styles from "../style/RewardList.scss";
import buttonStyles from "../style/Buttons.scss";
import { browserHistory, Router, Link, withRouter } from 'react-router-3';
import { connect } from 'react-redux';

class RewardList extends Component {
  constructor(props) {
    super(props);
    let rewardPages = this.dividePages(this.props.rewards[this.props.activeBranch.key]);

    this.state = {
      rewardsPages: rewardPages,
      activePage: 1,
    }
  }

  dividePages(rewards) {

    let rewardPagesArr = [];
    if(rewards) {
      for (let i = 0; i < rewards.length / 28; i++) {
        rewardPagesArr.push(rewards.slice(i * 28, i * 28 + 28));
      }
    }
    return rewardPagesArr;
  }

  renderRewards(reward) {
    return (
      <RewardListItem
        onRewardSelect={this.props.onRewardSelect}
        reward={reward}
      />
    );
  }

  nextClickHandler() {
    this.setState((prevState) => {
      return {activePage: prevState.activePage + 1};
    });
  }

  prevClickHandler() {
    this.setState((prevState) => {
      return {activePage: prevState.activePage - 1};
    });
  }

  exitClickHandler() {
    browserHistory.push({
      pathname: `/`,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <OverlayModal/>
        {this.state.activePage < this.state.rewardsPages.length &&
          <button
            className={buttonStyles.next_button}
            onClick={() => this.nextClickHandler()}
          >
            Next
          </button>
        }
        {this.state.activePage > 1 &&
          <button
            className={buttonStyles.next_button}
            onClick={() => this.prevClickHandler()}
          >
            Previous
          </button>
        }
        <button onClick={() => this.exitClickHandler()}> Exit </button>
        <div>Page {this.state.activePage} of {this.state.rewardsPages.length}</div>
        <div className={styles.season_container}>
          {this.state.rewardsPages[this.state.activePage - 1].map(
            (reward) => this.renderRewards(reward)
          )}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    activeBranch: state.activeBranch,
    rewards: state.rewards,
    modalStatus: state.modalStatus,
  }
}

export default connect(mapStateToProps)(RewardList);
