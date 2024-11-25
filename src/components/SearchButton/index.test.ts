import { describe, it, vi, Mock, expect, beforeEach } from "vitest";
import { useSearch } from "@/Hooks/useSearch";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchButton } from ".";

vi.mock("@/Hooks/useSearch", () => ({
  useSearch: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
  }),
}));

beforeEach(() => {
  render(<SearchButton />);
})

describe("SearchButton Component", () => {
  it("should render the button with the correct text", () => {
    const handleSearchMock = vi.fn();
    (useSearch as Mock).mockReturnValue({ handleSearch: handleSearchMock });

    const button = screen.getByRole("button", { name: /buscar/i });
    expect(button).toBeDefined();
  });

  it("should call handleSearch when the button is clicked", () => {
    const handleSearchMock = vi.fn();
    (useSearch as Mock).mockReturnValue({ handleSearch: handleSearchMock });

    const button = screen.getByRole("button", { name: /buscar/i });
    fireEvent.click(button);

    expect(handleSearchMock).toHaveBeenCalled();
  });
});

