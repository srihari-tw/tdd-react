import mapChooser from "../mapChooser";

describe("mapChooser", () => {
  it("returns portland.png when input in portland", () => {
    let expected = "portland.png";
    let actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });

  it("returns oregon.png when input in oregon", () => {
    let expected = "oregon.png";
    let actual = mapChooser("oregon");
    expect(actual).toEqual(expected);
  });

  it("return default.png when no input is passed", () => {
    let expected = "default.png";
    let actual = mapChooser();
    expect(actual).toEqual(expected);
  });

  it("return default.png when empty input is passed", () => {
    let expected = "default.png";
    let actual = mapChooser("");
    expect(actual).toEqual(expected);
  });
});
