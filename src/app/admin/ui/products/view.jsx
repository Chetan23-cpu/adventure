import Image from "next/image";
import styles from "./view.module.css";

const ViewProductpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/assets/img/dashboard/user.png" alt="" fill />
        </div>
        Shampoo
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="255$" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="255" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Red" />
          <label>Size</label>
          <input type="text" name="size" placeholder="2xl" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Description"></textarea>
          <button>Update</button>
        </form>
        
      </div>
    </div>
  );
};

export default ViewProductpage;
