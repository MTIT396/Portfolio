"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  useFormContext,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type FileUploadFormFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  label?: string;
  optional?: boolean;
  maxSizeMB?: number;
  className?: string;
};

export default function FileUploadFormField<TFieldValues extends FieldValues>({
  name,
  label,
  optional = false,
  maxSizeMB = 5,
  className,
}: FileUploadFormFieldProps<TFieldValues>) {
  const form = useFormContext();
  const [fileName, setFileName] = useState("");
  const value = form.watch(name);
  useEffect(() => {
    if (!value) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFileName("");
    }
  }, [value]);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-full", className)}>
          {label && (
            <FormLabel className="text-gray-200">
              {label}{" "}
              {optional && (
                <span className="text-gray-400 text-sm">(optional)</span>
              )}
            </FormLabel>
          )}

          <FormControl>
            <label
              className="
                mt-2 flex items-center justify-between w-full cursor-pointer
                bg-white/5 border border-white/10 rounded-xl
                px-4 py-4 text-gray-300 text-sm transition
                hover:bg-white/10 hover:border-primary/40
                backdrop-blur-md
              "
            >
              {/* LEFT ICON + TEXT */}
              <div className="flex gap-3 items-center">
                <Upload className="text-primary" size={18} />
                <span className="font-medium">
                  {fileName || "Choose Profile Photo"}
                </span>
              </div>

              {/* Hidden input */}
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  // size check (optional)
                  if (file.size > maxSizeMB * 1024 * 1024) {
                    form.setError(name, {
                      message: `File must be smaller than ${maxSizeMB}MB`,
                    });
                    return;
                  }

                  setFileName(file.name);
                  field.onChange(file);
                }}
              />
            </label>
          </FormControl>

          {/* File size note */}
          <p className="text-xs text-gray-400 mt-1">
            Max file size: {maxSizeMB}MB
          </p>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
