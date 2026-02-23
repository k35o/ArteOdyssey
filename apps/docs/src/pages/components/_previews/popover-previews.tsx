'use client';

import { Button, Popover } from '@k8o/arte-odyssey';

export function PopoverBasicPreview() {
  return (
    <Popover.Root>
      <Popover.Trigger
        renderItem={(props) => (
          <Button {...props} size="md" type="button">
            Open Popover
          </Button>
        )}
      />
      <Popover.Content
        renderItem={(props) => (
          <div className="rounded-lg bg-bg-mute p-4 shadow-md" {...props}>
            {/* biome-ignore lint/a11y/useFocusableInteractive: demo content */}
            <div role="menuitem">Popover content goes here.</div>
          </div>
        )}
      />
    </Popover.Root>
  );
}

export function PopoverPlacementPreview() {
  return (
    <>
      <Popover.Root placement="top">
        <Popover.Trigger
          renderItem={(props) => (
            <Button {...props} size="md" type="button">
              Top
            </Button>
          )}
        />
        <Popover.Content
          renderItem={(props) => (
            <div className="rounded-lg bg-bg-mute p-4 shadow-md" {...props}>
              {/* biome-ignore lint/a11y/useFocusableInteractive: demo content */}
              <div role="menuitem">Top placement</div>
            </div>
          )}
        />
      </Popover.Root>
      <Popover.Root placement="right">
        <Popover.Trigger
          renderItem={(props) => (
            <Button {...props} size="md" type="button">
              Right
            </Button>
          )}
        />
        <Popover.Content
          renderItem={(props) => (
            <div className="rounded-lg bg-bg-mute p-4 shadow-md" {...props}>
              {/* biome-ignore lint/a11y/useFocusableInteractive: demo content */}
              <div role="menuitem">Right placement</div>
            </div>
          )}
        />
      </Popover.Root>
      <Popover.Root placement="bottom">
        <Popover.Trigger
          renderItem={(props) => (
            <Button {...props} size="md" type="button">
              Bottom
            </Button>
          )}
        />
        <Popover.Content
          renderItem={(props) => (
            <div className="rounded-lg bg-bg-mute p-4 shadow-md" {...props}>
              {/* biome-ignore lint/a11y/useFocusableInteractive: demo content */}
              <div role="menuitem">Bottom placement</div>
            </div>
          )}
        />
      </Popover.Root>
      <Popover.Root placement="left">
        <Popover.Trigger
          renderItem={(props) => (
            <Button {...props} size="md" type="button">
              Left
            </Button>
          )}
        />
        <Popover.Content
          renderItem={(props) => (
            <div className="rounded-lg bg-bg-mute p-4 shadow-md" {...props}>
              {/* biome-ignore lint/a11y/useFocusableInteractive: demo content */}
              <div role="menuitem">Left placement</div>
            </div>
          )}
        />
      </Popover.Root>
    </>
  );
}
