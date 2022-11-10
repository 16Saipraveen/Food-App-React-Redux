import React from "react";
import { Card } from "./Card";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Card component", () => {
  test("Card component renders correctly", () => {
    render(<Card />);
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
});
