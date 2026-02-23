'use client';

import { Button, Drawer } from '@k8o/arte-odyssey';
import { useState } from 'react';

export function DrawerBasicPreview() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Menu">
        <nav className="flex flex-col gap-2">
          <a className="rounded-md px-3 py-2 hover:bg-bg-mute" href="/">
            Home
          </a>
          <a className="rounded-md px-3 py-2 hover:bg-bg-mute" href="/about">
            About
          </a>
          <a className="rounded-md px-3 py-2 hover:bg-bg-mute" href="/contact">
            Contact
          </a>
        </nav>
      </Drawer>
    </>
  );
}

export function DrawerCustomContentPreview() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Navigation Drawer</Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Navigation"
      >
        <nav className="flex flex-col gap-1">
          <a
            className="rounded-md px-3 py-2 font-bold hover:bg-bg-mute"
            href="/"
          >
            Dashboard
          </a>
          <a className="rounded-md px-3 py-2 hover:bg-bg-mute" href="/profile">
            Profile
          </a>
          <a className="rounded-md px-3 py-2 hover:bg-bg-mute" href="/settings">
            Settings
          </a>
          <hr className="my-2 border-border-mute" />
          <a className="rounded-md px-3 py-2 hover:bg-bg-mute" href="/help">
            Help
          </a>
          <a className="rounded-md px-3 py-2 hover:bg-bg-mute" href="/logout">
            Sign Out
          </a>
        </nav>
      </Drawer>
    </>
  );
}
