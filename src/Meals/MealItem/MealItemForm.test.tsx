import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MealItemForm } from "./MealItemForm";

const fn = jest.fn();
describe("MealItem Form component", () => {
  test("MealItemFrom renders correctly", () => {
    render(<MealItemForm id="m1" onAddToCart={fn} />);
    const form = screen.getByTestId("meal-form");
    expect(form).toBeInTheDocument();
    fireEvent.submit(form)
    expect(fn).toBeCalledTimes(1);
  });
});
