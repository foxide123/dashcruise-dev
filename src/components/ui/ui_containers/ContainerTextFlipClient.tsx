// src/components/ui/ContainerTextFlipClient.tsx
"use client";

import dynamic from "next/dynamic";
import React from "react";

const DynamicContainerTextFlip = dynamic(
  () =>
    import("@/components/ui/container-text-flip").then(
      (mod) => mod.ContainerTextFlip
    ),
  {
    ssr: false,
    // Provide a fallback until the component hydrates
    loading: () => <span>Brand</span>,
  }
);

//eslint-disable-next-line
export default function ContainerTextFlipClient(props: any) {
  return <DynamicContainerTextFlip {...props} />;
}
