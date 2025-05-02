import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="px-8 py-5 border-b border-primary-900">
    <div className="flex items-center justify-between max-w-7xl mx-auto">
    <Logo />
    <Navigation />
    </div>
    </header>
  );
}

export default Header;
