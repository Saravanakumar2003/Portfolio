import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookiesConsent.module.css"; // Import CSS module for styling

const CookiesConsent: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("userConsent");
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("userConsent", "true");
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <p>
                This website uses cookies to enhance the user experience. <br/> By using this site, you accept our{" "}
                <Link href={'/privacypolicy'} style={{ color: "#00D9FF" }}>Privacy Policy</Link>.
              </p>
              <button onClick={handleAccept} className={styles.button}>
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiesConsent;