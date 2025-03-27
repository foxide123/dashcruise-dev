"use client"

import dynamic from "next/dynamic";

const QASection = dynamic(() => import("./QASection"), {ssr:false})
export default function QAWrapper({
    lg_screen_width,
    default_screen_width,
  }: {
    lg_screen_width: string;
    default_screen_width:string;
  }) {
    return <QASection lg_screen_width={lg_screen_width} default_screen_width={default_screen_width}/>
  }