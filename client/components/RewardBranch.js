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
    this.props.toggleModal(branch);
  }
  render(){
    const imageUrl = this.props.branch.imageUrl;
    let modalBranch = this.props.branch;
    console.log(modalBranch);
    return (
      <div>
      <div className={styles.reward__branch_slot}>
      <figure>
      <img className={styles.branch_image} src={this.props.branch.imageUrl} />
      </figure>
      <div className={styles.reward__branch_heading}>{this.props.branch.title}</div>
      {this.props.branch.lockStatus &&
        <button
        className={buttonStyles.lock_button}
        onClick={() => this.handleInfoClick(this.props.branch)}
        >
        Info
        </button>
      }
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RewardCategory);
