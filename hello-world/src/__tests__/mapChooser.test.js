import mapChooser from "../mapChooser";

describe("mapChooser", () => {
  it("returns portland.jpg when input in portland", () => {
    let expected = "portland.jpg";
    let actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });

  it("returns oregon.jpg when input in oregon", () => {
    let expected = "oregon.jpg";
    let actual = mapChooser("oregon");
    expect(actual).toEqual(expected);
  });

  it("return default.jpg when no input is passed", () => {
    let expected = "default.jpg";
    let actual = mapChooser();
    expect(actual).toEqual(expected);
  });

    it("return default.jpg when empty input is passed", () => {
      let expected = "default.jpg";
      let actual = mapChooser("");
      expect(actual).toEqual(expected);
    });
});
