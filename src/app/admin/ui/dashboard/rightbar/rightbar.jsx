import Image from 'next/image';
import styles from './rightbar.module.css'
import { MdPlayCircleFilled } from 'react-icons/md';
import { GiFire, GiFireflake } from 'react-icons/gi';

const Rightbar = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaught.jpg" alt="" fill className={styles.bg}></Image>
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>
                         Available Now
                    </span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>
                        There is new upcoming event. Joint to our adventure. Enjoy, have fun, revive your mood.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.text}>
                    <span className={styles.notification}>
                        Coming Soon
                    </span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>
                        There is new upcoming event. Joint to our adventure. Enjoy, have fun, revive your mood.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Learn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar;