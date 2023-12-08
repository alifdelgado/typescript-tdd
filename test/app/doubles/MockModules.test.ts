jest.mock("../../../src/app/doubles/OtherUtils", () => ({
  ...jest.requireActual("../../../src/app/doubles/OtherUtils"),
  calculateComplexity: () => 10,
}));

jest.mock("uuid", () => ({
  v4: () => "1234",
}));

import * as OtherUtils from "../../../src/app/doubles/OtherUtils";

describe("module test", () => {
  it("calculate complexity", () => {
    const result = OtherUtils.calculateComplexity({} as any);
    console.log(result);
  });

  it("keep other functions", () => {
    const result = OtherUtils.toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  it("string with id", () => {
    const result = OtherUtils.toLowerCaseWithId("abc");
    expect(result).toBe("abc1234");
  });
});
