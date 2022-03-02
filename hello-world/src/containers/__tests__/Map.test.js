import { render, screen } from "@testing-library/react";
import Map from "../Map";

describe("Map", () => {
  it("renders map", () => {
    render(<Map />);
    const map = screen.getByTestId("map");
    expect(map).toBeInTheDocument();
  });
});
