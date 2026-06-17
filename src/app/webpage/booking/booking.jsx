import styles from "./booking.module.css";
import Button from "../components/Buttom";
import Image from "next/image";
import Pretile from "../components/Pretitle";
const Bookingpage = () => {
  return (
    <div className={styles.pretile}>
      <Pretile text="Book Now" />
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card3}>
            <h1 className={styles.title}>Complete your booking!!</h1>
            <div className={styles.page}>
              <div className={styles.section}>
                <label className={styles.sectionheader}>Select Sport</label>
                <select className={styles.sectionvalue}>
                  <option value="">Please Select</option>
                  <option value="badminton">Badmintion</option>
                  <option value="pickleball">Pickle Ball</option>
                  <option value="tennis">Tennis</option>
                  <option value="volleyball">Volleyball</option>
                </select>
              </div>
              <div className={styles.section}>
                <label className={styles.sectionheader}>Date</label>
                <input type="date" className={styles.sectionvalue} />
              </div>
              <div className={styles.section}>
                <label className={styles.sectionheader}>Start Time:</label>
                <input type="time" className={styles.sectionvalue} />
              </div>
              <div className={styles.section}>
                <label className={styles.sectionheader}>Duration</label>
                <input type="number" className={styles.sectionvalue} />
              </div>
              <div className={styles.section}>
                <label className={styles.sectionheader}>Court Type</label>
                <select name="" id="" className={styles.sectionvalue}>
                  <option value="">Please select</option>
                  <option value="synthetic">Synthetic</option>
                  <option value="wooden">Wooden</option>
                  <option value="grass">Grass</option>
                </select>
              </div>
              <div className={styles.section}>
                <label className={styles.sectionheader}>Available Courts</label>
                <input type="number" className={styles.sectionvalue} />
              </div>

              <div className={styles.section}>
                <label className={styles.sectionheader}>Person</label>
                <input type="number" className={styles.sectionvalue} />
              </div>
            </div>
          </div>
          <div className={styles.card4}>
            <h1 className={styles.title}>Personal Details!!</h1>
            <div className={styles.section}>
              <label className={styles.sectionheader}>First Name</label>
              <input type="text" className={styles.sectionvalue} />
            </div>
            <div className={styles.section}>
              <label className={styles.sectionheader}>Last Name</label>
              <input type="text" className={styles.sectionvalue} />
            </div>
            <div className={styles.section}>
              <label className={styles.sectionheader}>Phone</label>
              <input type="number" className={styles.sectionvalue} />
            </div>
            <div className={styles.section}>
              <label className={styles.sectionheader}>Email</label>
              <input type="email" className={styles.sectionvalue} />
            </div>

            <div className={styles.button}>
              <Button text="Book Now" />
            </div>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.image}>
            <Image
              src="/assets/img/booking/booking_play_badminton.png"
              fill
              alt="Booking Hero"
              style={{ objectFit: "cover", borderRadius: "5px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookingpage;
