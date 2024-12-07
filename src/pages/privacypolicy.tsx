import Head from 'next/head';
import { ScrollTop } from '../components/ScrollTop';
import { Footer } from '../components/Footer';
import { PrivacyPolicyContainer } from '../styles/privacypolicy';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Saravanakumar</title>
      </Head>
      <PrivacyPolicyContainer>
        <br/><br/>
        <h1>Privacy Policy</h1>

        <h2>Last Updated: December 7th, 2024</h2>

        <p>Your privacy is important to us. This Privacy Policy explains how Saravanakumar.engineer collects, uses, and protects your information when you interact with our website.</p>

        <h3>1. Information We Collect</h3>
        <p>We may collect the following types of information when you use our website:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and feedback (via forms).</li>
          <li><strong>Non-Personal Information:</strong> Browser type, IP address, and usage data collected through analytics tools.</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>Your information is used for the following purposes:</p>
        <ul>
          <li>To respond to your inquiries submitted through the contact form.</li>
          <li>To gather feedback and improve the website's functionality.</li>
          <li>To monitor and analyze site performance and usage trends using third-party analytics tools.</li>
        </ul>

        <h3>3. Third-Party Services</h3>
        <p>We use third-party services to enhance your experience, including:</p>
        <ul>
          <li><strong>Google Analytics:</strong> Tracks website traffic and usage patterns.</li>
          <li><strong>Vercel Analytics:</strong> Monitors website performance.</li>
          <li><strong>Botpress:</strong> Powers the AI chatbot for interactive communication.</li>
          <li><strong>Visme Forms:</strong> Manages feedback submissions and collects data.</li>
          <li><strong>Testimonial.to:</strong> Manages testimonial submissions and collects data.</li>
          <li><strong>Giscus:</strong> Enables commenting on blog posts.</li>
          <li><strong>Kit.com:</strong> Used for newsletter subscription.</li>
          <li><strong>Google Calendar:</strong> My personal portfolio calendar integration.</li>
          <li><strong>SociableKIT:</strong> Embeds social media feeds and widgets.</li>
          <li><strong>Email.js:</strong> Facilitates email communication and form submissions.</li>
          <li><strong>Calendly:</strong> Schedules and manages appointments and meetings.</li>
          <li><strong>WakaTime Embeds:</strong> Tracks coding activity and embeds coding stats.</li>
          <li><strong>Canva Embeds:</strong> Embeds resume created with Canva.</li>
          <li><strong>Hashnode:</strong> Manages and displays blog posts.</li>
          <li><strong>Trello (Project board):</strong> Manages project tasks and collaboration.</li>
          <li><strong>Google Forms:</strong> Collects project suggestions and feedback.</li>
          <li><strong>YouTube Video:</strong> Hosts and displays project explanation videos.</li>
        </ul>
        <p>These third-party services may collect, use, and store your data according to their respective privacy policies.</p>

        <h3>4. Cookies and Tracking Technologies</h3>
        <p>We use cookies to improve your browsing experience and analyze website usage. You can manage your cookie preferences through your browser settings.</p>

        <h3>5. Data Protection</h3>
        <p>We take appropriate measures to safeguard your personal information against unauthorized access, disclosure, alteration, or destruction. However, no online platform can guarantee absolute security.</p>

        <h3>6. Data Sharing</h3>
        <p>We do not sell, rent, or share your personal information with third parties except as required by law or to provide essential services (e.g., analytics, hosting).</p>

        <h3>7. Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>Withdraw consent for data collection at any time.</li>
          <li>Request clarification on how your data is used.</li>
        </ul>

        <h3>8. Changes to This Privacy Policy</h3>
        <p>We may update this Privacy Policy periodically. Any changes will be reflected on this page, and we encourage you to review it regularly.</p>

        <h3>9. Contact Information</h3>
        <p>If you have questions or concerns about this Privacy Policy, contact us at:</p>
        <p><strong>Saravanakumar R</strong><br />
          Email: hello@saravanakumar.engineer<br />
          Website: <a href="https://saravanakumar.enginner">saravanakumar.engineer</a>
        </p>
      </PrivacyPolicyContainer>
      <ScrollTop />
      <Footer />
    </>
  );
}