const ContactPage = () => {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Contact</h1>
      <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
        Have a question or want to work together? Fill out the form below and our team will get back to you shortly.
      </p>
      <form className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Full name
          <input
            type="text"
            name="name"
            placeholder="Jane Doe"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Email address
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Message
          <textarea
            name="message"
            rows={4}
            placeholder="How can we help?"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            required
          />
        </label>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Send message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
