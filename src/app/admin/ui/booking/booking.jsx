import Link from "next/link";
import Search from "../dashboard/search/search";
import styles from "./booking.module.css";
import Image from "next/image";
import Pagination from "../dashboard/pagination/pagination";

const Bookingpage = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user...." />
        <Link href="/admin/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
            <tr>
                <td>Booked For</td>
                <td>Booking ID</td>
                <td>Sport</td>
                <td>Booking Date</td>
                <td>Person</td>
                <td>Time Slot</td>
                <td>Amount</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/assets/img/dashboard/user.png" alt="" width={40} height={40} className={styles.userImage}/> 
                         John Doe
                    </div>
                </td>
                <td>BK123BD123</td>
                <td>Pickle Ball</td>
                <td>07/07/2026</td>
                <td>5</td>
                <td>11:00 To 11:45</td>
                <td>$25</td>
                <td>
                    <div className={styles.buttons}>
                    <Link href="/admin/dashboard/users/view">
                        <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <button className={`${styles.button} ${styles.edit}`}>Edit</button>
                    <Link href="/admin/dashboard/bookings/act">
                        <button className={`${styles.button} ${styles.act}`}>Act</button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </div>
                </td>
            </tr>

        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Bookingpage;
