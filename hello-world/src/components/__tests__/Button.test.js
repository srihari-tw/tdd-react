import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders button", () => {
    render(<Button />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("renders button with value", () => {
    render(<Button value="test button" />);
    const button = screen.getByText(/test button/i);
    expect(button).toBeInTheDocument();
  });
});
