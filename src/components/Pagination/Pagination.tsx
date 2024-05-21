import './Pagination.css'
interface PaginationProps {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages === 1) return null;


    const renderCountPage = (value: number) => {
        if (value === 0) return null
    
        return (
            <li className={`Pagination__Item`}>
            <button
                onClick={() => onPageChange(typeof value === 'number' ? value : currentPage)}
                className={`Pagination__Button ${currentPage === value ? 'Pagination__Button--Active' : ''}`}
            >
                {value}
            </button>
        </li>
        )
      }

    const renderNavigateFirstPage = () => {
    if (currentPage >= 3 && totalPages !== 3)
        return (
            <div className='Pagination__Flex'>
                {renderCountPage(1)}
                <span>...</span>
            </div>
        )
    }
    
    const renderNavigateLastPage = () => {
        if (totalPages - 2 >= currentPage && totalPages > 3)
          return (
            <>
              <span>...</span>
              {renderCountPage(totalPages)}
            </>
          )
      }

      const renderTotalPages = () => {
        return (
          <>
            {totalPages !== currentPage ? renderCountPage(currentPage - 1) : renderCountPage(currentPage - 2)}
            {totalPages !== currentPage ? renderCountPage(currentPage) : renderCountPage(currentPage - 1)}
            {totalPages >= currentPage + 1 ? renderCountPage(currentPage + 1) : renderCountPage(currentPage)}
            {currentPage === 1 && totalPages > 2 && renderCountPage(3)}
          </>
        )
      }  

    return (
        <nav>
            <ul className="Pagination">
                {renderNavigateFirstPage()}
                {renderTotalPages()}

                {renderNavigateLastPage()}
            </ul>
        </nav>
    );
};