import Button from "../components/Buttom";
import styles from "./details.module.css";

const Detailspage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Form Section */}
        <div className={styles.form}>
          <div className={styles.header}>
            <div className={styles.headertext}>Your Details</div>
          </div>
          <div className={styles.section}>
            <label className={styles.sectionheader}>First Name</label>
            <input
              type="text"
              placeholder="Your first name"
              className={styles.sectionvalue}
            />
          </div>
          <div className={styles.section}>
            <label className={styles.sectionheader}>Last Name</label>
            <input
              type="text"
              placeholder="Your last name"
              className={styles.sectionvalue}
            />
          </div>
          <div className={styles.section}>
            <label className={styles.sectionheader}>Address</label>
            <input
              type="text"
              placeholder="Address"
              className={styles.sectionvalue}
            />
          </div>
          <div className={styles.section}>
            <label className={styles.sectionheader}>ID</label>
            <input
              type="text"
              placeholder="ID"
              className={styles.sectionvalue}
            />
          </div>
          <div className={styles.section}>
            <label className={styles.sectionheader}>Phone</label>
            <input
              type="number"
              placeholder="Your Phone Number"
              className={styles.sectionvalue}
            />
          </div>
          <div className={styles.section}>
            <label className={styles.sectionheader}>Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className={styles.sectionvalue}
            />
          </div>
          <div className={styles.button}>
            <Button text="Checkout" />
          </div>
        </div>

        {/* Billing Section */}
        <div className={styles.billing}>
          <div className={styles.card2}>
            <div className={styles.header}>
              <div className={styles.headertext}>Bill details:</div>
            </div>
            <div className={styles.form2}>
              <div className={styles.subtotal}>
                <label className={styles.subtotal_label}>Sub Total:</label>
                <h2 className={styles.subtotal_value}>$250</h2>
              </div>
              <div className={styles.taxes}>
                <label className={styles.tax_label}>Taxes:</label>
                <h2 className={styles.tax_value}>$25</h2>
              </div>
              <div className={styles.total}>
                <label className={styles.total_label}>Total:</label>
                <h2 className={styles.total_value}>$275</h2>
              </div>
            </div>
          </div>
          <div className={styles.card3}>
            <div className={styles.header}>
              <div className={styles.headertext}>Your Cart:</div>
            </div>
            <div className={styles.form3}>
              <div className={styles.sport}>
                <label className={styles.sport_label}>Sport Selected:</label>
                <h2 className={styles.sport_value}>Badminton</h2>
              </div>
              <div className={styles.court}>
                <label className={styles.court_label}>Court:</label>
                <h2 className={styles.court_value}>Wooden</h2>
              </div>
              <div className={styles.person}>
                <label className={styles.person_label}>Person:</label>
                <h2 className={styles.person_value}>5</h2>
              </div>
              <div className={styles.start_time}>
                <label className={styles.start_time_label}>Start Time:</label>
                <h2 className={styles.start_time_value}>10:00 AM</h2>
              </div>
              <div className={styles.end_time}>
                <label className={styles.end_time_label}>End Time:</label>
                <h2 className={styles.end_time_value}>11:00 AM</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
