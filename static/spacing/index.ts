/**
 * Semantic spacing tokens for the Lingopass Design System V.2.
 *
 * After extracting spacing values from all component node groups (buttons,
 * form controls, cards, modals, bottomsheets, and chat) via Figma MCP
 * get_design_context, every padding, gap, and height value maps to
 * Tailwind's standard base-4 scale (multiples of 4px).
 *
 * Therefore, NO custom spacing tokens are required. This file is kept as a
 * placeholder to maintain the import pattern established by other static
 * token files and to allow future additions if the design system evolves.
 *
 * Standard Tailwind spacing used in the design:
 *   0px=0   4px=1   8px=2   12px=3   16px=4   20px=5   24px=6
 *   32px=8  40px=10  48px=12
 */
export const spacing = {} as const;
