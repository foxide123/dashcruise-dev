import Image from "next/image";

export default function MeetingSchedule() {
  
  return (
    <div style={{ maxWidth: "max-content" }} className="text-center mx-auto">
      <a
        target="_blank"
        href="https://calendar.app.google/jF5PcD3K141rRSLfA"
        className="cursor-pointer no-underline bg-carrot-600 rounded-xl rounded-b-none flex items-center justify-center py-10"
      >
        <p className="text-white text-2xl w-1/2 font-semibold">
          Schedule a Meeting with Us to Discuss the Details
        </p>
        <div className="flex-col ml-5 h-full">
          <div className="w-[50px] h-[50px] mb-10 relative">
            <Image src="/headset-solid.svg" layout="fill" objectFit="cover" alt="meeting icon"/>
          </div>
          <div className="w-[50px] h-[50px] mt-10 relative">
            <Image src="/calendar-solid.svg" layout="fill" objectFit="cover" alt="meeting icon"/>
          </div>
        </div>
      </a>
      <div className="rounded-xl bg-carrot-300 rounded-t-none">

        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0CqzcZ5pNy_9u4K3NdH6P_WmHMTedfoaJUGEOrAU0OIVLCzCVtPqlpRhxPcPDM3uy6N7bwfr9h?gv=true"
          className="border-0"
          width="100%"
          height="600"
          frameBorder="0"
        ></iframe>

      </div>
    </div>
  );
}
