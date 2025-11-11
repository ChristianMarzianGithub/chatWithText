import { FormEvent } from 'react';

const LoginPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      email: formData.get('email'),
      password: formData.get('password'),
      stayLoggedIn: formData.get('stayLoggedIn') === 'on'
    };

    // Placeholder for future REST integration with POST /login
    console.log('Login submission', payload);
  };

  const handleSocialLogin = (provider: string) => {
    // Placeholder for invoking a provider-specific login flow
    console.log(`Social login with ${provider}`);
  };

  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Log in to your account</h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Access your dashboard using your email and password or continue with a social login provider.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
          aria-describedby="login-description"
        >
          <p id="login-description" className="text-sm text-slate-600 dark:text-slate-300">
            Your credentials will be sent securely to the <code className="rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-800">/login</code> endpoint once it is connected.
          </p>
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
              autoComplete="current-password"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <input
                type="checkbox"
                name="stayLoggedIn"
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              Stay logged in on this device
            </label>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:ring-offset-slate-900"
          >
            Log in
          </button>
        </form>

        <aside className="space-y-6 rounded-3xl border border-dashed border-blue-200 bg-blue-50/60 p-8 text-sm text-slate-700 shadow-sm transition-colors dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Social login options</h2>
          <p>
            Choose one of the following providers to authenticate using OAuth. We&apos;ll handle the callback flow and keep you logged in when the integration is available.
          </p>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleSocialLogin('Google')}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-900"
            >
              Continue with Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin('GitHub')}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-900"
            >
              Continue with GitHub
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin('Microsoft')}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-900"
            >
              Continue with Microsoft
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default LoginPage;
