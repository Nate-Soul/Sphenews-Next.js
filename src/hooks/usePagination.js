"use client";

import { useState } from "react";


const usePagination = (totalItems, itemsPerPage = 10) => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const canGoPrev  = currentPage > 1;
    const canGoNext  = currentPage < totalPages;
    
    const goToNext = () => {
        canGoNext ? setCurrentPage((prev) => prev + 1) : setCurrentPage(1);
    };

    const goToPrev = () => {
        canGoPrev ? setCurrentPage((prev) => prev - 1) : setCurrentPage(1);
    };

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        } else {
            setCurrentPage(1);
        }
    };

    return {
        currentPage,
        totalPages,
        canGoNext,
        canGoPrev,
        goToNext,
        goToPrev,
        goToPage
    }

};

export default usePagination;