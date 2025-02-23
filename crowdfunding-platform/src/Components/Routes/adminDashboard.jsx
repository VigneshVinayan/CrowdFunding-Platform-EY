import React, { useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import NavBar from "../navbar_notLanding";
import ShowQuery from "../showquery";
import ScrollToTop from "../ScrollToTop";
import { logout, isAuthorised } from "../services/auth";
import { toast } from "react-toastify";
import styles from "../styles/dashboard.module.css";
import user from "../assets/admin.png";

const DashboardButton = ({ text, onClick, className }) => (
  <button className={`btn ${className} m-2`} onClick={onClick}>
    {text}
  </button>
);

const AdminDashboard = (p) => {
  useEffect(() => {
    if (!isAuthorised()) {
      toast.error("Not authorised");
      p.history.replace("/page-not-found");
    }
  }, []);

  const token = localStorage.getItem("token");
  const email = token ? jwtDecode(token).email : "Unknown User";

  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={`col-md-10 m-auto border ${styles.container}`}>
        <img src={user} className={styles.image} alt="userIcon" />
        <h2 className={styles.text}>Admin Dashboard</h2>
        <b>{email}</b>
        <hr />
        <div className="d-flex flex-wrap justify-content-center">
          <DashboardButton text="New Admin +" onClick={() => p.history.push("/admin/new")} className="btn-warning"/>
          <DashboardButton text="New Campaign" onClick={() => p.history.push("/admin/campaign/new")} className="btn-warning"/>
          <DashboardButton text="All Campaigns" onClick={() => p.history.push("/all-campaigns")} className="btn-primary"/>
          <DashboardButton text="Logout" onClick={() => logout().then(() => (window.location = "/"))} className="btn-danger"/>
        </div>
        <hr />
        <ShowQuery />
        <br />
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
