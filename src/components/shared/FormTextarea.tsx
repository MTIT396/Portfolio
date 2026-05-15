import React, { forwardRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

export type FormTextareaProps = React.ComponentProps<
  typeof TextareaAutosize
> & {
  leftAddon?: React.ReactNode;
  hideIconWhenValue?: boolean;
  className?: string;
};

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ leftAddon, className, ...textareaProps }, ref) => {
    return (
      <div className="relative w-full">
        {leftAddon && (
          <div className="absolute left-3 top-3 pointer-events-none">
            {leftAddon}
          </div>
        )}

        <TextareaAutosize
          ref={ref}
          {...textareaProps}
          className={
            "text-sm resize-none w-full rounded-lg border py-2 pr-3 transition focus:outline-none focus:ring-2 " +
            (leftAddon ? "pl-9" : "pl-3") +
            (className ? ` ${className}` : "")
          }
        />
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;
