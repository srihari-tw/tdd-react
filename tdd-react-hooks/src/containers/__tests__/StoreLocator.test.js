import { render, screen } from "@testing-library/react";
import StoreLocator from "../StoreLocator";

describe("StoreLocator", () => {
  it("renders store locator", () => {
    render(<StoreLocator />);
    const storeLocator = screen.getByTestId("storeLocator");
    expect(storeLocator).toBeInTheDocument();
  });

  it("renders the header inside store locator", () => {
    render(<StoreLocator />);
    const header = screen.getAllByTestId("header");
    expect(header.length).toBe(1);
  });

  it("renders 2 buttons", () => {
    render(<StoreLocator />);
    const buttons = screen.getAllByTestId("button");
    expect(buttons.length).toBe(3);
  });

  it("renders map", () => {
    render(<StoreLocator />);
    const map = screen.getAllByTestId("map");
    expect(map.length).toBe(1);
  });
});
