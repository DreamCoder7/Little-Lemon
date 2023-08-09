import { render, screen, fireEvent } from "@testing-library/react";
import { test } from "vitest";
import BookingForm from "./BookingForm";

const fn = () => {};

const props = {
  availableTimes: ["12:00 PM", "1:00 PM", "2:00 PM"],
  updateTimes: fn,
};

test("BookingForm submits the form with the selected values", () => {
  render(<BookingForm {...props} />);

  // Fill in the form fields
  const dateInput = screen.getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: "2023-08-05" } });

  const timeSelect = screen.getByLabelText("Choose time");
  fireEvent.change(timeSelect, { target: { value: "1:00 PM" } });

  const guestsInput = screen.getByLabelText("Number of guests");
  fireEvent.change(guestsInput, { target: { value: "4" } });

  const occasionSelect = screen.getByLabelText("Occasion");
  fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

  // Submit the form
  const submitButton = screen.getByText("Make your reservation");
  fireEvent.click(submitButton);

  // Assert that the form was submitted and the updateTimes function was called
  expect(fn).toHaveBeenCalledTimes(1);
});
