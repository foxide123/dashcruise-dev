"use client"
import { handleFormSubmition } from "@/app/actions"; 

type ContactUsProps = {
    lg_screen_width: string;
    default_screen_width: string;
}

export default function ContactUsSection({
    lg_screen_width,
    default_screen_width
}: ContactUsProps){


    return (
        <div className="w-screen flex items-center justify-center bg-white">
            <div className={`${lg_screen_width} ${default_screen_width} border-2 border-carrot-500`}>
                <h1>Contact Us</h1>
                <form action={handleFormSubmition}>
                <input type="text" id="todo" name="todo" required />
                </form>
            </div>
        </div>
    );
}