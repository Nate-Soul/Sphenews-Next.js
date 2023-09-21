"use client";

import { createContext, useContext, useState } from "react";

const PagingContext = createContext();

export const usePagingContext = () => {
    return useContext(PagingContext);
};

export const PagingContextProvider = ({children, totalItems, itemsPerPage}) => {

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

    return (
        <PagingContext.Provider 
            value={{ 
                currentPage,
                totalPages,
                canGoNext,
                canGoPrev,
                goToNext,
                goToPrev,
                goToPage,
            }}
        >
            {children}
        </PagingContext.Provider>
    );

};