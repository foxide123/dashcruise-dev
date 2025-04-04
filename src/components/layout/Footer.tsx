import Newsletter from "@/components/common/Newsletter"

export default function Footer({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  return (
    <div className="w-screen pt-[117px] pb-[58px] bg-black flex flex-col justify-center items-center">
      <div className={`${lg_screen_width} ${default_screen_width}`}>
        <Newsletter/>
        <p className="text-white">Copyright&thinsp;@ 2025 Dashcruisedev.com. All Rights Reserved</p>
      </div>
    </div>
  );
}
