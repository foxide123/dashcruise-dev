// components/LayoutComponents/NavWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import { ConsentProvider } from "@/context/ConsentContext";

const lg_screen_width = "lg:w-[75vw]";
const default_screen_width = "w-[85vw]";

export default function NavWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNav = pathname === "/subscription/success";

  return (
    <>
      {!hideNav && (
        <div className="bg-black w-screen flex justify-center">
          <NavBar
            lg_screen_width={lg_screen_width}
            default_screen_width={default_screen_width}
          />
        </div>
      )}
      <ConsentProvider>{children}</ConsentProvider>
    </>
  );
}
