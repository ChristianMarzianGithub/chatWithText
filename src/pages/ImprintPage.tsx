const ImprintPage = () => {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Imprint / Legal Notice</h1>
      <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300">
        Provide the necessary legal details for your organisation here, including company name, address, trade registry
        information and contact details for regulatory purposes.
      </p>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <li><strong>Company:</strong> MyApp Ltd.</li>
        <li><strong>Address:</strong> 123 Innovation Avenue, 10001 Tech City</li>
        <li><strong>Phone:</strong> +49 0000 000000</li>
        <li><strong>Email:</strong> hello@myapp.test</li>
      </ul>
    </section>
  );
};

export default ImprintPage;
