'use client';

import type {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  PropsWithChildren,
  ReactElement,
} from 'react';
import {
  createContext,
  use,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { uuidV4 } from '../../../helpers/uuid-v4';
import { IconButton } from '../../icon-button';
import { CloseIcon } from '../../icons';

type AcceptedFile = {
  file: File;
  id: string;
};

type FileFieldContext = {
  isDisabled: boolean;
  isInvalid: boolean;
  acceptedFiles: AcceptedFile[];
  onFileDelete: (id: string) => void;
  openFilePicker: () => void;
};

const FileFieldContext = createContext<FileFieldContext | null>(null);

export const FileFieldProvider = FileFieldContext;

const useFileFieldContext = (): FileFieldContext => {
  const fileField = use(FileFieldContext);
  if (!fileField) {
    throw new Error('useFileFieldContext must be used within a FileField.Root');
  }

  return fileField;
};

const Root = ({
  children,
  id,
  name,
  describedbyId,
  isDisabled = false,
  isInvalid = false,
  isRequired = false,
  accept,
  multiple = false,
  maxFiles,
  onChange,
  webkitDirectory = false,
}: PropsWithChildren<{
  id?: string;
  name?: string;
  describedbyId?: string | undefined;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  defaultValue?: File[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  webkitDirectory?: boolean;
}>) => {
  const generatedId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const [acceptedFiles, setAcceptedFiles] = useState<AcceptedFile[]>([]);

  const onFilesChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);

      const files = Array.from(event.target.files ?? []);
      const newFiles = files.map((file) => ({ file, id: uuidV4() }));
      const updatedFiles =
        multiple || webkitDirectory
          ? [...acceptedFiles, ...newFiles].slice(
              0,
              maxFiles ?? Number.POSITIVE_INFINITY,
            )
          : newFiles.slice(0, 1);

      setAcceptedFiles(updatedFiles);
    },
    [acceptedFiles, multiple, maxFiles, onChange, webkitDirectory],
  );

  const onFileDelete = useCallback(
    (fileId: string) => {
      const updatedFiles = acceptedFiles.filter((f) => f.id !== fileId);
      setAcceptedFiles(updatedFiles);

      if (inputRef.current && onChange) {
        const dataTransfer = new DataTransfer();
        for (const { file } of updatedFiles) {
          dataTransfer.items.add(file);
        }
        inputRef.current.files = dataTransfer.files;

        const event = new Event('change', { bubbles: true });
        Object.defineProperty(event, 'target', {
          writable: false,
          value: inputRef.current,
        });
        onChange(event as unknown as ChangeEvent<HTMLInputElement>);
      }
    },
    [acceptedFiles, onChange],
  );

  const openFilePicker = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const contextValue = useMemo(
    () => ({
      isDisabled,
      isInvalid,
      acceptedFiles,
      onFileDelete,
      openFilePicker,
    }),
    [isDisabled, isInvalid, acceptedFiles, onFileDelete, openFilePicker],
  );

  return (
    <FileFieldProvider value={contextValue}>
      <input
        accept={accept}
        aria-describedby={describedbyId}
        aria-invalid={isInvalid}
        className="sr-only"
        disabled={isDisabled}
        id={id ?? generatedId}
        multiple={multiple}
        name={name}
        onChange={onFilesChange}
        ref={inputRef}
        required={isRequired}
        type="file"
        // @ts-expect-error -- webkitdirectoryがReactのHTMLInputElementのPropsに存在しないため
        // Baseline 2025の機能なので、利用に問題はない
        webkitdirectory={webkitDirectory ? 'true' : undefined}
      />
      {children}
    </FileFieldProvider>
  );
};

const Trigger: FC<{
  renderItem: (props: {
    onClick: () => void;
    disabled: boolean;
    invalid: boolean;
  }) => ReactElement;
}> = ({ renderItem }) => {
  const context = useFileFieldContext();
  return renderItem({
    onClick: context.openFilePicker,
    disabled: context.isDisabled,
    invalid: context.isInvalid,
  });
};

const ItemList: FC<{
  showWebkitRelativePath?: boolean;
  clearable?: boolean;
}> = ({ showWebkitRelativePath, clearable }) => {
  const { acceptedFiles, onFileDelete } = useFileFieldContext();

  if (acceptedFiles.length === 0) {
    return null;
  }

  return (
    <ul className="mt-2 space-y-2">
      {acceptedFiles.map((acceptedFile) => {
        const { file, id } = acceptedFile;
        const onDelete = () => onFileDelete(id);

        const sizeInKB = (file.size / 1024).toFixed(2);

        return (
          <li
            className="flex items-center justify-between rounded-md border border-border-base bg-bg-base px-3 py-2"
            key={id}
          >
            <div className="flex flex-col gap-1">
              <span className="font-medium text-fg-base text-sm">
                {showWebkitRelativePath ? file.webkitRelativePath : file.name}
              </span>
              <span className="text-fg-mute text-xs">{sizeInKB} KB</span>
            </div>
            {clearable && (
              <IconButton label="ファイルを削除" onClick={onDelete}>
                <CloseIcon size="sm" />
              </IconButton>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export const FileField = {
  Root,
  Trigger,
  ItemList,
} as const;
