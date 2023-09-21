"use client"

import { usePagingContext } from "@/context/PagingContext"

const Pagination = () => {

  const {
    currentPage,
    totalPages,
    canGoNext,
    canGoPrev,
    goToPrev,
    goToNext,
    goToPage
  } = usePagingContext();

  return (
    <>
      {totalPages <= 1 || isNaN(totalPages) ? (
        <></>
      ) : (
        <nav className="flex items-center justify-between mt-14">
          <ul className="flex items-center justify-center gap-3">
            <li 
              className="page-link" 
              onClick={goToPrev}
              disabled={!canGoPrev}
            >
              <span className="bi-chevron-left"></span>
            </li>
            {
              Array.from({length: totalPages}, (_, index) => (
                <li 
                  key={index} 
                  className={`page-link ${(currentPage === index + 1) ? 'current' : ''}`}
                  onClick={() => goToPage(index + 1)}
                  disabled={index + 1 === currentPage}
                > 
                  {index + 1}
                </li>
              ))
            }
            <li 
              className="page-link" 
              onClick={goToNext}
              disabled={!canGoNext}
            >
              <span className="bi-chevron-right"></span>
            </li>
          </ul>
          <span>Showing page {currentPage} of {totalPages}</span>
        </nav>
      )}
    </>
  )
}

export default Pagination
