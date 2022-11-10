import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch, useSelector } from "react-redux";
import MealView from "./MealView";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
  useParams: () => jest.fn(),
}));

jest.mock("../hooks/useMealData", () => ({
  useMealData: jest.fn(),
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

describe("MealView component", () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    render(<MealView />);
  });
  test("MealView component renders correctly", () => {
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
