import React from "react";
import styles from "../style/OverlayModal.scss";
import { connect } from 'react-redux';
import { toggleModal } from "../actions/index";
import { bindActionCreators } from "redux";

const OverlayModal = (props) => {
  if (!props.modalStatus) {
    return null;
  }

  return (
    <div id="OverlayModal" className="modal">
      <div className="modal-content">
        <span
          className="close"
          onClick={() => props.toggleModal(null)}
        >&times;</span>
        <p>{props.modalStatus}</p>
      </div>

    </div>
  );
};

function mapStateToProps(state) {
  return {
    modalStatus: state.modalStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleModal: toggleModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OverlayModal);
