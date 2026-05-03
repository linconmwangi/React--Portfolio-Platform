// SearchBar Component: Input field for searching projects
function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      placeholder="Search Projects"
      value={value} // Controlled by state from App.jsx
      onChange={e => onChange(e.target.value)} // Update search term in App.jsx
    />
  );
}

export default SearchBar;