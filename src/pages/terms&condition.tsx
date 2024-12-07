import Head from 'next/head';
import { ScrollTop } from '../components/ScrollTop';
import { Footer } from '../components/Footer';
import { TermsAndConditionsContainer } from '../styles/termsandcondition';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Saravanakumar</title>
      </Head>
      <TermsAndConditionsContainer>
        <br /><br />
        <h1>Terms and Conditions</h1>

        <h2>Last Updated: December 7th, 2024</h2>

        <p>Welcome to Saravanakumar.engineer. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use this site.</p>

        <h3>1. Acceptance of Terms</h3>
        <p>By using Saravanakumar.engineer, you acknowledge that you have read, understood, and agree to these Terms and Conditions, along with the Privacy Policy.</p>

        <h3>2. Use of Website Content</h3>
        <p>The content on this website, including text, images, and design, is for personal, informational, and non-commercial use only. You may not copy, reproduce, distribute, or use any content without prior written permission.</p>

        <h3>3. Ownership and Attribution</h3>
        <p>Saravanakumar.engineer is based on the project <strong>Evander Inacio Portfolio</strong>, which was originally developed and publicly shared on GitHub by Evander Inacio.</p>
        <p>The project <strong>Evander Inacio Portfolio</strong> is <strong>not open-source</strong>, and its use and distribution are subject to the original creator's terms.</p>
        <p>Special thanks to Evander Inacio for <strong>granting permission to use and build upon his project.</strong> This project has since evolved with numerous enhancements and new features while maintaining proper attribution to the original creator.</p>
        <p>Modifications and additional features to the site were made by <strong>Saravana Kumar R</strong> for personal use and are not intended for redistribution or commercial use without proper authorization.</p>
        <p><strong>Disclaimer:</strong> The creator of Saravanakumar.engineer does not claim ownership of the original "Evander Inacio" project or its intellectual property. All rights to the original code are retained by the original creator.</p>
        
        <h3>4. User Responsibilities</h3>
        <p>When using forms or interacting with the website, you agree to:</p>
        <ul>
          <li>Provide accurate and truthful information.</li>
          <li>Avoid submitting unlawful, harmful, or offensive content.</li>
          <li>Refrain from attempting to access unauthorized areas of the website or servers.</li>
        </ul>

        <h3>5. Data Collection and Use</h3>
        <p>By using features like the contact form or feedback form, you agree to the collection and use of your data as outlined in our <a href="#">Privacy Policy</a>.</p>

        <h3>6. Third-Party Services</h3>
        <p>This site integrates with third-party tools, including:</p>
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
        <p>These services operate under their respective terms and policies. We are not responsible for their data collection or handling practices.</p>

        <h3>7. Limitation of Liability</h3>
        <p>Saravanakumar.engineer is provided "as is," without warranties of any kind.</p>
        <p>We are not responsible for inaccuracies or errors in the content.</p>
        <p>We disclaim liability for any damages resulting from the use of this website or third-party services.</p>

        <h3>8. Intellectual Property</h3>
        <p>All intellectual property related to the original project, including code, design, and content, remains the property of the original creator.</p>
        <p>Modifications made to the site by <strong>Saravana Kumar R</strong> are for personal, non-commercial use only. Unauthorized use is prohibited outside the scope of personal use.</p>

        <h3>9. Changes to Terms and Conditions</h3>
        <p>We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Users are encouraged to review the T&C periodically.</p>

        <h3>10. Governing Law</h3>
        <p>These Terms and Conditions are governed by the laws of India. Any disputes arising out of the use of this website will be subject to the jurisdiction of courts in India.</p>

        <h3>11. Contact Information</h3>
        <p>For questions about these Terms and Conditions or the original project attribution, contact:</p>

        <p><strong>Saravanakumar R</strong><br />
          Email: hello@saravanakumar.engineer<br />
          Website: <a href="https://Saravanakumar.engineer">Saravanakumar.engineer</a>
        </p>
      </TermsAndConditionsContainer>
      <ScrollTop />
      <Footer />
    </>
  );
}