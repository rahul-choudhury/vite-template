import { useCounterStore } from "@/hooks/counter-store";
import { beforeEach, describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ZustandDemo } from "./zustand";
import "@testing-library/jest-dom";

describe("ZustandDemo", () => {
  beforeEach(() => {
    useCounterStore.getState().reset();
  });

  test("Renders component with initial count to 0", () => {
    render(<ZustandDemo />);

    expect(
      screen.getByRole("heading", { name: "Zustand" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Client state management")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("Current count")).toBeInTheDocument();
  });

  test("Increments count when plus button is clicked", () => {
    render(<ZustandDemo />);

    const incrementBtn = screen.getByLabelText("Increment count");

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("Decrements count when minus button is clicked", () => {
    render(<ZustandDemo />);

    const incrementBtn = screen.getByLabelText("Increment count");
    const decrementBtn = screen.getByLabelText("Decrement count");

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("Restore count to 0 when Reset button is clicked", () => {
    render(<ZustandDemo />);

    const incrementBtn = screen.getByLabelText("Increment count");
    const decrementBtn = screen.getByLabelText("Decrement count");
    const resetBtn = screen.getByLabelText("Reset count to zero");

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);
    fireEvent.click(resetBtn);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("Increments count by custom amount and clears input", () => {
    render(<ZustandDemo />);

    const customAmountInput =
      screen.getByLabelText<HTMLInputElement>("Custom increment");
    const addButton = screen.getByLabelText("Add count by user entered number");

    fireEvent.change(customAmountInput, { target: { value: "5" } });
    fireEvent.click(addButton);

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(customAmountInput.value).toBe("");
    expect(addButton).toBeDisabled();
  });
});
