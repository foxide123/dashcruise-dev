/* "use client";

import React, { useState, useEffect, useId } from "react";
import "@/app/styles/prism-theme.css"

import {motion} from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
    words?: string[];
    interval?: number;
    className?: string;
    textClassName?: string;
    animationDuration?: number;
}

export function ContainerTextFlip({
    words = ["better", "modern", "beautiful", "awesome"],
    interval = 3000,
    className,
    textClassName,
    animationDuration = 700,
}: ContainerTextFlipProps) {
    const id = useId();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [width, setWidth] = useState(100);
    const textRef = React.useRef(null);
} */