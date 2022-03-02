import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders header", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
