import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";
import "./activeBtn.css";

export const WriterInfo = ({
  name,
  role,
  image,
  readTime,
  date,
}: {
  name: string;
  role: string;
  image: string;
  readTime: string;
  date: string;
}) => {
  return (
    <article className="flex gap-5 flex-wrap items-center my-5 w-full">
      <div className="flex gap-3 items-center">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full size-14 border border-orange-100/10"
        />
        <div className="flex flex-col gap-y-1 ">
          <h4 className="!text-xl tracking-wide font-bold text-neutral-400">
            {name}
          </h4>
          <p className="text-base secondary-gradient-text !tracking-[2.5px]  font-primary ">
            {role}, Gigawave
          </p>
        </div>
      </div>
      <div className="flex items-end  md:justify-end md:ml-auto">
        <span className="text-sm text-gray-400">
          {readTime} min read · {date}
        </span>
      </div>
    </article>
  );
};

export const BlogContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn([
        "text-base !mb-4 text-gray-200 font-medium leading-relaxed",
        className,
      ])}
    >
      {children}
    </p>
  );
};

export const BlogList = ({
  title,
  items,
  className,
}: {
  title?: ReactNode;
  items: ReactNode[];
  className?: string;
}) => (
  <section className="my-5">
    {title && <h5 className="text-xl font-bold  mb-4">{title}</h5>}
    <ul className={cn(["list-disc pl-6 space-y-2 text-gray-300 ", className])}>
      {items.map((item, index) => (
        <li key={index} className="text-base font-medium leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  </section>
);

export const BlogSubTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h4
      className={cn([
        "text-xl sm:text-2xl font-bold bg-gradient-to-br from-emerald-100 to-orange-200 text-transparent bg-clip-text  scale-[1.05] mx-2  !mt-8 flex !mb-5 items-center gap-2",
        className,
      ])}
    >
      {children}
    </h4>
  );
};

export const BlogKeyValue = ({
  title,
  value,
  separator,
  className,
}: {
  title: ReactNode;
  value: ReactNode;
  separator?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(["flex items-center gap-2 flex-wrap", className])}>
      <span className="font-bold bg-gradient-to-br from-emerald-100 to-orange-100/80 text-transparent bg-clip-text inline-block scale-[1.05] mx-2">
        {title}
      </span>
      {value && (
        <>
          {separator ?? " : "}
          <span className="font-medium text-slate-300">{value}</span>
        </>
      )}
    </div>
  );
};

export const BlogHighlighter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <code
      className={cn([
        "bg-white/20 p-0.5 rounded mx-0.5 font-medium",
        className,
      ])}
    >
      <span className="bg-gradient-to-br from-emerald-100 to-orange-100/80 text-transparent bg-clip-text ">
        {children}
      </span>
    </code>
  );
};

type BlogTableProps = {
  title: string;
  description: string;
  data: Array<{
    title: React.ReactNode;
    description: React.ReactNode;
  }>;
  className?: string;
};

export const BlogTable = ({
  title,
  description,
  data,
  className = "",
}: BlogTableProps) => {
  return (
    <div
      className={cn([
        "overflow-x-auto rounded-xl bg-black/30 border border-white/10",
        className,
      ])}
    >
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b border-white/10 bg-black/40">
            <th className="text-left py-2 px-4 text-orange-100 font-mono tracking-wide">
              {title}
            </th>
            <th className="text-left py-2 px-4 text-orange-100 font-mono tracking-wide">
              {description}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={cn([
                "border-b border-white/10 hover:bg-white/5 transition-colors",
                index % 2 === 0 ? "bg-black/40" : "bg-transparent",
              ])}
            >
              <td className="py-2 px-4">
                <div className="flex items-center gap-2">{item.title}</div>
              </td>
              <td className="py-2 px-4 text-zinc-400">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const BlogTips = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="">
      <div className="relative bg-gradient-to-br from-orange-400/20 via-gray-900 to-black/60 backdrop-blur-2xl border-l-4 border-orange-300 px-6 py-2 rounded-lg shadow-none flex items-center">
        <span className="mr-4 flex items-center justify-center bg-orange-00 text-white border rounded-full w-8 h-8 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M12 8v.01M12 12v.01M12 16v.01"
            />
          </svg>
        </span>
        <div>
          <span className="font-semibold text-orange-300">{title}</span>
          <span className="ml-2 italic font-medium bg-gradient-to-br from-emerald-100 to-orange-100 text-transparent bg-clip-text">
            {description}
          </span>
        </div>
      </div>
    </section>
  );
};
