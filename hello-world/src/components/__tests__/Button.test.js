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

  it("button renders with props", ()=>{
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
    const button = screen.getByText(/All Locations/i);
    expect(button).toBeInTheDocument();
  });
});
