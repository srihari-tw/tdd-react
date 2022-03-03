import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders app", () => {
    render(<App />);
    const app = screen.getByTestId("app");
    expect(app).toBeInTheDocument();
  });

  it("renders the store locator", () => {
    render(<App />);
    const storeLocator = screen.getByTestId("storeLocator");
    expect(storeLocator).toBeInTheDocument();
  });
});
