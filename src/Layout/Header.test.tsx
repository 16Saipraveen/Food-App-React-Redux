import React from "react";
import { Header } from "./Header";
import { fireEvent, screen, render } from "@testing-library/react";

const loadComponent = () => {
  render(<Header />);
};

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("Header component", () => {
  test("Image renders correctly", () => {
    loadComponent();
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
  test("Heading is rendered", () => {
    loadComponent();
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
    fireEvent.click(heading);
  });
});
