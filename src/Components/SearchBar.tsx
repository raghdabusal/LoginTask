function SearchBar() {
  return (
    <div className="pt-4 px-4 sm:pt-[16px] sm:px-[24px] pb-8">
      <h3 className="block text-sm leading-5 font-semibold text-[#0B1935] font-[Inter] pb-2">
        Search
      </h3>
      <div className="w-full sm:w-[272px] h-10 flex shadow-sm rounded-r-[4px]">
        <input
          type="search"
          name="search"
          id="search-data"
          className="flex-grow px-3 py-2 text-[#969CA8] placeholder-[#969CA8] font-medium text-sm leading-5 rounded-l-[4px] border border-gray-300 font-inter"
          placeholder="Search by displays ID, name, email address"
        />

        <button
          type="submit"
          className="w-11 flex items-center justify-center bg-[#232B61] rounded-r-[4px] border border-[#1F2453]"
        >
          <img
            src="/src/assets/images/search.svg"
            alt="Search"
            className="w-4 h-4"
          />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
