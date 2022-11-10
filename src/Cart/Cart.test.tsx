import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "./Cart";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

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
const useDispatchMock = useDispatch;
const useSelectorMock = useSelector;
describe("Cart Component", () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    render(<Cart />);
  });
  test("Cart Component renders correctly", () => {
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
