import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders button", () => {
    render(<Button />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("renders button with value", () => {
    render(<Button location="test button" />);
    const button = screen.getByText(/test button/i);
    expect(button).toBeInTheDocument();
  });
});

describe("When a location is passed to it", () => {
  let props = {};
  beforeEach(() => {
    props = { location: "Location1" };
  });

  it("button renders with props", () => {
    render(<Button {...props} />);
    const button = screen.getByText(/location1/i);
    expect(button).toBeInTheDocument();
  });
});

describe("When no location is passed to it", () => {
  let props = {};
  beforeEach(() => {
    props = { location: undefined };
  });

  it("button renders with props", () => {
    render(<Button {...props} />);
    const button = screen.getByText(/head office/i);
    expect(button).toBeInTheDocument();
  });

  it("calls a function passed to it when clicked", () => {
    const mockCallback = jest.fn();
    render(<Button onClick={mockCallback} />);
    const button = screen.getByTestId("button");
    button.click();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
