import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("Footer Component", () => {
  it("should render the footer with the correct text", () => {
    render(<Footer />);

    expect(screen.getByText(/© Google 2021/i)).toBeInTheDocument();
    expect(screen.getByText(/Version 0.1.0/i)).toBeInTheDocument();
  });
});
