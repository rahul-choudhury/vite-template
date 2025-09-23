import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function debounce<T extends unknown[]>(
  fn: (...args: T) => void,
  limit = 500,
) {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), limit);
  };
}
