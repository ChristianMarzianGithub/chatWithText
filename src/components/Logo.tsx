import logoUrl from '../assets/logo.svg';

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src={logoUrl} alt="MyApp logo" className="h-10 w-10" />
    <span className="text-lg font-semibold tracking-tight">MyApp</span>
  </div>
);

export default Logo;
