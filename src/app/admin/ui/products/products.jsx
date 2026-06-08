import Link from "next/link";
import Search from '../dashboard/search/search';
import styles from './products.module.css';
import Image from "next/image";
import Pagination from "../dashboard/pagination/pagination";
const Productpage = () =>{
    return (
        <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product...." />
        <Link href="/admin/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
            <tr>
                <td>Title</td>
                <td>Description</td>
                <td>Price</td>
                <td>Created At</td>
                <td>Stock</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className={styles.product}>
                        <Image src="/assets/img/dashboard/product.jpg" alt="" width={40} height={40} className={styles.productImage}/> 
                         Shampoo
                    </div>
                </td>
                <td>Desc</td>
                <td>$299</td>
                <td>13.01.2022</td>
                <td>72</td>
                <td>
                    <div className={styles.buttons}>
                    <Link href="/admin/dashboard/products/view">
                        <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </div>
                </td>
            </tr>

        </tbody>
      </table>
      <Pagination />
    </div>
    )
}

export default Productpage;