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
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
