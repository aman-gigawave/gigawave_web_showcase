"use client";
import React, { ReactNode } from "react";
import { Form, FormLabel, FormMessage } from "@/components/ui/form";
import CustomInput from "@/components/custom/CustomInputs";
import { useForm, useWatch } from "react-hook-form";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Uncomment after installing
import CustomTitle from "@/components/custom/CustomTitle";
import { TextureCardContent } from "@/components/ui/texture-card";
import { CustomButton } from "./ActiveButton";
import { Checkbox } from "@/components/ui/checkbox";
import { Linkedin, Mail, MessageCircleDashed } from "lucide-react";
import { Sparkles } from "./sparkes";
import { CustomDivider } from "@/components/custom/mini-components";
import Image from "next/image";
import Link from "next/link";
import {
  InquirySchema,
  InquiryType,
  SubscribeSchema,
  SubscribeType,
} from "@/models/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { sendMessage } from "@/services/inquiries";
import { toast } from "sonner";
import { subscribe } from "@/services/subscriber";
import { PhoneInputDemo } from "@/components/custom/PhoneInputCombobox";

const services = [
  "Website Development",
  "Mobile App Development",
  "Backend/API Development",
  "Hire a Developer / Resource",
  "Project Collaboration",
  "Something Else",
];

const BusinessCard = () => {
  const ContactInfo = ({
    icon,
    link,
    title,
  }: {
    icon: ReactNode;
    link: string;
    title: string;
  }) => {
    return (
      <Link
        href={link}
        target="_blank"
        className="text-xs sm:text-sm flex items-center gap-x-1 sm:gap-x-2"
      >
        <span> {icon}</span>
        <span className="text-neutral-400 font-semibold text-sm xl:text-base">
          {" "}
          {title}
        </span>
      </Link>
    );
  };

  return (
    <article className="rounded-xl overflow-clip bg-gradient-to-br from-yellow-700/20 via-black to-neutral-400/20 max-w-md lg:max-w-xl mx-auto relative flex flex-col gap-x-2 sm:gap-x-3 p-3 sm:p-4">
      <div
        style={{
          background: "url('/background/noise_1.webp')",
          opacity: "0.15",
          backgroundSize: "108px",
          backgroundRepeat: "repeat",
        }}
        className="absolute inset-0 "
      />
      <div className="flex gap-x-2 sm:gap-x-3">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={180}
          height={180}
          className="opacity-60 z-[1000] size-[100px] sm:size-[120px] xl:size-[180px]"
        />
        <div className="relative w-[1px] my-3 -left-1 sm:-left-2">
          <CustomDivider />
        </div>
        <div className="flex flex-col gap-y-3 sm:gap-y-5 justify-center z-50">
          <div>
            <h3 className="secondary-gradient-text !text-lg sm:!text-xl xl:!text-2xl font-extrabold -pl-2 sm:-pl-4">
              Sai kiran chowdarapu
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-medium font-serif tracking-wide pl-1 mt-1">
              C T O{" "}
            </p>
          </div>
          <div className="hidden md:block space-y-1.5 sm:space-y-2.5">
            <ContactInfo
              icon={<Mail className="size-3 sm:size-3.5 text-neutral-400" />}
              title="kiran@gigawave.io"
              link="mailto:kiran@gigawave.io"
            />
            <ContactInfo
              icon={
                <MessageCircleDashed className="size-3 sm:size-3.5 text-neutral-400" />
              }
              title="+91 6303467186"
              link="https://wa.me/916303467186"
            />
            <ContactInfo
              icon={
                <Linkedin className="size-3 sm:size-3.5 text-neutral-400" />
              }
              title="sai-kiran-chowdarapu-51b980178"
              link="https://www.linkedin.com/in/sai-kiran-chowdarapu-51b980178/"
            />
          </div>
          
        </div>
      </div>
      <div className=" md:hidden space-y-1.5 sm:space-y-2.5 pl-5 mt-2">
        <ContactInfo
          icon={<Mail className="size-4 sm:size-5 text-neutral-400" />}
          title="kiran@gigawave.io"
          link="mailto:kiran@gigawave.io"
        />
        <ContactInfo
          icon={
            <MessageCircleDashed className="size-4 sm:size-5 text-neutral-400" />
          }
          title="+91 6303467186"
          link="https://wa.me/916303467186"
        />
        <ContactInfo
          icon={<Linkedin className="size-4 sm:size-5 text-neutral-400" />}
          title="sai-kiran-chowdarapu-51b980178"
          link="https://www.linkedin.com/in/sai-kiran-chowdarapu-51b980178/"
        />
      </div>
    </article>
  );
};

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm<InquiryType>({
    resolver: zodResolver(InquirySchema),
    defaultValues: {
      services: [],
    },
  });

  const subscribeForm = useForm<SubscribeType>({
    resolver: zodResolver(SubscribeSchema),
  });

  const selectedServices = useWatch({
    control: form.control,
    name: "services",
  });

  const onSubmit = async (data: InquiryType) => {
    console.log(data);
    try {
      setIsSubmitting(true);
      const res = await sendMessage(data);
      form.reset({ services: [], message: "" });
      toast.success(res.message);
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setIsSubmitting(false);
  };

  const submitSubscribe = async (data: SubscribeType) => {
    console.log(data);
    try {
      setIsSubmitting(true);
      const res = await subscribe(data);
      subscribeForm.reset({ email: "" });
      toast.success(res.message);
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setIsSubmitting(false);
  };

  return (
    <div
      id="contactus"
      className="relative mt-6 lg:mt-0 min-h-screen text-white p-2 sm:p-4 md:p-6 overflow-x-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12">
        <div className="flex-1 flex flex-col justify-center gap-6 sm:gap-8">
          <CustomTitle
            pageName="Contact"
            heading={
              <>
                We&apos;re Just a{" "}
                <span className="secondary-gradient-text">Message</span> Away!
              </>
            }
            description={
              <>
                Whether you have a new idea, need a dedicated tech team, or want
                to collaborate.{" "}
                <span className="font-semibold  bg-gradient-to-br from-emerald-100 to-orange-200 text-transparent bg-clip-text">
                  We usually respond in a few hours—and often within minutes!
                </span>
              </>
            }
          />
          <BusinessCard />
        </div>
        <CustomDivider className="static h-screen opacity-50 hidden lg:block" />
        <div className="relative w-full max-w-xl lg:max-w-md xl:max-w-xl backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6 md:p-9 flex flex-col gap-4 sm:gap-6 mx-auto overflow-clip bg-gradient-to-br from-yellow-700/10 via-black to-neutral-400/20 border border-orange-100/20 h-fit">
          <div
            style={{
              background: "url('/background/noise_1.webp')",
              opacity: "0.1",
              backgroundSize: "108px",
              backgroundRepeat: "repeat",
            }}
            className="absolute inset-0 -z-10"
          />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, (e) => console.log({ e }))}
              className="flex flex-col gap-4 sm:gap-4"
            >
              <CustomInput
                label="Full Name"
                placeholder="e.g., Sai Kiran"
                required
                maxLength={80}
                control={form.control}
                name="name"
              />
              <CustomInput
                label="Email Address"
                placeholder="e.g., kiran@gigawave.io"
                required
                type="email"
                maxLength={80}
                control={form.control}
                name="email"
              />

              <div>
                <FormLabel className="ml-1 bg-gradient-to-br from-orange-100 via-orange-100 to-orange-200 text-transparent bg-clip-text relative font-medium text-base mb-2">
                  Phone Number <span className="text-red-300">*</span>
                </FormLabel>
                <PhoneInputDemo form={form} />
              </div>
              <CustomInput
                label="Your Message"
                placeholder="Share your idea, requirement, or question here..."
                showTextArea
                required
                maxLength={1000}
                control={form.control}
                name="message"
              />
              <div>
                <Label className="ml-1 !mt-0 bg-gradient-to-br from-orange-100 via-orange-100 to-orange-200 text-transparent bg-clip-text relative font-medium text-base">
                  Services Interested In
                  <span className="text-red-300 ml-1">*</span>
                </Label>
                <div className="flex items-center flex-wrap gap-2 mt-2 sm:mt-3">
                  {services.map((service) => (
                    <div
                      key={service}
                      className="flex flex-row items-start space-x-2 sm:space-x-3 space-y-0"
                    >
                      <div className="group relative mt-1">
                        <label
                          className={cn([
                            `flex items-center gap-2 sm:gap-3 bg-black/10 backdrop-blur-md rounded-full border px-3 sm:px-4  py-1 sm:py-2 font-medium cursor-pointer text-xs sm:text-sm  transition-all duration-300 hover:shadow-lg group-hover:scale-[1.02]`,
                            selectedServices?.includes(service)
                              ? "border-primary text-primary !font-bold bg-gradient-to-br from-orange-100/10 to-primary/20 hover:border-primary/80 shadow-white"
                              : "border-white/20 text-gray-400 hover:bg-white/10 hover:border-white !font-medium",
                          ])}
                        >
                          <Checkbox
                            value={service}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                form.setValue(
                                  "services",
                                  [...form.getValues("services"), service],
                                  {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                    shouldTouch: true,
                                  }
                                );
                              } else {
                                form.setValue(
                                  "services",
                                  form
                                    .getValues("services")
                                    .filter((s) => s !== service),
                                  {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                    shouldTouch: true,
                                  }
                                );
                              }
                            }}
                            className="hidden data-[state=checked]:bg-primary data-[state=checked]:border-primary/80 border-white/30 size-4 sm:size-5"
                          />
                          <span className="flex-1 leading-relaxed text-white/60 !font-semibold">
                            {service}
                          </span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <FormMessage className="text-red-400 text-xs sm:text-sm mt-2" />
              </div>
              <CustomButton
                onClick={() => {}}
                variant="secondary"
                title="Send Message"
                className="w-full mt-5"
                isPending={isSubmitting}
              />
            </form>
          </Form>
        </div>
      </div>

      <TextureCardContent className="relative z-10 max-w-6xl !mx-auto m-2 sm:m-4 py-6 sm:py-8 px-3 sm:px-4 md:px-6 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        <Sparkles
          density={50}
          speed={1.2}
          size={1.2}
          direction="top"
          opacitySpeed={10}
          color="#97cedac4"
          className="absolute bottom-0 h-full w-full"
        />
        <div>
          <div className="text-primary text-lg sm:text-xl mb-2 font-bold">
            Subscribe to Our Weekly Tech Blogs
          </div>
          <div className="text-[#b0b8c1] text-xs sm:text-sm mb-3">
            Stay updated with real-world insights from our projects:
            <br />
            Tech stacks we use, Product challenges and how we solve them, Best
            practices in development
          </div>
        </div>
        <Form {...subscribeForm}>
          <form
            onSubmit={subscribeForm.handleSubmit(submitSubscribe)}
            className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] flex-1 items-center gap-2 sm:gap-3 mt-2 w-full"
          >
            <CustomInput
              placeholder="Enter your email to subscribe"
              type="email"
              control={subscribeForm.control}
              name="email"
              className="flex-1 w-full z-50"
            />
            <CustomButton
              title="Subscribe"
              onClick={() => {}}
              variant="destructive"
              isPending={isSubmitting}
            />
          </form>
        </Form>
      </TextureCardContent>
    </div>
  );
};

export default ContactUs;
