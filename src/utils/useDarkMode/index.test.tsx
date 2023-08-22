import { useDarkMode } from ".";
import { Mock, vi, describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { Theme } from "./types";

interface TestOptions {
  storedTheme: Theme | undefined;
  preferColor: "dark" | undefined;
  themeResult: Theme;
}

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: vi.fn(),
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

let store: Record<string, string | undefined> = { theme: undefined };

vi.spyOn(Storage.prototype, "getItem").mockImplementation(
  (key) => store[key] ?? null
);

describe("useDarkMode", () => {
  test.each`
    storedTheme  | preferColor  | themeResult
    ${undefined} | ${undefined} | ${"dark"}
    ${"light"}   | ${undefined} | ${"light"}
    ${"dark"}    | ${undefined} | ${"dark"}
    ${undefined} | ${"dark"}    | ${"dark"}
    ${"light"}   | ${"dark"}    | ${"light"}
    ${"dark"}    | ${"dark"}    | ${"dark"}
  `(
    "with storedTheme: $storedTheme and a prefers-color-scheme: $preferColor, expect $themeResult",
    ({ storedTheme, preferColor, themeResult }: TestOptions) => {
      store = { theme: storedTheme };

      (
        window.matchMedia("(prefers-color-scheme: dark)")
          .matches as unknown as Mock
      ).mockReturnValueOnce(preferColor === "dark");

      const { result } = renderHook(useDarkMode);

      expect(result.current.theme).toBe(themeResult);
    }
  );
});
