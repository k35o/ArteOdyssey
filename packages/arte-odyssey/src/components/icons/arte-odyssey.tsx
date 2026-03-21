import type { FC } from 'react';
import { BaseIcon, type BaseIconProps } from './base';

const ArteOdysseyLogo: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* 傘 */}
      <path
        d="M20,55 C30,25 70,25 80,55"
        fill="none"
        stroke="var(--teal-300)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* ノード */}
      <circle cx="25" cy="55" r="8" fill="var(--cyan-300)" />
    </svg>
  );
};

export const ArteOdyssey: FC<Partial<BaseIconProps>> = ({ size = 'md' }) => {
  return (
    <BaseIcon
      renderItem={(props) => {
        return <ArteOdysseyLogo {...props} />;
      }}
      size={size}
    />
  );
};
