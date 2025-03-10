import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>🎟️</div>
          TruePass
        </div>
        <button className={styles.btnPrimary}>Host</button>
      </div>

      <SearchBar placeholder="Search events..." />

      <div className={styles.actionButtons}>
        <button 
          className={styles.btnPrimary}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Connect Wallet
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              {/* Wallet options go here */}
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;