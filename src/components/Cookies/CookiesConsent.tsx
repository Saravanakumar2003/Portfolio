import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookiesConsent.module.css"; // Import CSS module for styling

const CookiesConsent: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isPolicyClicked, setIsPolicyClicked] = useState(false);

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

  const handlePolicyClick = () => {
    setIsPolicyClicked(true);
  };

  return (
    <>
      {showPopup && (
        <div className={`${styles.overlay} ${isPolicyClicked ? styles.noBlur : ""}`}>
          <div className={`${styles.popup} ${isPolicyClicked ? styles.popupDown : ""}`}>
            <div className={styles.popupContent}>
              <p>
                This website uses cookies to enhance the user experience. <br/> By using this site, you accept our{" "}
                <Link href={'/privacypolicy'} style={{ color: "#00D9FF" }} onClick={handlePolicyClick}>Privacy Policy</Link>.
              </p>
              <button onClick={handleAccept} className={styles.button}>
                I Understand
              </button>
              {/* <p className={styles.subtext}>* Privacy policy can be seen only if you press "I Understand" button.</p> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiesConsent;