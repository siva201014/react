import React, { useEffect, useState } from "react";

const BillingSystemPage = ({ username, billingdata }) => {
  const [data, setData] = useState({
    username: '',
    billingdata: new Date(),
    id: 0,
    total: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/billingsystem", {
        method: "GET",
        credentials: "include", // Ensure that credentials are included in the request
      });
      const jsonData = await response.json();
      setData(jsonData);
      debugger;
    };

    fetchData();
  }, []);

  return (
    <>

      <nav className="navbar bg-body-tertiary fixed-top top-nav">
        <div className="container-fluid">
          <div className="container" style={{ textAlign: "center" }}>
            <a
              className="navbar-brand title"
              style={{ color: "#fff" }}
              href="#"
            >
              Billing System
            </a>
          </div>
          <button value={data.id}></button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/dashboard"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/billingsystem">
                    Billing System
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/instructions">
                    Instructions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/user_info">
                    User Information
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/logout">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="apply-translation">
        <div className="flex-container">
          <div className="flex-item inside-form">
            <h2>Add Purchase Data</h2>
            <form action="/add-data" method="POST">
              <input> text</input>
            </form>
          </div>
          <div className="flex-item display-results">
            <h1>Purchase Data (Data for {username})</h1>
            {billingdata && billingdata.length > 0 ? (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Details</th>
                    <th>Final Price</th>
                    <th>Modify</th>
                  </tr>
                </thead>
                <tbody>
                  {billingdata.map((item, index) => (
                    <tr key={index}>
                      {/* Render each item from billing data */}
                    </tr>
                  ))}
                  {/* Render total price row */}
                  <tr>
                    <td>-</td>
                    <td>Total Price: ${/* Calculate total price */}</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div
                className="alert alert-primary d-flex align-items-center"
                role="alert"
              >
                {/* Alert message when no billing data */}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for updating purchase data */}
      <div
        className="modal"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* Modal content */}
      </div>
    </>
  );
};

export default BillingSystemPage;
