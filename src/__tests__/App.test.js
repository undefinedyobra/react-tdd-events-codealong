
import { render, screen } from "@testing-library/react";
import App from "../App";

import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

// Code tests here
test("Pizza checkbox is initially unchecked", () => {
    render(<App />)
    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i })
    expect(addPepperoni).not.toBeChecked()
})

test("Toppings list initially contains only cheese", () => {
    render(<App />)
    expect(screen.getAllByRole("listitem").length).toBe(1);
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument()
})

test("Checkboxes become checked when user clicks them", () => {
    render(<App />)
    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i })
    userEvent.click(addPepperoni)
    expect(addPepperoni).toBeChecked();
})

test("Toppings appear in toppings list when checked", () => {
    render(<App />)
    const addPepperoni = screen.getByRole("checkbox", {name: /add pepperoni/i})
    userEvent.click(addPepperoni)
    expect(screen.getAllByRole("listitem").length).toBe(2);
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.getByText("Pepperoni")).toBeInTheDocument();
})