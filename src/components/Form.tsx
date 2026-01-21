
const Form = () => {
  return (
    <form className="max-w-150 w-full lg:w-100 flex flex-col gap-5 border border-white/20 rounded-lg p-4 sm:p-6 backdrop-blur-xl bg-black/50 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="border border-form-border-dark rounded px-3 py-2 bg-form-bg-dark focus:outline-none focus:border-white/80 focus:bg-white/15 transition-colors duration-200"
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
          className="border border-form-border-dark rounded px-3 py-2 bg-form-bg-dark focus:outline-none focus:border-white/80 focus:bg-white/15 transition-colors duration-200"
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
          className="min-h-37.5 border border-form-border-dark rounded px-3 py-2 bg-form-bg-dark focus:outline-none focus:border-white/80 focus:bg-white/15 transition-colors duration-200"
          name="message"
          id="message"
          required
          placeholder="Enter your message..."
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-1 rounded-md bg-btn-bg-dark font-medium hover:bg-btn-accent-dark border border-btn-accent-dark transition-colors duration-200 ease-out"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default Form
