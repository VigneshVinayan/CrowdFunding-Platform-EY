import React, { useRef } from "react";
import _ from "lodash";
import styles from "./styles/paginate.module.css";
import classNames from "classnames"; // For cleaner class handling

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const ref = useRef();

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount <= 1) return null; // Hide pagination if only 1 page

  const pages = _.range(1, pagesCount + 1);

  // Handle scrolling (if needed for many pages)
  const handleScroll = (direction) => {
    if (ref.current) {
      ref.current.scrollLeft += direction === "left" ? -40 : 40;
    }
  };

  return (
    <div className={styles.paginateSection}>
      <nav className={styles.nav} aria-label="Pagination Navigation">
        <ul className={`pagination ${styles.ul}`} ref={ref}>
          {pages.map((page) => (
            <li
              key={page}
              className={classNames("page-item", {
                active: page === currentPage,
              })}
            >
              <button
                className={classNames("page-link", {
                  [styles.active]: page === currentPage,
                  [styles.inactive]: page !== currentPage,
                })}
                onClick={() => onPageChange(page)}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Enable scroll navigation for large page counts */}
      {pagesCount > 6 && (
        <div className={styles.scroll}>
          <button
            className={`btn btn-success m-2 ${styles.active}`}
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>

          <button
            className={`btn btn-success ${styles.active}`}
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(Pagination); // Use React.memo to optimize rendering
