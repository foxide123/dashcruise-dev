export default function MeetingSchedule() {
  return (
    <div style={{ maxWidth: "max-content" }} className="text-center mx-auto">
      <a
        target="_blank"
        href="https://calendar.app.google/nJ81vUocCXJ48TsN7"
        className="cursor-pointer no-underline bg-carrot-600 rounded-xl rounded-b-none flex items-center justify-center py-10"
      >
        <p className="text-white text-2xl w-1/2 font-semibold">
          Schedule a Meeting with Us to Discuss the Details
        </p>
        <div className="flex-col ml-5 h-full">
          <img src="headset-solid.svg" width={50} className="mb-10" />
          <img src="/calendar-solid.svg" width={50} className="mt-10" />
        </div>
      </a>
      <div className="rounded-xl bg-carrot-300 rounded-t-none">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3u-YV1VLjT9bkgJT5nEX6x--Kq1tutrBI7PzD65l5zD7gfdvKtF78Agw21T-OmC0VErkOQd8wD?gv=true"
          className="border-0"
          width="100%"
          height="600"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}
