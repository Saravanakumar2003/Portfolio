import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookiesConsent.module.css";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const CookiesConsent: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isPolicyClicked, setIsPolicyClicked] = useState(false);
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);


  useEffect(() => {
    const consent = localStorage.getItem("userConsent");
    if (!consent) {
      // Add delay before showing the popup (3 seconds)
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000);

      // Cleanup timer if component unmounts
      return () => clearTimeout(timer);
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
                {currentLang === 'ta' ? 'இந்த வலைத்தளம் பயனர் அனுபவத்தை மேம்படுத்த குக்கீகளைப் பயன்படுத்துகிறது. இந்த தளத்தைப் பயன்படுத்துவதன் மூலம், நீங்கள் எங்கள் ' : 'This website uses cookies to enhance the user experience. By using this site, you accept our '}
                <Link href={'/privacypolicy'} style={{ color: "#00D9FF" }} onClick={handlePolicyClick}>{currentLang === 'ta' ? 'தனியுரிமைக் கொள்கை' : 'Privacy Policy'}</Link>.
              </p>
              <button onClick={handleAccept} className={styles.button}>
                {currentLang === 'ta' ? 'நான் புரிந்துகொள்கிறேன்' : 'I Understand'}
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