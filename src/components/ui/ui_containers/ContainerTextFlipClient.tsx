// src/components/ui/ContainerTextFlipClient.tsx
"use client";

import React, { useEffect, useState } from "react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

//eslint-disable-next-line
export default function ContainerTextFlipClient(props: any) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    // Static fallback: renders on the server and on the first client render.
    // Use the first word or a predetermined word that matches the layout.
    return (
      <span>{props.words && props.words[0] ? props.words[0] : "Brand"}</span>
    );
  }

  return <ContainerTextFlip {...props} />;
}
