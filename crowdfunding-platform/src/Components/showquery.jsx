import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Pagination from "./pagination";
import Loader from "./loader";
import { getAllQueries, deleteQuery } from "../Components/services/query";
import { paginate } from "../Components/utills/paginate";
import styles from "./styles/dashboard.module.css";

const Query = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  const pageSize = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllQueries();
        setQueries(data);
      } catch (err) {
        setError("Failed to fetch queries. Try again later.");
        toast.error("Error loading queries!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="alert alert-danger">{error}</div>;

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this query?");
    if (!confirmDelete) return;

    const originalData = [...queries];
    const updatedData = queries.filter((query) => query._id !== id);
    setQueries(updatedData);

    try {
      await deleteQuery(id);
      toast.success("Query deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete query. Try again.");
      setQueries(originalData);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedQueries = paginate(queries, currentPage, pageSize);

  return (
    <div className={styles.queryContainer}>
      <h2 className={styles.heading}>User Queries</h2>
      {queries.length === 0 ? (
        <p className="text-muted text-center">No queries found.</p>
      ) : (
        <>
          <ul className="list-group">
            {displayedQueries.map((query) => (
              <li key={query._id} className={`list-group-item ${styles.listItem}`}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Email:</strong> {query.email}
                  </div>
                  <button
                    className={`btn btn-outline-danger ${styles.deleteButton}`}
                    onClick={() => handleDelete(query._id)}
                  >
                    ❌ Delete
                  </button>
                </div>
                <p className={styles.message}>
                  <strong>Message:</strong> {query.message}
                </p>
              </li>
            ))}
          </ul>

          <Pagination
            itemsCount={queries.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Query;
