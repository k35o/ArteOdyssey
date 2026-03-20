import type { FC, PropsWithChildren, ReactNode } from 'react';
import { cn } from '../../helpers/cn';

type RootProps = PropsWithChildren<{
  className?: string;
  containerClassName?: string;
}>;

type RowProps = PropsWithChildren<{
  className?: string;
  interactive?: boolean;
}>;

type CellAlign = 'left' | 'center' | 'right';

type HeaderCellProps = PropsWithChildren<{
  align?: CellAlign;
  className?: string;
}>;

type CellProps = PropsWithChildren<{
  align?: CellAlign;
  className?: string;
  colSpan?: number;
  tone?: 'default' | 'muted';
}>;

type SectionProps = PropsWithChildren<{
  className?: string;
}>;

type CaptionProps = PropsWithChildren<{
  className?: string;
}>;

type EmptyStateProps = {
  colSpan: number;
  children: ReactNode;
};

const Root: FC<RootProps> = ({ children, className, containerClassName }) => {
  return (
    <div
      className={cn(
        'w-full overflow-x-auto rounded-lg border border-border-mute bg-bg-base',
        containerClassName,
      )}
    >
      <table
        className={cn(
          'min-w-full border-collapse text-left text-sm',
          className,
        )}
      >
        {children}
      </table>
    </div>
  );
};

const Head: FC<SectionProps> = ({ children, className }) => {
  return <thead className={cn('bg-bg-subtle', className)}>{children}</thead>;
};

const Body: FC<SectionProps> = ({ children, className }) => {
  return (
    <tbody className={cn('[&_tr:last-child]:border-b-0', className)}>
      {children}
    </tbody>
  );
};

const Row: FC<RowProps> = ({ children, className, interactive = false }) => {
  return (
    <tr
      className={cn(
        'border-border-mute border-b transition-colors',
        interactive && 'hover:bg-bg-mute',
        className,
      )}
    >
      {children}
    </tr>
  );
};

const HeaderCell: FC<HeaderCellProps> = ({
  align = 'left',
  children,
  className,
}) => {
  return (
    <th
      className={cn(
        'px-4 py-3 font-medium text-fg-base',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className,
      )}
      scope="col"
    >
      {children}
    </th>
  );
};

const Cell: FC<CellProps> = ({
  align = 'left',
  children,
  className,
  colSpan,
  tone = 'default',
}) => {
  return (
    <td
      className={cn(
        'px-4 py-3 align-middle',
        tone === 'muted' ? 'text-fg-mute' : 'text-fg-base',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className,
      )}
      colSpan={colSpan}
    >
      {children}
    </td>
  );
};

const Caption: FC<CaptionProps> = ({ children, className }) => {
  return (
    <caption
      className={cn('caption-bottom px-4 py-3 text-fg-mute text-sm', className)}
    >
      {children}
    </caption>
  );
};

const EmptyState: FC<EmptyStateProps> = ({ children, colSpan }) => {
  return (
    <Row>
      <Cell align="center" className="py-10 text-fg-mute" colSpan={colSpan}>
        {children}
      </Cell>
    </Row>
  );
};

export const Table = {
  Root,
  Head,
  Body,
  Row,
  HeaderCell,
  Cell,
  Caption,
  EmptyState,
} as const;
