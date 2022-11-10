import React from "react";
import { Button } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const fn = jest.fn();
const loadComponent = () => {
  render(<Button onClickHandler={fn} />);
};

describe("Button component", () => {
  test("Button component rendered correctly", () => {
    loadComponent();
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(fn).toBeCalledTimes(1);
  });

  test('Button with alt prop', () => {
    render(<Button alt />)
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  })
});
