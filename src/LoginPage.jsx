import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const location = useLocation();

  return (
    <main className={styles.loginContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.imageColumn}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b8b84cdc1d747142a517bde3481e029c1daf3201481681d0d6cc4956ab0a23b?placeholderIfAbsent=true&apiKey=94cadbe98bfc477d90a28007b1140684"
            className={styles.loginImage}
            alt="Laptop repair illustration"
          />
        </section>
        <section className={styles.formColumn}>
          <div className={styles.formWrapper}>
            <h1 className={styles.welcomeText}>Welcome to LaptopDoc</h1>
            <nav className={styles.authToggle}>
              <Link
                to="/login"
                className={
                  location.pathname === "/login"
                    ? styles.activeAuthOption
                    : styles.inactiveAuthOption
                }
              >
                Login
              </Link>
              <Link
                to="/register"
                className={
                  location.pathname === "/register"
                    ? styles.activeAuthOption
                    : styles.inactiveAuthOption
                }
              >
                Register
              </Link>
            </nav>

            <form>
              <label htmlFor="username" className={styles.inputLabel}>
                User name
              </label>
              <input
                type="text"
                id="username"
                className={styles.inputField}
                placeholder="Enter your User name"
                aria-label="Enter your User name"
              />
              <label htmlFor="password" className={styles.inputLabel}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className={styles.inputField}
                placeholder="Enter your Password"
                aria-label="Enter your Password"
              />
              <div className={styles.optionsWrapper}>
                <div className={styles.rememberMeWrapper}>
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className={styles.rememberMeCheckbox}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#forgot-password">Forgot Password?</a>
              </div>
              <button type="submit" className={styles.loginButton}>
                Login
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
