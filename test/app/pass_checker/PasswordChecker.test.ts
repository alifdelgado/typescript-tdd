import {
  PasswordChecker,
  PasswordErrors,
} from "../../../src/app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Password with less than 8 characters is invalid", () => {
    const result = sut.checkPassword("1234567");
    expect(result.valid).toBeFalsy();
    expect(result.reasons).toContain(PasswordErrors.SHORT);
  });

  it("Password with more than 8 characters is valid", () => {
    const result = sut.checkPassword("12345678Ab");
    expect(result.valid).toBeTruthy();
  });

  it("Password with no uppercase letter is invalid", () => {
    const result = sut.checkPassword("1234abcd");
    expect(result.valid).toBeFalsy();
    expect(result.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it("Password with an uppercase letter is valid", () => {
    const result = sut.checkPassword("1234abcdE");
    expect(result.valid).toBeTruthy();
  });

  it("Password with no lowercase letter is invalid", () => {
    const result = sut.checkPassword("1234ABCD");
    expect(result.valid).toBeFalsy();
    expect(result.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("Password with a lowercase letter is valid", () => {
    const result = sut.checkPassword("1234abcdE");
    expect(result.valid).toBeTruthy();
  });

  it("Complex password is valid", () => {
    const result = sut.checkPassword("1234abcdEFHYAN");
    expect(result.valid).toBeTruthy();
    expect(result.reasons).toHaveLength(0);
  });

  it("Admin password with no number is invalid", () => {
    const result = sut.checkAdminPassword("abcdEFHYAN");
    expect(result.valid).toBeFalsy();
    expect(result.reasons).toContain(PasswordErrors.NO_NUMBER);
  });

  it("Admin password with a number is valid", () => {
    const result = sut.checkAdminPassword("abcdEFHYAN1");
    expect(result.valid).toBeTruthy();
    expect(result.reasons).not.toContain(PasswordErrors.NO_NUMBER);
  });
});
