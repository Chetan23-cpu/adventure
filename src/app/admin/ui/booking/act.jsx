import styles from "./act.module.css";

const Act_booking = () => {
  return (
    <>
      <div className={styles.container2}>
        <div className={styles.buttonbox}>
            <button className={styles.button}>Confirm</button>
            <button className={styles.button1}>Cancel</button>
        </div>
      </div>

      <div className={styles.container2}>
        <h1 className={styles.header}>Booking Details</h1>
        <div className={styles.field}>
          <div className={styles.element}>
            <label className={styles.label}>Booking ID:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
          <div className={styles.element}>
            <label>Sport:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.element}>
            <label className={styles.label}>No of Player:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
          <div className={styles.element}>
            <label>Time Slot:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.element}>
            <label className={styles.label}>Courts:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
          <div className={styles.element}>
            <label>No of Session</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
        </div> 
      </div>
      <div className={styles.container2}>
        <h1 className={styles.header}>Payment Details:</h1>
        <div className={styles.field}>
          <div className={styles.element}>
            <label className={styles.label}>Unit Price</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
          <div className={styles.element}>
            <label>Amount Paid:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.element}>
            <label className={styles.label}>Payment Method:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
          <div className={styles.element}>
            <label>Transaction ID:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.element}>
            <label className={styles.label}>Bank</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
          <div className={styles.element}>
            <label>Paid On</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
        </div> 
      </div>

      <div className={styles.container2}>
        <h1 className={styles.header}>Customer Details</h1>
        <div className={styles.field}>
          <div className={styles.element}>
            <label className={styles.label}>Booked By:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
          <div className={styles.element}>
            <label>Booked For:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.element}>
            <label className={styles.label}>Email:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
          <div className={styles.element}>
            <label>Phone:</label>
            <input type="text" placeholder="" className={styles.input} />
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.buttonbox}>
            <button className={styles.button}>Confirm</button>
            <button className={styles.button1}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Act_booking;
