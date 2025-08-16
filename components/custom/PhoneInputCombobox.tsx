"use client";

import * as React from "react";

import {
  PhoneInput,
  PhoneInputCountrySelect,
  PhoneInputCountrySelectContent,
  PhoneInputCountrySelectOptions,
  PhoneInputCountrySelectTrigger,
  PhoneInputCountrySelectValue,
  PhoneInputInput,
} from "@/components/ui/phone-input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

// eslint-disable-next-line
export function PhoneInputDemo({ form }: { form: any }) {
  return (
    <div>
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <PhoneInput value={field.value} onValueChange={field.onChange}>
              <FormControl>
                <div className="flex items-center !w-full !bg-white/5 !border-white/10 border !rounded-2xl !text-white  !text-sm !h-10 sm:!h-12  !backdrop-blur-md !focus-within:ring-2 !focus-within:ring-accent/60 !transition">
                  <PhoneInputCountrySelect>
                    <PhoneInputCountrySelectTrigger className="!bg-transparent !border-none !border-r">
                      <PhoneInputCountrySelectValue />
                    </PhoneInputCountrySelectTrigger>
                    <PhoneInputCountrySelectContent>
                      <PhoneInputCountrySelectOptions />
                    </PhoneInputCountrySelectContent>
                  </PhoneInputCountrySelect>
                  <PhoneInputInput style={{ width: "100%", border: "none" }} />
                </div>
              </FormControl>
            </PhoneInput>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
