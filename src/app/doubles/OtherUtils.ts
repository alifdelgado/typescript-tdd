import { v4 } from "uuid";

export type stringInfo = {
  lowerCase?: string;
  upperCase?: string;
  characters?: string[];
  length: number;
  extraInfo: Object;
};

type LoggerServiceCallBack = (arg: string) => void;

export const toUpperCase = (arg: string) => {
  return arg.toUpperCase();
};

export const toLowerCaseWithId = (arg: string) => {
  return arg.toLowerCase() + v4();
};

export const calculateComplexity = (info: stringInfo) => {
  return Object.keys(info.extraInfo).length * info.length;
};

export const toUpperCaseWithCb = (arg: string, cb: LoggerServiceCallBack) => {
  if (!arg) return cb("Invalid argument");

  cb(`called function with ${arg}`);
  return arg.toUpperCase();
};

export class OtherStringUtils {
  public callExternalService() {
    console.log("Calling external service");
  }

  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }
}
