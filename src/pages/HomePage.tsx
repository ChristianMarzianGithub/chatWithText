import { useState, FormEvent, KeyboardEvent, useRef, useEffect, ChangeEvent } from "react";

const HomePage = () => {
  const [text, setText] = useState("");
  const [submittedTexts, setSubmittedTexts] = useState<Array<{ text: string; timestamp: string }>>([]);
  const [uploadedText, setUploadedText] = useState("");
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
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

  const readFileText = (file: File) => {
    if (typeof file.text === "function") {
      return file.text();
    }

    return new Response(file).text();
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const extension = file.name.toLowerCase();
    const isText = file.type === "text/plain" || extension.endsWith(".txt");

    if (!isText) {
      setUploadError("Only TXT files are supported.");
      setUploadedText("");
      setUploadedFileName("");
      event.target.value = "";
      return;
    }

    try {
      setUploadError(null);
      setUploadedFileName(file.name);
      const fileText = await readFileText(file);
      setUploadedText(fileText);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to read file", error);
      setUploadError("Something went wrong while reading the file. Please try again.");
    }
  };

  const resetUpload = () => {
    setUploadedText("");
    setUploadedFileName("");
    setUploadError(null);
  };

  const hasUploadedFile = uploadedText.length > 0;

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome to MyApp</h1>
      <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
        Upload a plain text file (.txt) and let the AI answer questions about its content.
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
        <div className="flex min-h-[28rem] flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-glow">
          {!hasUploadedFile ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center text-slate-600 dark:text-slate-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 shadow-sm dark:bg-slate-800">
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
              <div className="space-y-2">
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Upload a text document</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Only plain text files (.txt) are supported for upload and preview.
                </p>
              </div>
              <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Upload .txt file
                <input
                  aria-label="Upload .txt file"
                  className="sr-only"
                  type="file"
                  accept=".txt,text/plain"
                  onChange={handleFileChange}
                />
              </label>
              {uploadError && <p className="text-sm text-red-600">{uploadError}</p>}
            </div>
          ) : (
            <div className="flex h-full flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{uploadedFileName}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Plain text preview</p>
                </div>
                <button
                  type="button"
                  onClick={resetUpload}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Upload another file
                </button>
              </div>
              <div className="flex-1 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                <div className="h-full overflow-y-auto rounded-lg bg-white p-4 shadow-inner dark:bg-slate-900/60">
                  <pre
                    data-testid="uploaded-file-content"
                    className="whitespace-pre-wrap break-words text-sm text-slate-800 dark:text-slate-100"
                  >
                    {uploadedText}
                  </pre>
                </div>
              </div>
              {uploadError && <p className="text-sm text-red-600">{uploadError}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
