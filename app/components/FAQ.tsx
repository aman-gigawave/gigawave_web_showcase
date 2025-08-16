import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import LiquidButton from "@/components/ui/glass-button";
import CustomTitle from "@/components/custom/CustomTitle";

const items = [
  {
    id: "1",
    title: "What services does Gigawave provide?",
    content: (
      <span>
        We offer end-to-end <strong>software development services</strong>{" "}
        including <strong>Web apps</strong>, <strong>Mobile apps</strong>,{" "}
        <strong>SaaS platforms</strong>, MVP development, backend APIs, and
        UI/UX design.
      </span>
    ),
  },
  {
    id: "2",
    title: "Do you build apps for both Android and iOS?",
    content: (
      <span>
        Yes. We use <strong>Flutter</strong> to create{" "}
        <strong>cross-platform mobile apps</strong> that run on both Android and
        iOS devices with a single codebase.
      </span>
    ),
  },
  {
    id: "3",
    title: "Can you help us launch a startup MVP quickly?",
    content: (
      <span>
        Absolutely. We specialize in <strong>agile MVP development</strong> —
        helping startups <strong>launch fast</strong>, validate ideas, and scale
        efficiently.
      </span>
    ),
  },
  {
    id: "4",
    title: "What technologies and frameworks do you use?",
    content: (
      <span>
        We work with <strong>Flutter</strong>, <strong>React</strong>,{" "}
        <strong>Next.js</strong>, <strong>Supabase</strong>,{" "}
        <strong>Firebase</strong>, <strong>PostgreSQL</strong>,{" "}
        <strong>Node.js</strong>, and <strong>Cloudflare Workers</strong> to
        build modern, scalable solutions.
      </span>
    ),
  },
  {
    id: "5",
    title: "What industries do you serve?",
    content: (
      <span>
        We work with diverse industries including <strong>e-commerce</strong>,{" "}
        <strong>food delivery</strong>, <strong>healthcare</strong>,{" "}
        <strong>sports tech</strong>, <strong>social apps</strong>, and{" "}
        <strong>charity platforms</strong>.
      </span>
    ),
  },
  {
    id: "6",
    title: "Do you offer backend development and real-time integrations?",
    content: (
      <span>
        Yes. We build <strong>scalable backend systems</strong> with{" "}
        <strong>REST APIs</strong>, <strong>authentication</strong>, and
        real-time features using WebSockets and WebRTC.
      </span>
    ),
  },
  {
    id: "7",
    title: "How can I start a project with GIGAWAVE?",
    content: (
      <span>
        Email us at{" "}
        <a href="mailto:kiran@gigawave.io" className="text-blue-600 underline">
          kiran@gigawave.io
        </a>{" "}
        to schedule a free consultation and discuss your project goals.
      </span>
    ),
  },
];

const FAQ = () => {
  const Title = () => (
    <>
      <span className="font-secondary !tracking-wider bg-gradient-to-br from-emerald-100 to-orange-200 text-transparent bg-clip-text font-medium inline-block scale-[1.05] mx-2 text-3xl md:text-4xl">
        Questions?
      </span>
      <br className="md:hidden" />
      <span className="whitespace-nowrap text-xl">
        {" We've simplified the answers."}{" "}
      </span>
    </>
  );

  return (
    <div className="space-y-8 mx-auto px-5  max-w-3xl mt-10 relative">
      <CustomTitle
        headingClassName="text-2xl md:!text-4xl px-0"
        heading={<Title />}
        className="max-w-fit !leading-relaxed !p-0  "
      />

      <Accordion type="single" collapsible className="w-full space-y-6">
        {items.map((item) => (
          <LiquidButton key={item.id}>
            <AccordionItem value={item.id} key={item.id} className="px-6 py-2">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="z-[100] flex flex-1 cursor-pointer text-neutral-300 data-[state=open]:text-orange-100 items-center justify-between py-2 text-left tracking-wide  text-sm sm:text-base font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                  {item.title}
                  <Plus
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 opacity-70 transition-transform duration-200 text-orange-100 ml-3 data-[state=open]:text-white"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-2 text-white brightness-150 tracking-wide !leading-6  text-sm sm:text-base">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          </LiquidButton>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
