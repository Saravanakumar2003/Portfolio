import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ScrollTop } from '../components/ScrollTop';
import { Footer } from '../components/Footer';
import { PrivacyPolicyContainer } from '../styles/privacypolicy';
import RouteTransition from '../components/Animations/RouteTransition';
import FadeInAnimation from '../components/Animations/FadeInAnimation';


export default function PrivacyPolicy() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  const content = {
    title: {
      en: 'Privacy Policy | Saravanakumar',
      ta: 'தனியுரிமைக் கொள்கை | சரவணகுமார்'
    },
    heading: {
      en: 'Privacy Policy',
      ta: 'தனியுரிமைக் கொள்கை'
    },
    lastUpdated: {
      en: 'Last Updated: August 7th, 2025',
      ta: 'கடைசியாக புதுப்பிக்கப்பட்டது: ஆகஸ்ட் 7, 2025'
    },
    intro: {
      en: 'Your privacy is important to us. This Privacy Policy explains how Saravanakumar\'s Portfolio collects, uses, and protects your information when you interact with our website.',
      ta: 'உங்கள் தனியுரிமை எங்களுக்கு முக்கியமானது. இந்த தனியுரிமைக் கொள்கை சரவணகுமாரின் போர்ட்ஃபோலியோ எவ்வாறு உங்கள் தகவல்களை சேகரிக்கிறது, பயன்படுத்துகிறது மற்றும் பாதுகாக்கிறது என்பதை விளக்குகிறது.'
    },
    section1: {
      title: {
        en: '1. Information We Collect',
        ta: '1. நாங்கள் சேகரிக்கும் தகவல்கள்'
      },
      content: {
        en: 'We may collect the following types of information when you use our website:',
        ta: 'நீங்கள் எங்கள் இணையதளத்தைப் பயன்படுத்தும்போது நாங்கள் பின்வரும் வகையான தகவல்களைச் சேகரிக்கலாம்:'
      },
      personal: {
        en: 'Personal Information: Name, email address, phone number, and feedback (via forms).',
        ta: 'தனிப்பட்ட தகவல்கள்: பெயர், மின்னஞ்சல் முகவரி, தொலைபேசி எண் மற்றும் கருத்து (படிவங்கள் மூலம்).'
      },
      nonPersonal: {
        en: 'Non-Personal Information: IP address, browser type, device type, pages visited, and interactions (collected via cookies and third-party tools)',
        ta: 'தனிப்பட்ட அல்லாத தகவல்கள்: IP முகவரி, உலாவி வகை, சாதன வகை, பார்வையிட்ட பக்கங்கள் மற்றும் தொடர்புகள் (குக்கீகள் மற்றும் மூன்றாம் தரப்பு கருவிகள் மூலம் சேகரிக்கப்படுகிறது)'
      }
    },
    section2: {
      title: {
        en: '2. How We Use Your Information',
        ta: '2. உங்கள் தகவல்களை நாங்கள் எவ்வாறு பயன்படுத்துகிறோம்'
      },
      content: {
        en: 'Your information is used for the following purposes:',
        ta: 'உங்கள் தகவல்கள் பின்வரும் நோக்கங்களுக்காக பயன்படுத்தப்படுகின்றன:'
      },
      purpose1: {
        en: 'To respond to your inquiries submitted through the contact form.',
        ta: 'தொடர்பு படிவம் மூலம் சமர்ப்பிக்கப்பட்ட உங்கள் கேள்விகளுக்கு பதிலளிக்க.'
      },
      purpose2: {
        en: 'To gather feedback and improve the website\'s functionality.',
        ta: 'கருத்துகளை சேகரித்து இணையதளத்தின் செயல்பாட்டை மேம்படுத்த.'
      },
      purpose3: {
        en: 'To monitor and analyze site performance and usage trends using third-party analytics tools.',
        ta: 'மூன்றாம் தரப்பு பகுப்பாய்வு கருவிகளைப் பயன்படுத்தி தள செயல்திறன் மற்றும் பயன்பாட்டு போக்குகளைக் கண்காணிக்க மற்றும் பகுப்பாய்வு செய்ய.'
      }
    },
    section3: {
      title: {
        en: '3. Third-Party Services',
        ta: '3. மூன்றாம் தரப்பு சேவைகள்'
      },
      content: {
        en: 'We use third-party services to enhance your experience, including:',
        ta: 'உங்கள் அனுபவத்தை மேம்படுத்த நாங்கள் மூன்றாம் தரப்பு சேவைகளைப் பயன்படுத்துகிறோம், அவற்றில்:'
      },
      disclaimer: {
        en: 'These third-party services may collect, use, and store your data according to their respective privacy policies.',
        ta: 'இந்த மூன்றாம் தரப்பு சேவைகள் அவற்றின் தனியுரிமைக் கொள்கைகளின்படி உங்கள் தரவைச் சேகரிக்கலாம், பயன்படுத்தலாம் மற்றும் சேமிக்கலாம்.'
      }
    },
    section4: {
      title: {
        en: '4. Cookies and Tracking Technologies',
        ta: '4. குக்கீகள் மற்றும் கண்காணிப்பு தொழில்நுட்பங்கள்'
      },
      content: {
        en: 'We may use cookies and similar technologies for analytics and improving user experience. By continuing to use this site, you consent to our use of cookies.',
        ta: 'பகுப்பாய்வு மற்றும் பயனர் அனுபவத்தை மேம்படுத்துவதற்காக நாங்கள் குக்கீகள் மற்றும் ஒத்த தொழில்நுட்பங்களைப் பயன்படுத்தலாம். இந்த தளத்தைத் தொடர்ந்து பயன்படுத்துவதன் மூலம், எங்கள் குக்கீகளின் பயன்பாட்டிற்கு நீங்கள் ஒப்புதல் அளிக்கிறீர்கள்.'
      }
    },
    section5: {
      title: {
        en: '5. Data Protection',
        ta: '5. தரவு பாதுகாப்பு'
      },
      content: {
        en: 'We take appropriate measures to safeguard your personal information against unauthorized access, disclosure, alteration, or destruction. However, no online platform can guarantee absolute security. We retain your data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.',
        ta: 'அங்கீகரிக்கப்படாத அணுகல், வெளிப்படுத்தல், மாற்றம் அல்லது அழிவுக்கு எதிராக உங்கள் தனிப்பட்ட தகவல்களைப் பாதுகாக்க நாங்கள் பொருத்தமான நடவடிக்கைகளை எடுக்கிறோம். இருப்பினும், எந்த ஆன்லைன் இயங்குதளமும் முழுமையான பாதுகாப்பிற்கு உத்தரவாதம் அளிக்க முடியாது. சட்டத்தால் நீண்ட காலம் வைத்திருக்க வேண்டும் அல்லது அனுமதிக்கப்பட்டாலன்றி, இந்தக் கொள்கையில் குறிப்பிடப்பட்டுள்ள நோக்கங்களை நிறைவேற்ற தேவையான காலம் வரை மட்டுமே உங்கள் தரவை நாங்கள் வைத்திருக்கிறோம்.'
      }
    },
    section6: {
      title: {
        en: '6. Data Sharing',
        ta: '6. தரவு பகிர்வு'
      },
      content: {
        en: 'We do not sell, rent, or share your personal information with third parties except as required by law or to provide essential services (e.g., analytics, hosting).',
        ta: 'சட்டத்தால் அல்லது அத்தியாவசிய சேவைகளை வழங்குவதற்காக (எ.கா., பகுப்பாய்வு, ஹோஸ்டிங்) தேவைப்படாத வரை நாங்கள் உங்கள் தனிப்பட்ட தகவல்களை மூன்றாம் தரப்பினருக்கு விற்கவோ, வாடகைக்கு விடவோ அல்லது பகிரவோ மாட்டோம்.'
      }
    },
    section7: {
      title: {
        en: '7. Your Rights',
        ta: '7. உங்கள் உரிமைகள்'
      },
      content: {
        en: 'You have the right to:',
        ta: 'உங்களுக்கு பின்வரும் உரிமைகள் உள்ளன:'
      },
      right1: {
        en: 'Access, update, or delete your personal information.',
        ta: 'உங்கள் தனிப்பட்ட தகவல்களை அணுக, புதுப்பிக்க அல்லது நீக்க.'
      },
      right2: {
        en: 'Withdraw consent for data collection at any time.',
        ta: 'எந்த நேரத்திலும் தரவு சேகரிப்பிற்கான ஒப்புதலை திரும்பப் பெற.'
      },
      right3: {
        en: 'Request clarification on how your data is used.',
        ta: 'உங்கள் தரவு எவ்வாறு பயன்படுத்தப்படுகிறது என்பது குறித்த தெளிவாக்கத்தைக் கோர.'
      }
    },
    section8: {
      title: {
        en: '8. Changes to This Privacy Policy',
        ta: '8. இந்த தனியுரிமைக் கொள்கையில் மாற்றங்கள்'
      },
      content: {
        en: 'We may update this Privacy Policy periodically. Any changes will be reflected on this page, and we encourage you to review it regularly.',
        ta: 'இந்த தனியுரிமைக் கொள்கையை நாங்கள் அவ்வப்போது புதுப்பிக்கலாம். ஏதேனும் மாற்றங்கள் இந்த பக்கத்தில் பிரதிபலிக்கும், மேலும் அதை தொடர்ந்து மதிப்பாய்வு செய்ய உங்களை ஊக்குவிக்கிறோம்.'
      }
    },
    section9: {
      title: {
        en: '9. Contact Information',
        ta: '9. தொடர்பு தகவல்கள்'
      },
      content: {
        en: 'If you have questions or concerns about this Privacy Policy, contact us at:',
        ta: 'இந்த தனியுரிமைக் கொள்கை குறித்து உங்களுக்கு கேள்விகள் அல்லது கவலைகள் இருந்தால், எங்களைத் தொடர்பு கொள்ளுங்கள்:'
      },
      name: {
        en: 'Saravanakumar R',
        ta: 'சரவணகுமார் R'
      },
      email: {
        en: 'Email: saravanaramaswamy2003@gmail.com',
        ta: 'மின்னஞ்சல்: saravanaramaswamy2003@gmail.com'
      },
      website: {
        en: 'Website: ',
        ta: 'இணையதளம்: '
      }
    }
  };

  return (
     <RouteTransition>
      <Head>
        <title>{content.title[currentLang]}</title>
      </Head>
      <PrivacyPolicyContainer>
        <br/><br/>
        <FadeInAnimation delay={0.2}>
          <h1>{content.heading[currentLang]}</h1>
        </FadeInAnimation>

        <FadeInAnimation delay={0.3}>
          <h2>{content.lastUpdated[currentLang]}</h2>
        </FadeInAnimation>

        <FadeInAnimation delay={0.4}>
          <p>{content.intro[currentLang]}</p>
        </FadeInAnimation>

          <div>
            <h3>{content.section1.title[currentLang]}</h3>
            <p>{content.section1.content[currentLang]}</p>
            <ul>
              <li><strong>{currentLang === 'ta' ? 'தனிப்பட்ட தகவல்கள்:' : 'Personal Information:'}</strong> {content.section1.personal[currentLang]}</li>
              <li><strong>{currentLang === 'ta' ? 'தனிப்பட்ட அல்லாத தகவல்கள்:' : 'Non-Personal Information:'}</strong> {content.section1.nonPersonal[currentLang]}</li>
            </ul>
          </div>

          <div>
            <h3>{content.section2.title[currentLang]}</h3>
            <p>{content.section2.content[currentLang]}</p>
            <ul>
              <li>{content.section2.purpose1[currentLang]}</li>
              <li>{content.section2.purpose2[currentLang]}</li>
              <li>{content.section2.purpose3[currentLang]}</li>
            </ul>
          </div>

          <div>
            <h3>{content.section3.title[currentLang]}</h3>
            <p>{content.section3.content[currentLang]}</p>
            <ul>
              <li><strong>Google Analytics:</strong> {currentLang === 'ta' ? 'இணையதள ட்ராஃபிக் மற்றும் பயன்பாட்டு முறைகளைக் கண்காணிக்கிறது.' : 'Tracks website traffic and usage patterns.'}</li>
              <li><strong>Vercel Analytics:</strong> {currentLang === 'ta' ? 'இணையதள செயல்திறனைக் கண்காணிக்கிறது.' : 'Monitors website performance.'}</li>
              <li><strong>Botpress:</strong> {currentLang === 'ta' ? 'ஊடாடும் தொடர்புக்காக AI சாட்பாட்டை இயக்குகிறது.' : 'Powers the AI chatbot for interactive communication.'}</li>
              <li><strong>Visme Forms:</strong> {currentLang === 'ta' ? 'கருத்து சமர்ப்பிப்புகளை நிர்வகிக்கிறது மற்றும் தரவைச் சேகரிக்கிறது.' : 'Manages feedback submissions and collects data.'}</li>
              <li><strong>Testimonial.to:</strong> {currentLang === 'ta' ? 'சான்றுரை சமர்ப்பிப்புகளை நிர்வகிக்கிறது மற்றும் தரவைச் சேகரிக்கிறது.' : 'Manages testimonial submissions and collects data.'}</li>
              <li><strong>Giscus:</strong> {currentLang === 'ta' ? 'வலைப்பதிவு இடுகைகளில் கருத்துகளை செயல்படுத்துகிறது.' : 'Enables commenting on blog posts.'}</li>
              <li><strong>Kit.com:</strong> {currentLang === 'ta' ? 'செய்திமடல் சந்தாவிற்கு பயன்படுத்தப்படுகிறது.' : 'Used for newsletter subscription.'}</li>
              <li><strong>Google Calendar:</strong> {currentLang === 'ta' ? 'எனது தனிப்பட்ட போர்ட்ஃபோலியோ காலெண்டர் ஒருங்கிணைப்பு.' : 'My personal portfolio calendar integration.'}</li>
              <li><strong>SociableKIT:</strong> {currentLang === 'ta' ? 'சமூக ஊடக ஊட்டங்கள் மற்றும் விட்ஜெட்களை உட்பொதிக்கிறது.' : 'Embeds social media feeds and widgets.'}</li>
              <li><strong>Email.js:</strong> {currentLang === 'ta' ? 'மின்னஞ்சல் தொடர்பு மற்றும் படிவ சமர்ப்பிப்புகளை எளிதாக்குகிறது.' : 'Facilitates email communication and form submissions.'}</li>
              <li><strong>Calendly:</strong> {currentLang === 'ta' ? 'சந்திப்புகள் மற்றும் கூட்டங்களை திட்டமிடுகிறது மற்றும் நிர்வகிக்கிறது.' : 'Schedules and manages appointments and meetings.'}</li>
              <li><strong>WakaTime Embeds:</strong> {currentLang === 'ta' ? 'குறியீட்டு செயல்பாட்டைக் கண்காணிக்கிறது மற்றும் குறியீட்டு புள்ளிவிவரங்களை உட்பொதிக்கிறது.' : 'Tracks coding activity and embeds coding stats.'}</li>
              <li><strong>Canva Embeds:</strong> {currentLang === 'ta' ? 'கேன்வாவுடன் உருவாக்கப்பட்ட ரெஸ்யூமேவை உட்பொதிக்கிறது.' : 'Embeds resume created with Canva.'}</li>
              <li><strong>Hashnode:</strong> {currentLang === 'ta' ? 'வலைப்பதிவு இடுகைகளை நிர்வகிக்கிறது மற்றும் காண்பிக்கிறது.' : 'Manages and displays blog posts.'}</li>
              <li><strong>Trello ({currentLang === 'ta' ? 'திட்ட பலகை' : 'Project board'}):</strong> {currentLang === 'ta' ? 'திட்ட பணிகள் மற்றும் ஒத்துழைப்பை நிர்வகிக்கிறது.' : 'Manages project tasks and collaboration.'}</li>
              <li><strong>Google Forms:</strong> {currentLang === 'ta' ? 'திட்ட பரிந்துரைகள் மற்றும் கருத்துகளைச் சேகரிக்கிறது.' : 'Collects project suggestions and feedback.'}</li>
              <li><strong>YouTube Video:</strong> {currentLang === 'ta' ? 'திட்ட விளக்க வீடியோக்களை ஹோஸ்ட் செய்து காண்பிக்கிறது.' : 'Hosts and displays project explanation videos.'}</li>
            </ul>
            <p>{content.section3.disclaimer[currentLang]}</p>
          </div>

          <div>
            <h3>{content.section4.title[currentLang]}</h3>
            <p>{content.section4.content[currentLang]}</p>
          </div>

          <div>
            <h3>{content.section5.title[currentLang]}</h3>
            <p>{content.section5.content[currentLang]}</p>
          </div>

          <div>
            <h3>{content.section6.title[currentLang]}</h3>
            <p>{content.section6.content[currentLang]}</p>
          </div>

          <div>
            <h3>{content.section7.title[currentLang]}</h3>
            <p>{content.section7.content[currentLang]}</p>
            <ul>
              <li>{content.section7.right1[currentLang]}</li>
              <li>{content.section7.right2[currentLang]}</li>
              <li>{content.section7.right3[currentLang]}</li>
            </ul>
          </div>

          <div>
            <h3>{content.section8.title[currentLang]}</h3>
            <p>{content.section8.content[currentLang]}</p>
          </div>

          <div>
            <h3>{content.section9.title[currentLang]}</h3>
            <p>{content.section9.content[currentLang]}</p>
            <p><strong>{content.section9.name[currentLang]}</strong><br />
              {content.section9.email[currentLang]}<br />
              {content.section9.website[currentLang]}<a href="https://saravana.vercel.app">saravana.vercel.app</a>
            </p>
          </div>
      </PrivacyPolicyContainer>
      <ScrollTop />
      <Footer />
    </RouteTransition>
  );
}