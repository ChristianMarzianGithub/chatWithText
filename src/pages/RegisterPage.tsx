import { FormEvent } from 'react';

const RegisterPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
      stayLoggedIn: formData.get('stayLoggedIn') === 'on'
    };

    // Placeholder for future REST integration with POST /register
    console.log('Register submission', payload);
  };

  const handleSocialLogin = (provider: string) => {
    // Placeholder for invoking a provider-specific signup flow
    console.log(`Register with ${provider}`);
  };

  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Create your account</h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Sign up with your email address or choose one of the supported providers. We&apos;ll help you stay signed in after registration.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
          aria-describedby="register-description"
        >
          <p id="register-description" className="text-sm text-slate-600 dark:text-slate-300">
            Once connected, this form will send your details to the <code className="rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-800">/register</code> endpoint to create a profile.
          </p>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="new-password"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              autoComplete="new-password"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            <input type="checkbox" name="stayLoggedIn" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
            Keep me logged in after registration
          </label>
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:ring-offset-slate-900"
          >
            Create account
          </button>
        </form>

        <aside className="space-y-6 rounded-3xl border border-dashed border-emerald-200 bg-emerald-50/60 p-8 text-sm text-slate-700 shadow-sm transition-colors dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Social sign-up</h2>
          <p>
            Prefer to sign up with a provider you already trust? Pick an option below and we&apos;ll reuse the same stay-logged-in logic.
          </p>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleSocialLogin('Google')}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-900"
            >
              Sign up with Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin('GitHub')}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-900"
            >
              Sign up with GitHub
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin('Microsoft')}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-900"
            >
              Sign up with Microsoft
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default RegisterPage;
