import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { TechCategoryData } from "./techstackData";
import CustomMagicCard, {
  MagicCardProps,
} from "@/components/custom/CustomMagicCard";
import { Bhuvana } from "@/components/custom/ClientComponents";
import { TOOLS } from "@/lib/types";

type Props = {
  techData: TechCategoryData;
  title: string;
  magicCardProps?: MagicCardProps;
};
export const Databases = ({ techData, title, magicCardProps }: Props) => {
  const relationalDB: TOOLS[] = ["SQLITE", "POSTGRESQL"];
  const nonRelationalDB: TOOLS[] = [
    "FIRESTORE",
    "REALTIME DATABASE",
    "MONGODB",
    "REDIS",
    "DYNAMODB",
  ];

  return (
    <CustomMagicCard {...magicCardProps} className="w-full">
      <div className="">
        <p className="text-zinc-400 text-sm  font-semibold ">
          {techData.tagline}
        </p>
        <h2 className="text-xl secondary-gradient-text !mx-1 !font-primary !tracking-normal  drop-shadow mb-1 ">
          {title}
        </h2>
      </div>
      <div className="relative flex h-[270px] w-full flex-col items-center justify-center ">
        <OrbitingCircles radius={110} iconSize={50} speed={0.3}>
          {nonRelationalDB.map((item) => (
            <Bhuvana icon={item} key={item} />
          ))}
        </OrbitingCircles>
        <OrbitingCircles iconSize={60} radius={50} reverse speed={0.5}>
          {relationalDB.map((item) => (
            <Bhuvana icon={item} key={item} />
          ))}
        </OrbitingCircles>
      </div>
    </CustomMagicCard>
  );
};

export const relationalDatabases = [
  {
    name: "PostgreSQL",
    description: "Strong, scalable SQL database for structured data",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "SQLite",
    description: "Local-first database ideal for mobile and embedded apps",
    icon: "/icons/nextjs.svg",
  },
];

export const nonRelationalDatabases = [
  {
    name: "MongoDB",
    description: "Flexible NoSQL for fast-moving, schema-less data",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "Firestore",
    description: "Real-time sync for web and mobile at scale",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "Realtime Database",
    description: "Lightweight DB with instant updates across users",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "Redis",
    description: "Lightning-fast memory caching and data queues",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "KV Storage",
    description:
      "Simple key-value store designed for global low-latency access",
    icon: "/icons/nextjs.svg",
  },
];
