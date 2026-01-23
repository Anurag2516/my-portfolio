import { useRef, useState, type FormEvent } from "react";
import { sendContactEmail } from "../utils/emailjs";

type FormStatus = "idle" | "sending" | "success" | "error";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");
    const { success } = await sendContactEmail(form.current);

    if (success) {
      setStatus("success");
      form.current.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <form
      ref={form}
      className="max-w-150 w-full lg:w-100 flex flex-col gap-5 border border-black/20 dark:border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-xl bg-white/90 dark:bg-black/50 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="placeholder:text-black/50 dark:placeholder:text-white/50 border border-black/20 dark:border-white/30 rounded px-3 py-2 dark:bg-white/5 focus:outline-none focus:border-black dark:focus:border-white/80 dark:focus:bg-white/15 transition-colors duration-200"
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter your name..."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          className="placeholder:text-black/50 dark:placeholder:text-white/50 border border-black/20 dark:border-white/30 rounded px-3 py-2 dark:bg-white/5 focus:outline-none focus:border-black dark:focus:border-white/80 dark:focus:bg-white/15 transition-colors duration-200"
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter your email..."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          className="min-h-37.5 placeholder:text-black/50 dark:placeholder:text-white/50 border border-black/20 dark:border-white/30 rounded px-3 py-2 dark:bg-white/5 focus:outline-none focus:border-black dark:focus:border-white/80 dark:focus:bg-white/15 transition-colors duration-200"
          name="message"
          id="message"
          required
          placeholder="Enter your message..."
        ></textarea>
      </div>

      {status === "success" && (
        <div className="bg-green-400 px-3 py-2 rounded w-fit">
          <p className="text-white text-sm">Message sent successfully! ✓</p>
        </div>
      )}
      {status === "error" && (
        <div className="rounded w-fit bg-red-500 p-2">
          <p className="text-white text-sm">
            Failed to send message. Please try again.
          </p>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-4 py-1 cursor-pointer rounded-md bg-white hover:bg-gray-200 dark:bg-btn-bg-dark dark:hover:bg-btn-accent-dark dark:border dark:border-btn-accent-dark shadow-box dark:shadow-none hover:shadow-box-hover transition-colors duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default Form;
