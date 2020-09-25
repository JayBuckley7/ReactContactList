import React, { useState } from "react";
import Modal from "../../components/Modal/modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

export default class App extends React.Component {
  state = {
    open: false,
  };
  render() {
    return (
      <>
        <div style={BUTTON_WRAPPER_STYLES}>
          <button onClick={() => this.setState({ open: true })}>
            Add Contact
          </button>
          <Modal
            open={this.state.open}
            addRow={this.props.addRow}
            onClose={() => this.setState({ open: false })}
          />
        </div>
      </>
    );
  }
}
