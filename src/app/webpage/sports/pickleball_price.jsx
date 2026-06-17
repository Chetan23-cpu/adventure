import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./price.module.css";
import { faUser, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Pickleball_pricing = () => {
  const [activeTab, setActiveTab] = useState("badminton_single");

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        {/* Icons */}
        <div className={styles.icon}>
          <button
            className={`${styles.player1} ${activeTab === "badminton_single" ? styles.active : ""}`}
            onClick={() => setActiveTab("badminton_single")}  
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button
            className={`${styles.player2} ${activeTab === "badminton_double" ? styles.active : ""}`}
            onClick={() => setActiveTab("badminton_double")}  
          >
            <FontAwesomeIcon icon={faUserGroup} />
          </button>
          <button
            className={`${styles.player3} ${activeTab === "badminton_multi" ? styles.active : ""}`}
            onClick={() => setActiveTab("badminton_multi")}   
          >
            <FontAwesomeIcon icon={faUsers} />
          </button>
        </div>

        {/* Single Player Tab */}
        {activeTab === "badminton_single" && (
          <>
            <div className={styles.table1}>
              <h2 className={styles.heading}>Daily</h2>
              <h1 className={styles.price}>$12</h1>
              <p className={styles.details}>1 Person</p>
              <p className={styles.details}>45 min play</p>
              <p className={styles.details}>Indoor</p>
              <p className={styles.details}>1 Day</p>
            </div>
            <div className={styles.table1}>
              <h2 className={styles.heading}>Monthly</h2>
              <h1 className={styles.price}>$200</h1>
              <p className={styles.details}>1 Person</p>
              <p className={styles.details}>45 min play</p>
              <p className={styles.details}>Indoor</p>
              <p className={styles.details}>20 Days</p>
            </div>
            <div className={styles.table1}>
              <h2 className={styles.heading}>Yearly</h2>
              <h1 className={styles.price}>$2500</h1>
              <p className={styles.details}>1 Person</p>
              <p className={styles.details}>45 min play</p>
              <p className={styles.details}>Indoor</p>
              <p className={styles.details}>240 Days</p>
            </div>
          </>
        )}

        {/* Double Player Tab */}
        {activeTab === "badminton_double" && (
          <>
            <div className={styles.table1}>
              <h2 className={styles.heading}>Daily</h2>
              <h1 className={styles.price}>$18</h1>
              <p className={styles.details}>2 Players</p>
              <p className={styles.details}>45 min play</p>
              <p className={styles.details}>Indoor</p>
              <p className={styles.details}>1 Day</p>
            </div>
            <div className={styles.table1}>
              <h2 className={styles.heading}>Monthly</h2>
              <h1 className={styles.price}>$320</h1>
              <p className={styles.details}>2 Players</p>
              <p className={styles.details}>45 min play</p>
              <p className={styles.details}>Indoor</p>
              <p className={styles.details}>20 Days</p>
            </div>
            <div className={styles.table1}>
              <h2 className={styles.heading}>Yearly</h2>
              <h1 className={styles.price}>$3200</h1>
              <p className={styles.details}>2 Players</p>
              <p className={styles.details}>45 min play</p>
              <p className={styles.details}>Indoor</p>
              <p className={styles.details}>240 Days</p>
            </div>
          </>
        )}

        {/* Multi Player Tab */}
        {activeTab === "badminton_multi" && (
          <>
            <div className={styles.table1}>
              <h2 className={styles.heading}>Daily</h2>
              <h1 className={styles.price}>$20</h1>
              <p className={styles.details}>4+ Players</p>
              <p className={styles.details}>45 min play</p>
              <p className={styles.details}>Indoor</p>
              <p className={styles.details}>1 Day</p>
            </div>
            <div className={styles.table1}>
              <h2 className={styles.heading}>Monthly</h2>
              <h1 className={styles.price}>$800</h1>
              <p className={styles.details}>4+ Players</p>
              <p className={styles.details}>45 min play</p>
              <p className={styles.details}>Indoor</p>
              <p className={styles.details}>20 Days</p>
            </div>
            <div className={styles.table1}>
              <h2 className={styles.heading}>Yearly</h2>
              <h1 className={styles.price}>$9000</h1>
              <p className={styles.details}>4+ Players</p>
              <p className={styles.details}>45 min play</p>
              <p className={styles.details}>Indoor</p>
              <p className={styles.details}>240 Days</p>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Pickleball_pricing;