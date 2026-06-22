import Link from "next/link";
import Search from "../dashboard/search/search";
import styles from "./customers.module.css";
import Image from "next/image";
import Pagination from "../dashboard/pagination/pagination";

const Customerpage= ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user...." />
        <Link href="/admin/dashboard/customers/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Created At</td>
                <td>Phone</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/assets/img/dashboard/user.png" alt="" width={40} height={40} className={styles.userImage}/> 
                         Chetan
                    </div>
                </td>
                <td>chetan@gmail.com</td>
                <td>13.01.2025</td>
                <td>7827090225</td>
                <td>
                    <div className={styles.buttons}>
                    <Link href="/admin/dashboard/users/view">
                        <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <button className={`${styles.button} ${styles.edit}`}>Edit</button>
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

export default Customerpage;
