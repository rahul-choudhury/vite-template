import { expect, test, vi } from "vitest";
import { debounce } from "./utils";

test("debounce delays function execution", () => {
  vi.useFakeTimers();

  const mockFn = vi.fn();
  const debouncedFn = debounce(mockFn, 100);

  debouncedFn();
  debouncedFn();

  vi.advanceTimersByTime(99);
  expect(mockFn).not.toHaveBeenCalled();
  vi.advanceTimersByTime(1);
  expect(mockFn).toHaveBeenCalledTimes(1);

  vi.useRealTimers();
});
