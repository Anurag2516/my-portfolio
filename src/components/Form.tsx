
const Form = () => {
  return (
    <form className="max-w-150 w-full lg:w-100 flex flex-col gap-5 border border-white/20 rounded-lg p-6 backdrop-blur-xl bg-black/50 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="border border-white/30 rounded px-3 py-2 bg-white/5 text-white placeholder:text-white/50 focus:outline-none focus:border-white/80 focus:bg-white/15 transition-colors duration-200"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name..."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          className="border border-white/30 rounded px-3 py-2 bg-white/5 text-white placeholder:text-white/50 focus:outline-none focus:border-white/80 focus:bg-white/15 transition-colors duration-200"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email..."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          className="min-h-37.5 border border-white/30 rounded px-3 py-2 bg-white/5 text-white placeholder:text-white/50 focus:outline-none focus:border-white/80 focus:bg-white/15 transition-colors duration-200"
          name="message"
          id="message"
          placeholder="Enter your message..."
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button type='submit' className="px-4 py-1 rounded-md bg-white/95 text-black font-medium hover:bg-white/80 cursor-pointer transition-colors duration-200 ease-out">
          Send
        </button>
      </div>
    </form>
  );
}

export default Form
