import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { FC, InputHTMLAttributes, ReactNode } from "react";
import { Control, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

export type TextFieldProps<T extends FieldValues> = {
  control?: Control<T>;
  label?: ReactNode;
  subLabel?: ReactNode;
  description?: string;
  placeholder?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  showTextArea?: boolean;
  required?: boolean;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  labelClassName?: string;
  bottomDescription?: string;
  showCount?: boolean;
  maxLength?: number;
  noDecimal?: boolean;
  leadingZero?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line
const CustomInput: FC<TextFieldProps<any>> = ({
  control,
  required,
  label,
  description,
  leading,
  trailing,
  showTextArea,
  subLabel,
  name,
  placeholder,
  type,
  className,
  onChange,
  labelClassName,
  bottomDescription,
  showCount,
  maxLength = 100,
  noDecimal = false,
  leadingZero = true,
  ...props
}) => {
  return control ? (
    <FormField
      control={control}
      name={name as string}
      render={({ field }) => {
        // Ensure field.value is never null
        const value = field.value === null ? "" : field.value;

        return (
          <FormItem className={cn("w-full  ", className)}>
            <div className={cn([props.disabled && "text-secondary/40"])}>
              {label && (
                <FormLabel
                  className={cn([
                    "ml-1 bg-gradient-to-br from-orange-100 via-orange-100 to-orange-200 text-transparent bg-clip-text relative font-medium text-base",
                    labelClassName,
                  ])}
                >
                  {label}
                  {subLabel && (
                    <span className="text-black/40 text-sm ml-1">
                      {subLabel}
                    </span>
                  )}
                  {required && <span className="text-red-300 text-sm">*</span>}
                </FormLabel>
              )}
              {description && (
                <FormDescription className="flex items-center gap-x-1 ml-1 text-[11px] text-black/40 font-medium">
                  {description}
                </FormDescription>
              )}
            </div>
            <FormControl>
              {showTextArea ? (
                <Textarea
                  {...field}
                  value={value} // Ensure value is not null
                  maxLength={maxLength}
                  rows={3}
                  placeholder={placeholder}
                  required={required}
                  style={{
                    background: "rgba(30,30,30,0.5)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 16,
                    color: "#fff",
                    padding: "16px 14px",
                    fontSize: 16,
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.18)",
                    outline: "none",
                    minHeight: 120,
                  }}
                  className={cn([
                    "no-spinner w-full placeholder:text-white/60 focus-within:!outline-none shadow-none outline-none !text-sm !p-3 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0  text-neutral-200  bg-clip-text resize-none !mb-0",
                    props.disabled &&
                      "bg-primary/5 text-secondary/50 border-primary/10 pointer-events-none",
                  ])}
                />
              ) : (
                <div
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(30,30,30,0.5)",
                  }}
                  className={cn([
                    "flex items-center gap-x-3 w-full border rounded-2xl  px-4 h-11 bg-white/5",
                    props.disabled && "bg-primary/5 text-secondary/80",
                  ])}
                >
                  {leading && <span className="">{leading}</span>}

                  <Input
                    {...field}
                    value={value ?? ""} // Ensure value is not null
                    placeholder={placeholder}
                    {...props}
                    required={false}
                    type={type}
                    style={{
                      background: "transparent",
                      border: "none",
                      fontSize: 16,
                      padding: 0,
                      outline: "none",
                      boxShadow: "none",
                    }}
                    className="no-spinner w-full placeholder:text-white/60 focus-within:!outline-none shadow-none outline-none !text-sm !p-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0  text-neutral-200  bg-clip-text"
                    onChange={(v) => {
                      if (v.target.value.length <= maxLength) {
                        if (type === "number") {
                          // Only allow digits, preserve leading zeros

                          const digitsOnly = noDecimal
                            ? v.target.value.replace(/^0+|[^0-9]/g, "")
                            : leadingZero
                            ? v.target.value.replace(/[^0-9.]/g, "")
                            : v.target.value.replace(/^0+(?=\d)|[^0-9.]/g, "");
                          field.onChange(digitsOnly);
                          return;
                        }
                        if (onChange) {
                          onChange(v);
                        } else {
                          field.onChange(v.target.value);
                        }
                      }
                    }}
                    autoFocus={false}
                  />
                  {trailing && <span className="">{trailing}</span>}
                </div>
              )}
            </FormControl>
            <div className="flex text-xs text-secondary/70 items-center justify-between">
              <p>{bottomDescription}</p>
              {showCount && (
                <p>
                  {field.value?.length || 0}/{maxLength}
                </p>
              )}
            </div>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  ) : (
    <div className={cn(["space-y-2", className])}>
      {label && (
        <Label
          className={cn([
            " text-start !text-secondary text-base text-medium",
            labelClassName,
          ])}
        >
          {label}
          {subLabel && (
            <span className="text-black/40 text-sm ml-1">{subLabel}</span>
          )}
          {required && <span className="text-red-600  text-sm ml-1">*</span>}
        </Label>
      )}
      <div
        style={{
          background: "rgba(30,30,30,0.7)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          boxShadow: "0 2px 12px 0 rgba(0,0,0,0.18)",
          padding: "0 14px",
          height: 48,
        }}
        className={cn(["flex items-center gap-x-3 w-full", className])}
      >
        {leading && <span className="">{leading}</span>}
        <Input
          placeholder={placeholder}
          {...props}
          required={required}
          type={type}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: 16,
            padding: 0,
            outline: "none",
            boxShadow: "none",
          }}
          className="no-spinner w-full placeholder:text-white/60 focus-within:!outline-none shadow-none outline-none !text-sm !p-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={onChange}
        />
        {trailing && <span className="">{trailing}</span>}
      </div>
    </div>
  );
};

export default CustomInput;
