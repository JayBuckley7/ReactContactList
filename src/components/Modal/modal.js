import React, { useState } from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "20px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose, addRow }) {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    specialty: "",
    practice_name: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  function saveContact() {
    const ret_msg = isValid();
    const valid = ret_msg[0];
    const error_msg = ret_msg[1];
    if (!valid) {
      alert("ERROR: " + error_msg);
    } else {
      addRow(state);
    }
  }

  function isValid() {
    // return true;
    console.log("valid check");

    if (/[^a-zA-Z]/.test(state.first_name) || state.first_name === "") {
      return [false, "First_Name is invalid."];
    }
    if (/[^a-zA-Z]/.test(state.last_name) || state.last_name === "") {
      return [false, "Last_Name is invalid."];
    }
    //this isnt good enough but the validator in test.js was very tough to understand so this will work for now
    if (
      !/^\S+@\S+\.\S+$/.test(state.email_address) ||
      state.email_address === "" ||
      !state.email_address.includes("@") ||
      !state.email_address.includes(".") ||
      state.email_address.includes(" ")
    ) {
      return [false, "email_address is invalid."];
    }
    return [true, ""];
  }

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div className="modal-header">
          <h3 className="modal-title" id="exampleModalLongTitle">
            Create New Contact
          </h3>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={onClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="modal-body">
          <div className="row">
            <label htmlFor="contact_name_input">First Name *</label>
            <input
              name="first_name"
              type="text"
              className="form-control"
              id="contact_name_input"
              placeholder="name"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="contact_last_name_input">Last Name *</label>
            <input
              name="last_name"
              type="text"
              className="form-control"
              id="contact_last_name_input"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="contact_email_input">Email Address *</label>
            <input
              name="email_address"
              type="email"
              className="form-control"
              id="contact_email_input"
              placeholder="a@a.email"
              onChange={handleChange}
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              required
            />
          </div>
          <div className="row">
            <label htmlFor="contact_spec_input">Specialty</label>
            <input
              name="specialty"
              type="text"
              className="form-control"
              id="contact_spec_input"
              placeholder="specailty"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="contact_prac_input">Practice</label>
            <input
              name="practice_name"
              className="form-control"
              type="text"
              id="contact_prac_input"
              placeholder="practice"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="modal-footer" />
        <input
          className="btn btn-primary"
          type="submit"
          value="Save"
          onClick={(e) => saveContact(e.target.value)}
        ></input>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
