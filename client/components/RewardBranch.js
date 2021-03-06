import React, {Component} from "react";
import styles from "../style/RewardBranch.scss";
import buttonStyles from "../style/Buttons.scss";
import { connect } from 'react-redux';
import { toggleModal } from "../actions/index";
import { bindActionCreators } from "redux";


class RewardCategory extends Component {
  constructor(props) {
    super(props);
  }
  handleInfoClick(branch) {
    this.props.toggleModal(branch.unlockCriteria);
  }
  render(){

    return (
      <figure className={styles.branch_figure}>
        {this.props.branch.lockStatus &&
          <div id="OverlayModal" className={styles.branch_modal}></div>
        }
        {this.props.branch.discountPercentage &&
          <div className={styles.branch_discount_modal}>{this.props.branch.discountPercentage}% </div>
        }
        <img className={styles.branch__image} src={this.props.branch.imageUrl} />
        <div className={styles.reward__branch_heading}>{this.props.branch.title}</div>
        {this.props.branch.lockStatus &&
          <button
            className={styles.info_button}
            onClick={() => this.handleInfoClick(this.props.branch)}
          >
            Info
          </button>
        }
      </figure>
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

export default connect(mapStateToProps, mapDispatchToProps)(RewardCategory);
