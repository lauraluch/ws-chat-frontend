import type { JSX } from "react";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "s1"
  | "s2"
  | "s3"
  | "p1"
  | "p2"
  | "p3";

export const variantMap: Record<
  TextVariant,
  { tag: keyof JSX.IntrinsicElements; className: string }
> = {
  h1: { tag: "h1", className: "text-4xl font-bold" },
  h2: { tag: "h2", className: "text-3xl font-semibold" },
  h3: { tag: "h3", className: "text-2xl font-semibold" },
  h4: { tag: "h4", className: "text-xl font-medium" },
  h5: { tag: "h5", className: "text-lg font-medium" },

  s1: { tag: "span", className: "text-base font-semibold" },
  s2: { tag: "span", className: "text-sm font-medium" },
  s3: { tag: "span", className: "text-xs font-medium uppercase" },

  p1: { tag: "p", className: "text-base" },
  p2: { tag: "p", className: "text-sm" },
  p3: { tag: "p", className: "text-xs text-gray-500" },
};
