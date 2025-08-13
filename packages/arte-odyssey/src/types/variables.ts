export type Status = 'success' | 'info' | 'warning' | 'error';

export type Direction = 'up' | 'down' | 'right' | 'left';

export type Option = Readonly<{
  value: string;
  label: string;
}>;
