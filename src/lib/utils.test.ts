import { expect, test, vi } from "vitest";
import { debounce, throttle } from "./utils";

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

test("throttle function call within a time limit", () => {
  vi.useFakeTimers();

  const mockFn = vi.fn();
  const throttledFn = throttle(mockFn, 4000);

  throttledFn();
  throttledFn();
  throttledFn();
  throttledFn();

  vi.advanceTimersByTime(4000);
  expect(mockFn).toHaveBeenCalledTimes(1);

  vi.useRealTimers();
});
