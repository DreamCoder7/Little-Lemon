import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const props = {
  availableTimes: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
  updateTimes: () => {},
};

test("Renders the BookingForm heading", () => {
  render(<BookingForm {...props} />);

  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});
