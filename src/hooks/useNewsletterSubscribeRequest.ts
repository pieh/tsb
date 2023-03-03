import { useState } from "react";

export function useNewsletterSubscribeRequest<T>() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onSubscribe = async (data: T) => {
    setPending(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setSuccess(true);
    } catch (error) {
      setError(error as Error);
    } finally {
      setPending(false);
    }
  };

  return {
    pending,
    success,
    error,
    onSubscribe,
  };
}