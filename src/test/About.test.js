import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About component", () => {
  test("renders about component", () => {
    render(<About />);
    
    const aboutElement = screen.getByText("Little Lemon");
    expect(aboutElement).toBeInTheDocument();
  });
});