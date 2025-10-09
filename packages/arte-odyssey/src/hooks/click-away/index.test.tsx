import { userEvent } from '@vitest/browser/context';
import type { FC } from 'react';
import { render } from 'vitest-browser-react';
import { useClickAway } from '.';

const OutsideClicker: FC<{
  callback: () => void;
}> = ({ callback }: { callback: () => void }) => {
  const ref = useClickAway<HTMLDivElement>(callback);
  return (
    <>
      <div ref={ref}>Element</div>
      <div>Outside</div>
    </>
  );
};

describe('useClickAway', () => {
  it('領域外を触るとcallbackが呼び出される', async () => {
    const fn = vi.fn();

    const { getByText } = render(<OutsideClicker callback={fn} />);
    const element = getByText('Element');
    const outsideElement = getByText('Outside');

    expect(fn).not.toHaveBeenCalled();

    await userEvent.click(element);
    expect(fn).not.toHaveBeenCalled();

    await userEvent.click(outsideElement);
    expect(fn).toHaveBeenCalledOnce();

    await userEvent.click(document.body);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
