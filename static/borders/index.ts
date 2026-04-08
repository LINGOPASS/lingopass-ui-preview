/**
 * Border radius tokens for the Lingopass Design System V.2.
 *
 * Only values that do NOT have a semantic equivalent in Tailwind's default
 * border-radius scale are included here. Standard values below are already
 * provided by Tailwind and should NOT be duplicated:
 *   xs=2px(rounded-sm)  sm=4px(rounded)  md=6px(rounded-md)
 *   lg=8px(rounded-lg)  xl=12px(rounded-xl)  2xl=16px(rounded-2xl)
 *   3xl=24px(rounded-3xl)  full=9999px(rounded-full)
 *
 * Extraction source: Figma MCP get_design_context
 *   - Cards (5073:1249, 5085:1887), Modals (5278:3581),
 *     MessageBubble (5231:2459), InputField (5045:444)
 */
export const borderRadius = {
  /**
   * 20px — Used by cards (card-border-radius-xl), modals, and message
   * bubbles. Falls between Tailwind's `2xl` (16px) and `3xl` (24px),
   * so it requires a custom token.
   */
  component: "20px",

  /**
   * 2rem (32px) — InputField pill radius (input-border-radius).
   * Falls between Tailwind's `3xl` (24px) and `full` (9999px).
   */
  input: "2rem"
} as const;
