import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import {
  useFormContext,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import FormTextarea from "./FormTextarea";

type TextareaFormFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  label?: string;
  className?: string;
  leftAddon?: React.ReactNode;
} & Omit<
  React.ComponentProps<"textarea">,
  "name" | "value" | "onChange" | "onBlur"
>;

export default function TextareaFormField<TFieldValues extends FieldValues>({
  name,
  label,
  className,
  leftAddon,
  ...textareaProps
}: TextareaFormFieldProps<TFieldValues>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        // remove style to avoid TS error
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { style: _ignoredStyle, ...cleanTextareaProps } = textareaProps;

        return (
          <FormItem className="w-full">
            {label && (
              <FormLabel className="font-normal flex items-center text-gray-200 py-2">
                {label}
                {textareaProps.required && (
                  <span className="text-red-400">*</span>
                )}
              </FormLabel>
            )}

            <FormControl>
              <FormTextarea
                {...field}
                {...cleanTextareaProps}
                leftAddon={leftAddon}
                className={cn(
                  "text-sm transition w-full rounded-xl text-white p-3 outline-none resize-none focus:ring-2 focus:ring-primary focus:border-primary",
                  className
                )}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
