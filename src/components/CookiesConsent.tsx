import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookiesConsent: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I Understand"
      cookieName="userConsent"
      style={{ background: "#2B373B", color: "#fff" }}
      buttonStyle={{
        color: "#4e503b",
        fontSize: "14px",
        backgroundColor: "#ffd700",
        borderRadius: "5px",
      }}
      expires={365} // Cookie expires in 365 days
    >
      This website uses cookies to enhance the user experience.{" "}  By using this site, you accept our <Link href={'/privacypolicy'} style={{ color: "#00D9FF" }}>Privacy Policy</Link>.
      <span style={{ fontSize: "12px" }}>
       
      </span>
    </CookieConsent>
  );
};

export default CookiesConsent;
