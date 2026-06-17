import Image from "next/image";
import Button from "../components/Buttom";
import styles from "./checkout.module.css";

const Checkoutpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fullcard}>
        <div className={styles.imagecard}>
            <Image src="/assets/img/payment/payment_image2.png" fill alt="Payment Image" style={{ objectFit: "cover", borderRadius: "5px" }}/>
        </div>
        <div className={styles.detailscard}>
          <div className={styles.heading}>Payments Options</div>
          <div className={styles.smallcard}>
            <div className={styles.gpay}>Google Pay</div>
            <div className={styles.applepay}>Apple Pay</div>
            <div className={styles.paypal}>Pay Pal</div>
            <div className={styles.amazonpay}>Amazon Pay</div>
          </div>
          <div className={styles.orDivider}>
            <div className={styles.line}></div>
            <span>Or</span>
            <div className={styles.line}></div>
          </div>
          <div className={styles.section}>
            <label>Card Number</label>
            <input type="number" className={styles.value} />
          </div>
          <div className={styles.section}>
            <label>Card Holder Name</label>
            <input type="text" className={styles.value} />
          </div>
          <div className={styles.section}>
            <div className={styles.cvv_exp}>
              <div className={styles.smallsection}>
                <label>Expiry Date</label>
                <input type="number" className={styles.value} />
              </div>
              <div className={styles.smallsection}>
                <label>CVV</label>
                <input type="number" className={styles.value} />
              </div>
              {/* <div className={styles.smallsection}>
                <label>Card Type</label>
                <input type="number" className={styles.value} />
              </div> */}
            </div>
          </div>
          <div className={styles.section}></div>
          <div className={styles.button}>
            <Button text="Pay Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutpage;
