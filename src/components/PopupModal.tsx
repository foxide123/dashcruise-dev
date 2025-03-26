"use client";

import { useEffect } from "react";

export default function PopupModal({
  message = "Message sent successfully",
}: {
  message?: string;
}) {
  useEffect(() => {
    const modal = document.getElementById("myModal");
    const span = document.getElementById("close");

    span!.onclick = () => (modal!.style.display = "none");

    window.onclick = (event) => {
      if (event.target == modal) {
        modal!.style.display = "none";
      }
    };
    // Optional: Cleanup listeners on unmount
    return () => {
      span!.onclick = null;
      window.onclick = null;
    };
  }, []);

  return (
    <div
      id="myModal"
      className="display-none fixed z-1 pt-25 l-0 t-0 w-full h-full overflow-auto bg-gray-300"
    >
      {/*} Modal content */}
      <div className="bg-white m-auto p-5 border-2 border-black w-4/5">
        <span
          id="close"
          className="text-gray-300 float-right text-3xl font-bold hover:text-black cursor-pointer"
        >
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
}
