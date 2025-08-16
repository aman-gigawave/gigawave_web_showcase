import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { TOOLS } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getIconPath =(tech : TOOLS) => {
  let icon = "";
  switch (tech.toUpperCase()) {
      case "NEXT":
          icon = "nextjs.svg";
          break;
      case "REACT":
          icon = "react.svg";
          break;
      case "FLUTTER":
          icon = "flutter.svg";
          break;
      case "TAILWIND CSS":
          icon = "tailwind.svg";
          break;
      case "FIREBASE":
          icon = "firebase.svg";
          break;
      case "CLOUDFLARE":
          icon = "cloudflare.svg";
          break;
      case "DART":
          icon = "dart.svg";
          break;
      case "POSTGRESQL":
          icon = "postgresql.svg";
          break;
      case "VERCEL":
          icon = "vercel.svg";
          break;
      case "DRIZZLE ORM":
          icon = "drizzle.svg";
          break;
      case "TYPESCRIPT":
          icon = "typescript.svg";
          break;
      case "JAVASCRIPT":
          icon = "javascript.svg";
          break;
      case "SUPABASE":
          icon = "supabase.svg";
          break;
      case "SHADCN":
          icon = "shadcn.svg";
          break;
      case "AZURE":
          icon = "azure.svg";
          break;
      case "GCP":
          icon = "gcp.svg";
          break;
      case "AWS":
          icon = "aws.svg";
          break;
       case "MONGODB":
          icon = "mongodb.svg";
          break;
       case "SQLITE" : 
          icon = "sqlite.svg";
          break;
       case "FIRESTORE" : 
          icon = "firestore.svg";
          break;
       case "REDIS" : 
          icon = "redis.svg";
          break;
       case "KV STORAGE" : 
          icon = "kv.svg";
          break;
        case "REALTIME DATABASE":
          icon = "realtime_database.svg";
          break;
        case "EXPRESS" :
            icon = "express.svg";
            break;
        case "TANSTACK" :
            icon = "tanstack.svg";
            break;
        case "THREEJS" :
            icon = "three.svg";
            break;
        case "ZOD" :
            icon = "zod.svg";
            break;
        case "ZUSTAND" :
            icon = "zustand.svg";
            break;
        case "JWT" :
            icon = "jwt.svg"
            break;
        case "REACT HOOK FORM" :
            icon = "react-hook-form.svg"
            break;
        case "REACT QUERY" :
            icon = "react-query.svg"
            break;
        case "CLOUDFLARE WORKERS" :
            icon = "cloudflare-workers.svg";
            break;
        case "POSTMAN" :
            icon = "postman.svg"
            break;
        case "ANDROID STUDIO" :
            icon = "android_studio.svg"
            break;
        case "XCODE" :
            icon = "xcode.svg"
            break;  
        case "FRAMER MOTION" :
            icon = "framer-motion.svg"
            break;
        case "HTML" :
            icon = "html.svg"
            break;
        case "CSS" :
            icon = "css.svg"
            break;
        case "SQL" :
            icon = "sql.svg";
            break;
        case "SCALAR": 
           icon = "scalar.png";
           break;
        case "AUTH0" : 
           icon = "autho0.svg";
           break;
        case "GETX" : 
           icon = "getx.svg"
           break;
        case "OPENAPI" : 
           icon = "openapi.svg";
           break;
        case "DOCKER" : 
           icon = "docker.svg";
           break;
        case "FIGMA" : 
           icon = "figma.svg";
           break;
        case "RAZORPAY" : 
           icon = "razorpay.svg";
           break;
        case "WEBSOCKETS" : 
           icon = "websockets.svg";
           break;
        case "DYNAMODB" : 
           icon = "dynamodb.svg";
           break;
      default:  
          icon = "cloud.svg";
          break;
  }

  return icon;
}