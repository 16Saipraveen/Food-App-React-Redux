import React from "react";
import { NotFound } from "./NotFound";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("NotFound component", () => {
  test("NotFound component renders correctly", () => {
    render(<NotFound />)
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(screen.getByText('Back to Home')).toBeInTheDocument()
  });
});
