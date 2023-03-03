"use client";

import { useForm } from "react-hook-form";
import { poppins } from "utils/fonts";
import { useNewsletterSubscribeRequest } from "hooks/useNewsletterSubscribeRequest";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type FormData = {
  email: string;
  firstName?: string;
  lastName?: string;
};

export const NewsletterForm: React.FC = ({}) => {
  const {
    handleSubmit,
    register,
    formState: { isValid, isDirty },
  } = useForm<FormData>();

  const { pending, success, error, onSubscribe } =
    useNewsletterSubscribeRequest<FormData>();

  if (success) {
    return (
      <div className="h-12 text-black text-xl flex items-center">
        Thanks for subscribing! Please check your inbox.
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-12 text-black text-xl flex items-center">
        Oops! You are already subscribed, no need to subscribe again :)
      </div>
    );
  }

  return (
    <form
      className={`flex flex-col xl:flex-row gap-4 ${poppins.className}`}
      onSubmit={handleSubmit(onSubscribe)}
    >
      <input
        className="px-6 w-full bg-[#7EBDD5] rounded-full border-2 border-white text-white placeholder-current focus:outline-white"
        type="firstName"
        placeholder="First Name"
        {...register("firstName", { required: true })}
      />

      <input
        className="px-6 w-full bg-[#7EBDD5] rounded-full border-2 border-white text-white placeholder-current focus:outline-white"
        type="email"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: {
            value: EMAIL_REGEX,
            message: "Please enter a valid email",
          },
        })}
      />

      <button
        type="submit"
        className="rounded-full px-12 border-2 border-white text-[#7EBDD5] bg-white focus:bg-slate-50 placeholder-current focus:outline-white disabled:cursor-not-allowed disabled:opacity-70"
        disabled={!isValid || !isDirty || pending}
      >
        Send
      </button>
    </form>
  );
};
