# Icon System

SVG files in this directory can be imported directly into `.ts` and `.tsx` files and rendered as React components. The project uses `@svgr/webpack` in [`next.config.ts`](../../next.config.ts) and TypeScript support lives in [`src/types/svg.d.ts`](../../src/types/svg.d.ts).

## How It Works

When you import an `.svg` from JavaScript or TypeScript, SVGR turns that file into a React component. In the current configuration, the component is exposed as the **default export**.

This means you can:

- Render icons inline without using `<img />`
- Style icons with Tailwind classes through `className`
- Pass standard SVG props such as `aria-hidden`, `role`, `title`, and `onClick`

## Basic Usage

The example below assumes the importing component lives in `src/app/styles/page.tsx`. If your file is elsewhere, adjust the relative path to `public/figma-icons`.

```tsx
import ArrowDownIcon from "../../../public/figma-icons/ArrowDown.svg";

export function ExampleIconRow() {
  return (
    <div className="flex items-center gap-2">
      <ArrowDownIcon className="h-6 w-6" aria-hidden="true" />
      <span>Sort descending</span>
    </div>
  );
}
```

## Styling and Accessibility

Imported icons accept the same props as any other React SVG component, so you can control size, color, and accessibility directly at the call site.

```tsx
import FavoriteOnIcon from "../../../public/figma-icons/FavoriteOn.svg";

export function FavoriteBadge() {
  return (
    <FavoriteOnIcon
      className="h-5 w-5 text-primary-500"
      role="img"
      title="Favorited"
      aria-label="Favorited"
    />
  );
}
```

## Usage Notes

- Keep SVG files in `public/figma-icons` so they stay easy to find and reuse.
- Prefer meaningful filenames because the import name usually mirrors the file name.
- The current setup is component-first. If you need an SVG file URL instead of a React component, the webpack configuration would need to change.
