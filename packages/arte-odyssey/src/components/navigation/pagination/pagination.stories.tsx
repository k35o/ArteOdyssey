import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'components/navigation/pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} onPageChange={setPage} totalPages={10} />;
  },
};

export const Middle: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return <Pagination currentPage={page} onPageChange={setPage} totalPages={10} />;
  },
};

export const Last: Story = {
  render: () => {
    const [page, setPage] = useState(10);
    return <Pagination currentPage={page} onPageChange={setPage} totalPages={10} />;
  },
};

export const Disabled: Story = {
  render: () => <Pagination currentPage={3} isDisabled onPageChange={() => {}} totalPages={10} />,
};
