import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartItem } from "./CartItem";

describe("CartItem component", () => {
  const fn = jest.fn();
  test("CartItem renders correctly", () => {
    render(
      <CartItem
        key="m1"
        name="m1"
        amount={2}
        price={34}
        onRemove={fn}
        onAdd={fn}
      />
    );
    const item = screen.getByRole("listitem");
    expect(item).toBeInTheDocument();
  });
});
