// Header Component: App title and search bar container
function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* Search is now placed inside header in App.jsx layout */}
    </header>
  );
}

export default Header;