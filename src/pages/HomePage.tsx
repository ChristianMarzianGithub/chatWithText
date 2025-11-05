import { useState, FormEvent, KeyboardEvent, useRef, useEffect } from "react";

const HomePage = () => {
  const [text, setText] = useState("");
  const [submittedTexts, setSubmittedTexts] = useState<Array<{ text: string; timestamp: string }>>([]);
  const historyRef = useRef<HTMLDivElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!historyRef.current) return;
    historyRef.current.scrollTop = historyRef.current.scrollHeight;
  }, [submittedTexts]);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  const submitText = () => {
    if (!text.trim()) return;
    // For now just log the text; wiring to backend can be added later
    // eslint-disable-next-line no-console
    console.log("Submitted text:", text);
    setSubmittedTexts((prev) => [
      ...prev,
      {
        text,
        timestamp: new Date().toISOString(),
      },
    ]);
    // Optionally clear after submit
    setText("");
    textAreaRef.current?.focus();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitText();
  };
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome to MyApp</h1>
      <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
        Upload a pdf file and let the ai answer question about its content.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-glow min-h-[28rem]">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Upload text</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Sent text
              </h3>
              <div
                ref={historyRef}
                className="h-72 min-h-[12rem] resize-y space-y-3 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70"
              >
                {submittedTexts.length > 0 ? (
                  submittedTexts.map((submittedText, index) => (
                    <div
                      key={String(index)}
                      className="space-y-1 rounded-lg bg-white/60 p-3 shadow-sm dark:bg-slate-900/60"
                    >
                      <time className="block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {new Date(submittedText.timestamp).toLocaleString()}
                      </time>
                      <pre className="whitespace-pre-wrap break-words text-sm text-slate-700 dark:text-slate-200">
                        {submittedText.text}
                      </pre>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">No text sent yet.</p>
                )}
              </div>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              Your text
              <textarea
                ref={textAreaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                  // Submit when Alt+Enter is pressed
                  if (e.key === "Enter" && e.altKey) {
                    e.preventDefault();
                    submitText();
                  }
                }}
                rows={3}
                placeholder="Paste or type your text here..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </label>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Tip: Press Alt + Enter to submit quickly.</p>
            <div className="mt-3 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Save
              </button>
              <span className="text-sm text-slate-500 dark:text-slate-400">{text.length} characters</span>
            </div>
          </form>
        </div>
        <div className="flex min-h-[28rem] items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-100/60 p-6 text-slate-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-400">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path d="M4 16.5V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-.5" />
                <path d="m8 12 4-4 4 4" />
                <path d="M12 16V8" />
              </svg>
            </div>
            <p className="text-sm">File upload coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
