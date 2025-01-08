import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "../App";

describe("Product Filter", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should renders all initial filter sections", () => {
    expect(screen.getByText("Filter by Category")).toBeDefined();
    expect(screen.getByText("Filter by Brand")).toBeDefined();
    expect(screen.getByText("Filter by Price")).toBeDefined();
    expect(screen.getByText("Filter by Minimum Rating")).toBeDefined();
    expect(screen.getByText("Filter by Color")).toBeDefined();
  });

  it("should show all products initially", () => {
    expect(screen.getByText("Product A")).toBeDefined();
    expect(screen.getByText("Product B")).toBeDefined();
    expect(screen.getByText("Product C")).toBeDefined();
    expect(screen.getByText("Product D")).toBeDefined();
  });

  it("should filter by category correctly", () => {
    const electronicsCheckbox = screen.getByLabelText("Electronics");
    fireEvent.click(electronicsCheckbox);

    expect(screen.getByText("Product A")).toBeDefined();
    expect(screen.getByText("Product C")).toBeDefined();
    expect(screen.queryByText("Product B")).toBeNull();
    expect(screen.queryByText("Product D")).toBeNull();
  });

  it("should filter by brand correctly", () => {
    const brandXCheckbox = screen.getByLabelText("Brand X");
    fireEvent.click(brandXCheckbox);

    expect(screen.getByText("Product A")).toBeDefined();
    expect(screen.getByText("Product C")).toBeDefined();
    expect(screen.queryByText("Product B")).toBeNull();
    expect(screen.queryByText("Product D")).toBeNull();
  });

  it("should filter by price range correctly", () => {
    const underFiftyRadio = screen.getByLabelText("Under $50");
    fireEvent.click(underFiftyRadio);

    expect(screen.getByText("Product D")).toBeDefined();
    expect(screen.queryByText("Product A")).toBeNull();
    expect(screen.queryByText("Product C")).toBeNull();
  });

  it("should filter by minimum rating correctly", () => {
    const ratingInput = screen.getByRole("spinbutton");
    fireEvent.change(ratingInput, { target: { value: "4.5" } });

    expect(screen.getByText("Product A")).toBeDefined();
    expect(screen.getByText("Product C")).toBeDefined();
    expect(screen.queryByText("Product B")).toBeNull();
    expect(screen.queryByText("Product D")).toBeNull();
  });

  it("should filter by color correctly", () => {
    const redColorCheckbox = screen.getByLabelText("Red");
    fireEvent.click(redColorCheckbox);

    expect(screen.getByText("Product A")).toBeDefined();
    expect(screen.queryByText("Product B")).toBeNull();
    expect(screen.queryByText("Product C")).toBeNull();
    expect(screen.queryByText("Product D")).toBeNull();
  });
});
