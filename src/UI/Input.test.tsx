import React from "react";
import { Input } from "./Input";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const loadComponent = () => {
  render(
    <Input
      label="Amount"
      input={{
        id: "amount_",
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1",
      }}
    />
  );
};
describe("Input component", () => {
  test("Input component renders correctly", () => {
    loadComponent();
    const label = screen.getByLabelText("Amount");
    expect(label).toBeInTheDocument();
    expect(label).toHaveValue(1);
  });
});
