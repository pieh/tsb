"use client";

import { useForm } from "react-hook-form";
import { poppins } from "utils/fonts";
import { useNewsletterSubscribeRequest } from "hooks/useNewsletterSubscribeRequest";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type FormData = {
  email: string;
};

export const NewsletterForm: React.FC = ({}) => {
  const {
    handleSubmit,
    register,
    formState: { isValid, isDirty },
  } = useForm<FormData>();

  //   const { pending, success, error, onSubscribe } =
  const { onSubscribe } = useNewsletterSubscribeRequest<FormData>();

  return (
    <form
      className={`flex flex-col w-full lg:w-auto mt-8 lg:mt-0 lg:flex-row lg:justify-end lg:h-16 ${poppins.className}`}
      onSubmit={handleSubmit(onSubscribe)}
    >
      <input
        className="h-16 lg:h-full px-6 w-full lg:w-72 mb-4 lg:mb-0"
        type="email"
        placeholder="Enter Email"
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
        className="h-16 lg:h-full w-full lg:w-72 bg-black text-white px-12 lg:ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!isValid || !isDirty}
      >
        Subscribe Now
      </button>
    </form>
  );
};
