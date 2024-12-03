interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
  }

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {



  return (
    <>
    <div className="search-bar">
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    </div>
    </>
  )
}

export default SearchBar
