import axios from "axios";
import { toast } from "react-toastify";
import config from "../services/config";

/**
 * Fetch all queries from the server
 */
export const getAllQueries = async () => {
  try {
    const response = await axios.get(config.getAllQueriesUrl());
    return { data: response.data, err: null };
  } catch (error) {
    console.error("Error fetching queries:", error.response?.data || error.message);
    return { data: [], err: error.response?.data || "Failed to fetch queries" };
  }
};

/**
 * Create a new query
 * @param {Object} data - The query data to send
 */
export const createQuery = async (data) => {
  try {
    const response = await axios.post(config.getCreateQueryUrl(), data);
    
    if (response.status === 201 || response.status === 200) {
      toast.success("Message sent successfully!");
      return { success: true, message: "Query created successfully" };
    }

    toast.warning("Unexpected response from the server!");
    return { success: false, message: "Unexpected server response" };
  } catch (error) {
    console.error("Error creating query:", error.response?.data || error.message);
    toast.error(error.response?.data?.message || "Failed to send message!");
    return { success: false, message: error.response?.data?.message || "Something went wrong" };
  }
};

/**
 * Delete a query by ID
 * @param {string} id - The ID of the query to delete
 */
export const deleteQuery = async (id) => {
  try {
    const response = await axios.delete(config.querydeleteUrl(id));
    
    if (response.status === 200) {
      toast.success("Query deleted successfully!");
      return { success: true, message: "Query deleted" };
    }

    toast.warning("Unexpected response from the server!");
    return { success: false, message: "Unexpected server response" };
  } catch (error) {
    console.error("Error deleting query:", error.response?.data || error.message);
    toast.error(error.response?.data?.message || "Failed to delete query!");
    return { success: false, message: error.response?.data?.message || "Something went wrong" };
  }
};
