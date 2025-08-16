// import { CustomDivider } from "@/components/custom/mini-components";
// import Image from "next/image";
// import React, { useRef } from "react";
// import * as htmlToImage from "html-to-image";

// const OpenGraphCard = () => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   const handleDownload = async () => {
//     if (cardRef.current) {
//       const dataUrl = await htmlToImage.toPng(cardRef.current, { cacheBust: true });
//       const link = document.createElement("a");
//       link.download = "opengraph-card.png";
//       link.href = dataUrl;
//       link.click();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <article
//         ref={cardRef}
//         style={{
//           background: "linear-gradient(135deg, rgba(202, 138, 4, 0.2) 0%, #000 60%, rgba(163, 163, 163, 0.2) 100%)"
//         }}
//         className="rounded-xl overflow-clip relative flex items-center gap-x-2 sm:gap-x-3 p-3 sm:p-4 w-[1200px] h-[630px]"
//       >
//         <div
//           style={{
//             background: "url('/background/noise_1.webp')",
//             opacity: "0.15",
//             backgroundSize: "108px",
//             backgroundRepeat: "repeat",
//           }}
//           className="absolute inset-0 z-[100]"
//         />
//         <Image
//           src="/images/logo.png"
//           alt="logo"
//           width={180}
//           height={180}
//           className="z-[1000] size-[512px]"
//         />
//         <div className="relative w-[1px] my-3 -left-1 sm:-left-2 mr-[10px] ">
//           <CustomDivider className="h-[150px]" />
//         </div>
//         <div className="flex flex-col gap-y-3 sm:gap-y-5 justify-center">
//           <div>
//             <h3 className="secondary-gradient-text text-[100px] !tracking-[4px] !font-normal  -pl-2 sm:-pl-4">
//               Gigawave
//             </h3>
//             <p className="text-[40px] text-neutral-400 font-medium  tracking-wide font-primary mt-5">
//               Crafting Scalable  <span className="text-white">Web</span>  &  <span className="text-white" >Mobile</span> Apps for the Digital Era
//             </p>
//           </div>
//         </div>
//       </article>
//       <button
//         onClick={handleDownload}
//         className="mt-6 px-6 py-2 rounded bg-yellow-600 text-white font-bold hover:bg-yellow-700 transition"
//       >
//         Download as PNG
//       </button>
//     </div>
//   );
// };

// export default OpenGraphCard;