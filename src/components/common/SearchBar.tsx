interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
  }

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {



  return (
    <>
    <div>
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-bar"
    />
    </div>
    </>
  )
}

export default SearchBar
