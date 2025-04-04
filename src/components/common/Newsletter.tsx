"use client"

import { useForm } from "react-hook-form";
import {AlertBox} from "@/components/common/AlertBox";

export default function Newsletter() {
    const { handleSubmit, register, formState: { errors } } = useForm();

  //eslint-disable-next-line
  const onSubmit = (data: any) => console.log({ data });

  return (
    <div className="w-full bg-amber-500 ">
      <div className="flex flex-col">
        <h2>Stay Up to Date on</h2>
        <h2>Sales & News</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            placeholder="Enter your email"
          />
          {errors.email && <AlertBox message={`${errors.email.message}`}/>}
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
}
