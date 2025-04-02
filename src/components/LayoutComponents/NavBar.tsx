"use client";

import { MenuItemsData } from "@/data/MenuItemsData";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav
      className={`z-10 caret-transparent sm:flex ${lg_screen_width} ${default_screen_width} bg-navbar backdrop-blur-md text-white h-[98px] my-[48px] rounded-4xl flex-row justify-between   hidden`}
    >
      <div className="pl-6 w-[350px] flex justify-start items-center">
        <div className=" self-center rounded-4xl p-2 flex justify-center items-center">
           {/* img instead of Image beacuse Next.js doesnt allow svg in Image without configuring: dangerouslyAllowSvg */}
          <img
            src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/c0d6674f-31fc-4fc3-cdcd-7cd049c48700/logo240x240"
            width={240}
            height={240}
            alt="logo"
          />
        </div>
      </div>
      <ul className="flex flex-row items-center text-xl font-semibold cursor-pointer">
        {MenuItemsData.map((item) => {
          const isActive =
            item.pathname === pathname ? "text-carrot-500" : "text-white";
          return (
            <li
              key={item.name}
              className={`${isActive} pr-8 last:pr-0`}
              onClick={() => router.push(item.pathname)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <div className="w-[350px] flex justify-end items-center">
        <Link href="#pricing_section" className="bg-carrot-500  mr-12 rounded-4xl px-8 py-4 flex justify-center items-center">
          See Pricing
        </Link>
      </div>
    </nav>
  );
}
