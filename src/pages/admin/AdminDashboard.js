import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboards = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-left">Welcome Admin...</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">User Management</h5>
              <p className="card-text">Manage all registered users including teachers, students, and librarians.</p>
              <a href="/admin/manage-users" className="btn btn-primary">Manage Users</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">System Settings</h5>
              <p className="card-text">Configure system settings like site preferences, email notifications, and more.</p>
              <a href="/admin/system-settings" className="btn btn-primary">Go to Settings</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Reports</h5>
              <p className="card-text">Generate and view reports for different modules of the system.</p>
              <a href="/admin/reports" className="btn btn-primary">View Reports</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Database Management</h5>
              <p className="card-text">Manage database backups, restores, and other database-related activities.</p>
              <a href="/admin/database-management" className="btn btn-primary">Manage Database</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Activity Logs</h5>
              <p className="card-text">View logs of all activities performed within the system for auditing purposes.</p>
              <a href="/admin/activity-logs" className="btn btn-primary">View Logs</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Website Analytics</h5>
              <p className="card-text">View detailed analytics of website usage and user behavior.</p>
              <a href="/admin/analytics" className="btn btn-primary">View Analytics</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboards;
