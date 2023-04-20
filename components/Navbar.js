import React from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          AUTHAPP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {user ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item"
                onClick={() => {
                  logout();
                  router.push("/signin");
                }}
              >
                Logout
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/signin" className="nav-link">
                  Sign In
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
