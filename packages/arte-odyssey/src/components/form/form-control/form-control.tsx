'use client';

import { type FC, type ReactElement, useId } from 'react';

type FormControlProps = {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  label: string;
  labelAs?: 'label' | 'legend';
  helpText?: string;
  errorText?: string | undefined;
  renderInput: (props: {
    id: string;
    describedbyId: string | undefined;
    labelId: string;
    isDisabled: boolean;
    isInvalid: boolean;
    isRequired: boolean;
  }) => ReactElement;
};

export const FormControl: FC<FormControlProps> = ({
  isDisabled = false,
  isInvalid = false,
  isRequired = false,
  label,
  labelAs = 'label',
  helpText,
  errorText,
  renderInput,
}) => {
  const id = useId();
  const hasErrorText = errorText !== undefined && errorText !== '';
  const hasHelpText = helpText !== undefined && helpText !== '';
  const describedbyId =
    isInvalid && hasErrorText
      ? `${id}-feedback`
      : hasHelpText
        ? `${id}-helptext`
        : undefined;
  const labelId = `${id}-label`;
  return (
    <fieldset className="flex w-full flex-col">
      {labelAs === 'label' ? (
        <label
          className="text-fg-base text-md mb-1 flex gap-2 pl-0.5 font-bold"
          htmlFor={id}
          id={labelId}
        >
          {label}
          {isRequired && (
            <span className="text-fg-error font-medium">必須</span>
          )}
        </label>
      ) : (
        <legend className="text-fg-base text-md mb-1 flex gap-2 pl-0.5 font-bold">
          {label}
          {isRequired && (
            <span className="text-fg-error font-medium">必須</span>
          )}
        </legend>
      )}
      {renderInput({
        id,
        describedbyId,
        labelId,
        isDisabled,
        isInvalid,
        isRequired,
      })}
      {isInvalid && hasErrorText ? (
        <p
          aria-live="polite"
          className="text-fg-error mt-1 pl-0.5 text-sm"
          id={`${id}-feedback`}
        >
          {errorText}
        </p>
      ) : hasHelpText ? (
        <p className="text-fg-mute mt-1 pl-0.5 text-sm" id={`${id}-helptext`}>
          {helpText}
        </p>
      ) : null}
    </fieldset>
  );
};
