import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App", () => {
  it("should render the heading", () => {
    render(<App />);
    const heading = screen.getByText(
      /React \+ TypeScript \+ Tailwind \+ Vitest/i
    );
    expect(heading).toBeInTheDocument();
  });
});
