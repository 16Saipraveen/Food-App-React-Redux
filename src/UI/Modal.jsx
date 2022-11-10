import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} data-testid='backdrop'></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal} data-testid='modal-overlay'>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
