import { PaginationProps } from "../../interfaces/interfaces";
import { PaginationContainer } from "./Pagination.styled";

export const Pagination = ({
  setCurrentPage,
  currentPage,
  lastIndex,
  officeList,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <span>Сторінка {currentPage}</span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={lastIndex >= officeList.length}
      >
        {">"}
      </button>
    </PaginationContainer>
  );
};
