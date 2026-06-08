import Image from "next/image";
import styles from "./view.module.css";

const ViewUserpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/assets/img/dashboard/user.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Email</label>
          <input type="email" name="email" placeholder="chetan@gmail.com" />
          <label>Password</label>
          <input type="passowrd" name="password" placeholder="John Doe" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="7827090225" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="New York" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
        
      </div>
    </div>
  );
};

export default ViewUserpage;
