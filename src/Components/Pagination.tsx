interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

function Pagination({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}: PaginationProps) {
  return (
    <div className="flex justify-center mt-4 space-x-4">
      <button
        onClick={onPrev}
        disabled={currentPage === 1} // disable the button if you're already on page 1 ( Cant go backward)
        className="px-4 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-2">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages} // disabled if you;re already on the last page
        className="px-4 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        {" "}
        Next
      </button>
    </div>
  );
}

export default Pagination;
