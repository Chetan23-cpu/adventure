import Button from "../components/Buttom";
import styles from "./user_register.module.css";

const User_register_page = () => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.cardouter}>
          <div className={styles.card}>
            <h1 className={styles.header}>Register</h1>
            <div className={styles.inputsection}>
              <label className={styles.label}>First Name</label>
              <input
                type="text"
                placeholder="Your First Name"
                className={styles.input}
              />
            </div>
            <div className={styles.inputsection}>
              <label className={styles.label}>Last Name</label>
              <input
                type="text"
                placeholder="Your Last Name"
                className={styles.input}
              />
            </div>
            <div className={styles.inputsection}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                placeholder="Your email id"
                className={styles.input}
              />
            </div>
            <div className={styles.inputsection}>
              <label className={styles.label}>Phone</label>
              <input
                type="number"
                placeholder="Your Phone Number"
                className={styles.input}
              />
            </div>
            
            <div className={styles.button}>
              <Button text="Generate Otp"></Button>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default User_register_page;
