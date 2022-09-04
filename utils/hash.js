import { createHash } from "crypto";

export default function hash(string) {
  return createHash("sha256").update(string).digest("hex");
}
