// Declaration shim for next/types.js which is missing its .d.ts in this Next.js 16 build
declare module "next/types.js" {
  // Re-export from the main next/types module
  export type { ResolvingMetadata, ResolvingViewport } from "next/dist/lib/metadata/types/metadata-interface";
}
