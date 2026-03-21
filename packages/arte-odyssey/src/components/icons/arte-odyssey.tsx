import type { FC } from 'react';
import { BaseIcon, type BaseIconProps } from './base';

const ArteOdysseyLogo: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* 傘（メイン） */}
      <path
        d="M20,50 C25,25 60,15 80,35"
        fill="none"
        stroke="var(--teal-300)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* 内側ライン */}
      <path
        d="M30,50 C45,40 60,40 75,50"
        fill="none"
        stroke="var(--teal-300)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* 触手（中央） */}
      <path
        d="M55,50 C60,70 60,80 55,95"
        fill="none"
        stroke="var(--cyan-300)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* 触手（左） */}
      <path
        d="M45,50 C45,65 40,75 38,88"
        fill="none"
        stroke="var(--cyan-300)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 触手（右） */}
      <path
        d="M65,50 C70,65 75,75 78,90"
        fill="none"
        stroke="var(--cyan-300)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 接続ノード */}
      <circle cx="22" cy="50" r="5" fill="var(--cyan-300)" />
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
