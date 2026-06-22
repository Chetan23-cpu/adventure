import Button from "../components/Buttom";
import styles from "./user_login.module.css";
import Link from "next/link";

const User_login_page = () => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.cardouter}>
          <div className={styles.card}>
            <h1 className={styles.header}>Login</h1>
            <div className={styles.inputsection}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                placeholder="Your email id"
                className={styles.input}
              />
            </div>
            <div className={styles.inputsection}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Your password"
                className={styles.input}
              />
            </div>
            <div className={styles.remember}>
              <label className={styles.label}>
                <input type="checkbox" /> Remember me
              </label>
              <label className={styles.label}>Forgot Password?</label>
            </div>
            <div className={styles.button}>
              <Button text="login"></Button>
            </div>
            <div className={styles.orDivider}>
              <div className={styles.line1}></div>
              <Link href="/user_register">
                <span className={styles.signup}>Signup</span>
              </Link>
              <div className={styles.line2}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User_login_page;
