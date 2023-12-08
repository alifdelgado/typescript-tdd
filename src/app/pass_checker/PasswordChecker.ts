export enum PasswordErrors {
  SHORT = "Password is too short",
  NO_UPPER_CASE = "Uppercase letter required",
  NO_LOWER_CASE = "Lowercase letter required",
  NO_NUMBER = "At least one number required",
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];
    this.checkForLength(password, reasons);
    this.checkForUpperCase(password, reasons);
    this.checkForLowerCase(password, reasons);
    return { valid: reasons.length === 0, reasons };
  }

  public checkAdminPassword(password: string): CheckResult {
    const { reasons } = this.checkPassword(password);
    this.checkForNumber(password, reasons);
    return {
      valid: reasons.length === 0,
      reasons: reasons,
    };
  }

  private checkForLength(password: string, reasons: PasswordErrors[]): void {
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
  }

  private checkForUpperCase(password: string, reasons: PasswordErrors[]): void {
    if (password === password.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER_CASE);
    }
  }

  private checkForLowerCase(password: string, reasons: PasswordErrors[]): void {
    if (password === password.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER_CASE);
    }
  }

  private checkForNumber(password: string, reasons: PasswordErrors[]): void {
    if (!/\d/.test(password)) {
      reasons.push(PasswordErrors.NO_NUMBER);
    }
  }
}
