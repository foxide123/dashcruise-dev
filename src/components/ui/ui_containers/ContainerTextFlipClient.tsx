// src/components/ui/ContainerTextFlipClient.tsx
"use client";

import React, { useEffect, useState } from "react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

//eslint-disable-next-line
export default function ContainerTextFlipClient(props: any) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const timeout = setTimeout(() => {
      setStartAnimation(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!isHydrated || !startAnimation) {
    // Static fallback: renders on the server and on the first client render.
    // Use the first word or a predetermined word that matches the layout.
    return (
      <span className="text-carrot-500">
        {props.words && props.words[props.words.length - 1]
          ? props.words[props.words.length - 1]
          : "Brand"}
      </span>
    );
  }

  return (
      <ContainerTextFlip {...props} />
  );
}
