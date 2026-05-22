import { Resend } from "resend";

export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export const CONTACT_TO = "ethan@pickledcourt.com";
export const CONTACT_FROM = "Ethan Peterson <noreply@ethanpeterson.com>";
