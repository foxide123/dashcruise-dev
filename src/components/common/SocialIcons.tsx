import Image from "next/image"
import Link from "next/link";

export function SocialIcons() {
  return (
    <div className="flex ">
        <Link href="https://www.facebook.com/profile.php?id=61574463432787&notif_id=1743636704425943&notif_t=page_user_activity&ref=notif" target="_blank" className="pr-5 cursor-pointer">
        <Image width={35} height={35} src="/Facebook.png" alt="Facebook"/>
        </Link>

        <Link href="https://www.instagram.com/perspective_135/" target="_blank" className="pr-5 cursor-pointer">
        <Image width={35} height={35} src="/Instagram.png" alt="Instagram"/>
        </Link>

        <Link href="https://www.linkedin.com/in/jakub-cezary-kolando-137491269/" target="_blank" className="pr-5 cursor-pointer">
        <Image width={35} height={35} src="/Linkedin.png" alt="Instagram"/>
        </Link>

   {/*      <Link href="h" target="_blank" className="pr-5 cursor-pointer">
        <Image src="/Twitter.png" alt="Instagram"/>
        </Link> */}
    </div>
  );
}
