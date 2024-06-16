import React from "react";
import { render, screen } from "@testing-library/react";
import IndexPage from "../index";

describe("IndexPage", () => {
  it("renders the heading", () => {
    render(<IndexPage />);
    const headingElement = screen.getByRole("heading", {
      name: /hello, gatsby with typescript!/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
