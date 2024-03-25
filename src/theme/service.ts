import CssFilterConverter from 'css-filter-converter';

export const Spacing = (s: number) => `${s * 4}px`;

export const hexToFilter = (color: string) =>
  CssFilterConverter.hexToFilter(color, { sheen: true }).color;
