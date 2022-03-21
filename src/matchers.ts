import { verifyCode } from "@xolvio/graphql-verification";

export function toPassVerificationRules(
  received: string,
  verificationRules: any[]
) {
  const resultItems = verifyCode(verificationRules, received);
  let message: string;
  let pass: boolean;
  if (resultItems.length === 1 && resultItems[0] === "Everything seems fine.") {
    message = "";
    pass = true;
  } else {
    message = resultItems.join("\n");
    pass = false;
  }
  return {
    message: () => message,
    pass,
  };
}
