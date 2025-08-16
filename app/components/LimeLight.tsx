"use client";
import { cn } from "@/lib/utils";
import React, {
  useState,
  useRef,
  useLayoutEffect,
  cloneElement,
  useMemo,
  useEffect,
} from "react";
import { FolderOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-mobile";

interface NavItem {
  id: string | number;
  icon: React.ReactElement<
    React.SVGProps<SVGSVGElement> & { className?: string }
  >;
  label?: string;
  onClick?: () => void;
}

interface LimelightNavProps {
  items?: NavItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
}

export const LimelightNav = ({
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
}: LimelightNavProps) => {
  const router = useRouter();
  const [pathname, setPathname] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1200px)");
  // const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(
    () => [
      {
        id: "home",
        icon: (
          <Image src={"/icons/home.svg"} alt="home" width={20} height={20} />
        ),
        label: "Home",
        onClick: () => {
          router.replace("/");
          document
            .getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        id: "projects",
        icon: <FolderOpen />,
        label: "Projects",
        onClick: () => router.replace("/projects"),
      },
      {
        id: "blogs",
        icon: (
          <Image src={"/icons/blogs.svg"} alt="home" width={20} height={20} />
        ),
        label: "Blogs",
        onClick: () => router.replace("/blogs"),
      },
      {
        id: "contact",
        icon: (
          <Image
            src={"/icons/contactus.svg"}
            alt="home"
            width={20}
            height={20}
          />
        ),
        label: "Contact Us",
        onClick: () => {
          router.replace("/#contactus");
          document
            .getElementById("contactus")
            ?.scrollIntoView({ behavior: "smooth" });
        },
      },
    ],
    [router]
  );

  // Determine active index based on current pathname
  const routeToIndex = useMemo(() => {
    console.log({ pathname });
    if (pathname.includes("contactus")) return 3;
    if (pathname.includes("/projects")) return 1;
    if (pathname.includes("/blogs")) return 2;
    if (pathname === "/") return 0;
    return 0;
  }, [pathname]);

  const [activeIndex, setActiveIndex] = useState(routeToIndex);

  // Keep activeIndex in sync with route changes
  React.useEffect(() => {
    setActiveIndex(routeToIndex);
  }, [routeToIndex]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.href);
    }
  }, []);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];

    if (limelight && activeItem) {
      const itemRect = activeItem.getBoundingClientRect();
      const navRect = activeItem.parentElement?.getBoundingClientRect();

      // Calculate width, height, left, and top relative to nav
      const width = itemRect.width;
      const height = itemRect.height;
      const left = itemRect.left - (navRect?.left ?? 0);
      const top = itemRect.top - (navRect?.top ?? 0);

      limelight.style.width = `${width}px`;
      limelight.style.height = `${height}px`;
      limelight.style.left = `${left}px`;
      limelight.style.top = `${top}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items, isMobile, isTablet]);

  if (items.length === 0) {
    return null;
  }

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    setActiveIndex(index);
    onTabChange?.(index);
    itemOnClick?.();
  };

  return (
    <header className="fixed z-[1000000000] left-1/2 -translate-x-1/2   bottom-5 rounded-full">
      <nav
        className={cn([
          "relative inline-flex justify-between items-center h-12 md:h-14 rounded-lg bg-card text-foreground border px-3 backdrop-blur-sm w-[300px] md:w-[500px] ",
          className,
        ])}
      >
        {items.map(({ id, icon, label, onClick }, index) => (
          <Link
            key={id}
            href={
              id === "home"
                ? "/"
                : id === "projects"
                ? "/projects"
                : id === "blogs"
                ? "/blogs"
                : "/#contactus"
            }
            prefetch={true}
            ref={(el) => {
              navItemRefs.current[index] = el;
            }}
            className={cn([
              `relative z-20 flex h-full cursor-pointer items-center justify-center p-3 md:p-4  md:gap-2 ${iconContainerClassName}`,
              index === items.length - 1 &&
                "ml-2 border !h-fit !py-1.5 rounded-full bg-gray-200 text-gray-700 shadow-[0px_0px_40px_0_#f5f5f5d3] opacity-90 border-none ",
            ])}
            onClick={() => handleItemClick(index, onClick)}
            aria-label={label}
          >
            {cloneElement(icon, {
              className: `w-6 h-6 md:w-6 md:h-6 transition-opacity duration-100 ease-in-out ${
                activeIndex === index ? "opacity-100" : "opacity-40"
              } ${icon.props.className || ""} ${iconClassName || ""} ${
                index === items.length - 1 && "opacity-100"
              }`,
            })}
            {label && (
              <span
                className={cn([
                  `text-sm font-bold transition-opacity duration-100 ease-in-out text-nowrap`,
                  activeIndex === index
                    ? "opacity-100 block ml-2 md:ml-0"
                    : "opacity-40 hidden md:block",
                  index === items.length - 1 && "opacity-100",
                ])}
              >
                {label}
              </span>
            )}
          </Link>
        ))}

        <div
          ref={limelightRef}
          className={`
            absolute z-10  my-auto
            bg-white/20
            backdrop-blur-xl
            border border-white/30
            overflow-hidden
            ${
              isReady &&
              "transition-[left,top,width,height] duration-500 ease-[cubic-bezier(.68,-0.55,.27,1.55)]"
            }
            ${limelightClassName}
            !shadow-[0_0_32px_0_rgb(141, 94, 8)] !p-0 !h-[39px] !top-1/2 -translate-y-1/2
            rounded-full !px-6
          `}
          style={{
            left: "-999px",
            width: "44px",
            opacity: 0.95,
            background:
              "linear-gradient(135deg,rgba(141, 94, 8,0.1) 0%, rgba(141, 94, 8,0.4) 100%)",
            border: "1.5px solid rgba(255,255,255,0.3)",
            boxShadow: "0 8px 32px 0 rgba(141, 94, 8,0.4)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            transition:
              "left 0.5s cubic-bezier(.68,-0.55,.27,1.55), top 0.5s cubic-bezier(.68,-0.55,.27,1.55), width 0.5s cubic-bezier(.68,-0.55,.27,1.55), height 0.5s cubic-bezier(.68,-0.55,.27,1.55)",
          }}
        ></div>
      </nav>
    </header>
  );
};
