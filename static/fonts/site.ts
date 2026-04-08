const baseFontSize = 16;
const toRem = (px: number) => `${px / baseFontSize}rem`;

// Internal constants used inside fontSize tuples — do NOT export directly to avoid
// shadowing the standalone scale exports (lineHeightScale / letterSpacingScale).
const lineHeight = "1.3";
const letterSpacing = "0";

/**
 * Font weight tokens extracted from the Lingopass Design System V.2 (Figma node 7464:4288).
 * Only weights confirmed in the design system are included.
 */
export const fontWeight = {
  regular: "400",
  semibold: "600",
  bold: "700",
} as const;

/**
 * Standalone line-height scale for the design system.
 * All text styles in Figma use a single line-height of 1.3, which falls between
 * Tailwind's `tight` (1.25) and `snug` (1.375) defaults. It is exported here as
 * `normal` to reflect its role as the universal default in this design system.
 * Use `theme.extend.lineHeight` in tailwind.config.ts to add it alongside Tailwind's
 * existing scale without overriding it.
 */
export const lineHeightScale = {
  normal: "1.3",
} as const;

/**
 * Standalone letter-spacing scale for the design system.
 * All text styles in Figma use `letterSpacing: 0`. Exported as a named token
 * for explicit config alignment; additional values can be added as the system evolves.
 */
export const letterSpacingScale = {
  none: "0",
} as const;

const headerSizes = {
  h1: 48,
  h2: 40,
  h3: 32,
  h4: 28,
  h5: 24,
};

const bodySizes = {
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
};

const fontSize: Record<
  string,
  [string, { lineHeight: string; letterSpacing: string }]
> = {
  h1: [toRem(headerSizes.h1), { lineHeight, letterSpacing }],
  h2: [toRem(headerSizes.h2), { lineHeight, letterSpacing }],
  h3: [toRem(headerSizes.h3), { lineHeight, letterSpacing }],
  h4: [toRem(headerSizes.h4), { lineHeight, letterSpacing }],
  h5: [toRem(headerSizes.h5), { lineHeight, letterSpacing }],
  "body-h1": [toRem(bodySizes.h1), { lineHeight, letterSpacing }],
  "body-h2": [toRem(bodySizes.h2), { lineHeight, letterSpacing }],
  "body-h3": [toRem(bodySizes.h3), { lineHeight, letterSpacing }],
  "body-h4": [toRem(bodySizes.h4), { lineHeight, letterSpacing }],
  "body-h5": [toRem(bodySizes.h5), { lineHeight, letterSpacing }],
  "body-h6": [toRem(bodySizes.h6), { lineHeight, letterSpacing }],
};

export { fontSize };
