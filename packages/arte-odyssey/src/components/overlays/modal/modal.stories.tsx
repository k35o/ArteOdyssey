import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef } from 'react';
import { expect, fn, waitFor } from 'storybook/test';

import { Button } from '../../buttons/button';
import { Dialog } from '../dialog';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'components/overlays/modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    defaultOpen: true,
    children: (
      <Dialog.Root>
        <Dialog.Header onClose={fn()} title="確認" />
        <Dialog.Content>
          <p>この操作を実行してもよろしいですか？</p>
        </Dialog.Content>
      </Dialog.Root>
    ),
  },
  parameters: {
    a11y: {
      options: {
        rules: {
          'color-contrast': { enabled: false },
        },
      },
    },
  },
};

const ExternalRefControlRender = () => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        onClick={() => {
          ref.current?.showModal();
        }}
        size="md"
        type="button"
      >
        開く
      </Button>
      <Modal ref={ref} type="center">
        <Dialog.Root>
          <Dialog.Header
            onClose={() => {
              ref.current?.close();
            }}
            title="外部ref制御"
          />
          <Dialog.Content>
            <p>ref.current.showModal() から開かれました</p>
          </Dialog.Content>
        </Dialog.Root>
      </Modal>
    </>
  );
};

export const ExternalRefControl: Story = {
  render: () => <ExternalRefControlRender />,
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByRole('button', { name: '開く' });
    await userEvent.click(trigger);
    await waitFor(() => {
      const dialog = canvas.getAllByRole('dialog')[0];
      expect(dialog).toBeInstanceOf(HTMLDialogElement);
      expect(dialog?.hasAttribute('open')).toBe(true);
      if (getComputedStyle(dialog as Element).opacity !== '1') {
        throw new Error('waiting for animation');
      }
    });
  },
  parameters: {
    a11y: {
      options: {
        rules: {
          'color-contrast': { enabled: false },
        },
      },
    },
  },
};
