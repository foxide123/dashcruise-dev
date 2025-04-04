import QAComponent from "./QAComponent";

export default function QASection({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  return (
    <div className="bg-white caret-transparent flex justify-center w-screen">
      <div
        className={`py-[150px] lg:text-start ${lg_screen_width} ${default_screen_width} text-center`}
      >
        <div className="text-center">
          <h3 className="text-xl font-medium text-carrot-500">
            Got Questions? We&apos;ve Got Answers!
          </h3>
          <h1 className=" font-medium text-5xl leading-15 tracking-tight">
            Frequently Asked Questions
          </h1>
        </div>

        <QAComponent />
      </div>
    </div>
  );
}
