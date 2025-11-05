const faqs = [
  {
    question: 'What technologies does this template use?',
    answer: 'React with TypeScript, Vite, TailwindCSS and Headless UI for accessible components.'
  },
  {
    question: 'Is dark mode supported?',
    answer: 'Yes, dark mode preferences are persisted and accessible via keyboard navigation.'
  },
  {
    question: 'Can I customise the layout?',
    answer: 'Absolutely. Components are organised for quick iteration and easy extension.'
  }
];

const FAQPage = () => {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition open:border-blue-200 open:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:open:border-blue-500/40 dark:open:bg-slate-900/60"
          >
            <summary className="cursor-pointer text-lg font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
