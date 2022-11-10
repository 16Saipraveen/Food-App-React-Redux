import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Modal component", () => {
  beforeAll(() => {
    createPortal = jest.fn((element, node) => {
      return element;
    });
  });
  test("Modal component renders correctly", () => {
    const component = render.create(<Modal>Hello World!</Modal>);
    const fn = jest.fn();
    const { getByText, getByTestId } = render(
      <Modal onClose={fn}>
        <div>TestModal</div>
      </Modal>
    );
    // const backdrop = getByTestId("backdrop");
    // expect(backdrop).toBeInTheDocument();
    // fireEvent.click(backdrop);
    // expect(fn).toBeCalledTimes(1);
    // const modal = getByTestId("modal-overlay");
    // expect(modal).toBeInTheDocument();
    expect(getByText("TestModal")).toBeTruthy();
  });
});
