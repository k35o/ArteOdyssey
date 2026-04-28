import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'components/navigation/pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationRender = ({ initialPage }: { initialPage: number }) => {
  const [page, setPage] = useState(initialPage);
  return (
    <Pagination currentPage={page} onPageChange={setPage} totalPages={10} />
  );
};

export const Default: Story = {
  render: () => <PaginationRender initialPage={1} />,
};

export const Middle: Story = {
  render: () => <PaginationRender initialPage={5} />,
};

export const Last: Story = {
  render: () => <PaginationRender initialPage={10} />,
};

export const Disabled: Story = {
  render: () => (
    <Pagination
      currentPage={3}
      isDisabled
      onPageChange={() => {}}
      totalPages={10}
    />
  ),
};
