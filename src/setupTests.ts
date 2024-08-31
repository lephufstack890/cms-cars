// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { vi } from 'vitest';

Object.defineProperty(window, 'matchMedia', {
  value: vi.fn().mockImplementation((query: any) => ({
    // deprecated
    addEventListener: vi.fn(),

    addListener: vi.fn(),

    dispatchEvent: vi.fn(),

    matches: false,
    media: query,

    onchange: null,

    removeEventListener: vi.fn(),
    // deprecated
    removeListener: vi.fn(),
  })),
  writable: true,
});
