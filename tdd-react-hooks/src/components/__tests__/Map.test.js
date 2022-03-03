import { render, screen } from "@testing-library/react";
import Map from "../Map";

describe("Map", () => {
  it("renders map", () => {
    render(<Map />);
    const map = screen.getByTestId("map");
    expect(map).toBeInTheDocument();
  });

  it("render an image inside map", () => {
    render(<Map />);
    const image = screen.getByTestId("img");
    expect(image).toBeInTheDocument();
  });

  it("renders map with location prop", ()=> {
    render(<Map location={'portland'}/>);
    const image = screen.getByAltText(/portland/i);
    expect(image).toBeInTheDocument();
  });
});
