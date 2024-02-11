import { clsx } from "clsx";

export function cn(...classNames: (string | undefined | null | false)[]) {
  return clsx(...classNames);
}
