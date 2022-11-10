import React from "react";
import OrderSummary from "./OrderSummary";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as reactRedux from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  // useDispatch: jest.fn(),
}));

const loadComponent = () => {
  render(<OrderSummary />);
};

describe("Orders component", () => {
  beforeEach(() => {
    // useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  const useSelectorMock = reactRedux.useSelector;
  const mockStore = {
    cart: {
      items: [
        {
          id: "m1",
          name: "Cheese Burger",
          description: "Finest cheese and veggies",
          price: 22.99,
        },
      ],
      totalAmount: 53,
    },
  };

  test("OrderSummary component renders correctly", () => {
    loadComponent();
    const h1 = screen.getByText("Order Summary");
    expect(h1).toBeInTheDocument();
  });
});
