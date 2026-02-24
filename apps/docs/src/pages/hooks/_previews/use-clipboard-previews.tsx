'use client';

import { useClipboard } from '@k8o/arte-odyssey/hooks/clipboard';
import { useState } from 'react';

export function UseClipboardPreview() {
  const { writeClipboard } = useClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await writeClipboard('Hello from ArteOdyssey!');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className="rounded-lg border border-border-mute px-4 py-2 text-sm transition-colors hover:bg-bg-mute"
        onClick={handleCopy}
        type="button"
      >
        {copied ? 'Copied!' : 'Copy Text'}
      </button>
    </div>
  );
}
