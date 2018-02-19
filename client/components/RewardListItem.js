import React, {Component} from "react";
import styles from "../style/RewardListItem.scss";

import { connect } from 'react-redux';
import { toggleModal } from "../actions/index";
import { bindActionCreators } from "redux";

class RewardListItem extends Component {
  constructor(props) {
    super(props);
  }
  handleRewardClick(reward) {
    this.props.toggleModal(reward.description);
  }
  render() {
    const defaultImgUrl = "https://www.deckshop.pro/img/card/InfernoD.png";
    return (
      <div onClick={() => this.handleRewardClick(this.props.reward)}>
        <figure>
          <img className={styles.reward_image} src={this.props.reward.imageUrl || defaultImgUrl} />
        </figure>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleModal: toggleModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RewardListItem);
