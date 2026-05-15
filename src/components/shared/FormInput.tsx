import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type FormInputProps = React.ComponentProps<"input"> & {
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ leftAddon, rightAddon, className, ...inputProps }, ref) => {
    return (
      <InputGroup
        className={cn(
          "h-auto rounded-full border border-black py-0.5 pr-2",
          "focus-within:ring-2 focus-within:ring-primary focus-within:border-primary",
          className
        )}
      >
        {leftAddon && <InputGroupAddon>{leftAddon}</InputGroupAddon>}

        <InputGroupInput
          ref={ref}
          className="px-5 outline-none focus-visible:ring-0"
          {...inputProps}
        />

        {rightAddon && (
          <InputGroupAddon align="inline-end">{rightAddon}</InputGroupAddon>
        )}
      </InputGroup>
    );
  }
);

FormInput.displayName = "FormInput";
