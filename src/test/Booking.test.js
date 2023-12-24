import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Booking from "../components/Booking";

test("renders the Booking component", () => {
  render(
    <Router>
      <Booking />
    </Router>
  );

  // Verificar que el componente se haya renderizado correctamente
  const reservationComponent = screen.getByTestId("reservations-component");
  expect(reservationComponent).toBeInTheDocument();
});