import { useDarkMode } from ".";
import { Mock, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { Theme } from "./types";

interface TestOptions {
  storedTheme: Theme | undefined;
  preferColor: Theme | undefined;
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

describe("useDarkMode", () => {
  test.each`
    storedTheme  | preferColor  | themeResult
    ${undefined} | ${undefined} | ${"dark"}
    ${"light"}   | ${undefined} | ${"light"}
    ${"dark"}    | ${undefined} | ${"dark"}
    ${undefined} | ${"light"}   | ${"light"}
    ${"light"}   | ${"light"}   | ${"light"}
    ${"dark"}    | ${"light"}   | ${"dark"}
    ${undefined} | ${"dark"}    | ${"dark"}
    ${"light"}   | ${"dark"}    | ${"light"}
    ${"dark"}    | ${"dark"}    | ${"dark"}
  `(
    "with storedTheme: $storedTheme and a prefers-color-scheme: $preferColor, expect $themeResult",
    ({ storedTheme, preferColor, themeResult }: TestOptions) => {
      (
        window.matchMedia("(prefers-color-scheme: dark)")
          .matches as unknown as Mock
      ).mockReturnValueOnce(preferColor === "dark");

      (
        window.matchMedia("(prefers-color-scheme: light)")
          .matches as unknown as Mock
      ).mockReturnValueOnce(preferColor === "light");

      const { result } = renderHook(useDarkMode);

      expect(result.current.theme).toBe(themeResult);
    }
  );
});
