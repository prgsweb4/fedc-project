import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";


describe("App component", () => {
  test("renders App component", () => {
    render(<App />);
    
    const restaurantElement = screen.getByText("Riyadh");
    expect(restaurantElement).toBeInTheDocument();
  });
});