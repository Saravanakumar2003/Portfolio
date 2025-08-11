import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ScrollTop } from '../components/ScrollTop';
import { Footer } from '../components/Footer';
import { TermsAndConditionsContainer } from '../styles/termsandcondition';

export default function TermsAndConditions() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  const content = {
    title: {
      en: 'Terms and Conditions | Saravanakumar',
      ta: 'விதிமுறைகள் மற்றும் நிபந்தனைகள் | சரவணகுமார்'
    },
    heading: {
      en: 'Terms and Conditions',
      ta: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்'
    },
    lastUpdated: {
      en: 'Last Updated: August 7th, 2025',
      ta: 'கடைசியாக புதுப்பிக்கப்பட்டது: ஆகஸ்ட் 7, 2025'
    },
    intro: {
      en: 'Welcome to Saravanakumar\'s Portfolio. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use this site.',
      ta: 'சரவணகுமாரின் போர்ட்ஃபோலியோவுக்கு வரவேற்கிறோம். இந்த இணையதளத்தை அணுகுவதன் மூலம் அல்லது பயன்படுத்துவதன் மூலம், பின்வரும் விதிமுறைகள் மற்றும் நிபந்தனைகளுக்கு இணங்க ஒப்புக்கொள்கிறீர்கள். இந்த விதிமுறைகளுடன் நீங்கள் உடன்படவில்லை என்றால், தயவுசெய்து இந்த தளத்தைப் பயன்படுத்த வேண்டாம்.'
    },
    section1: {
      title: {
        en: '1. Acceptance of Terms',
        ta: '1. விதிமுறைகளின் ஏற்புதல்'
      },
      content: {
        en: 'By using Saravanakumar\'s Portfolio, you acknowledge that you have read, understood, and agree to these Terms and Conditions, along with the Privacy Policy.',
        ta: 'சரவணகுமாரின் போர்ட்ஃபோலியோவைப் பயன்படுத்துவதன் மூலம், தனியுரிமைக் கொள்கையுடன் சேர்ந்து இந்த விதிமுறைகள் மற்றும் நிபந்தனைகளை நீங்கள் படித்து, புரிந்துகொண்டு, ஒப்புக்கொண்டுள்ளீர்கள் என்பதை ஒப்புக்கொள்கிறீர்கள்.'
      }
    },
    section2: {
      title: {
        en: '2. Use of Website Content',
        ta: '2. இணையதள உள்ளடக்கத்தின் பயன்பாடு'
      },
      content: {
        en: 'The content on this website, including text, images, and design, is for personal, informational, and non-commercial use only. You may not copy, reproduce, distribute, or use any content without prior written permission.',
        ta: 'உரை, படங்கள் மற்றும் வடிவமைப்பு உட்பட இந்த இணையதளத்தின் உள்ளடக்கம் தனிப்பட்ட, தகவல் மற்றும் வணிகமற்ற பயன்பாட்டிற்கு மட்டுமே. முன்கூட்டிய எழுத்துப்பூர்வ அனுமதியின்றி நீங்கள் எந்த உள்ளடக்கத்தையும் நகலெடுக்கவோ, மறுஉருவாக்கம் செய்யவோ, விநியோகிக்கவோ அல்லது பயன்படுத்தவோ கூடாது.'
      }
    },
    section3: {
      title: {
        en: '3. Ownership and Attribution',
        ta: '3. உடைமை மற்றும் பங்களிப்பு'
      },
      content1: {
        en: 'Saravanakumar\'s Portfolio is based on the project Evander Inacio Portfolio, which was originally developed and publicly shared on GitHub by Evander Inacio.',
        ta: 'சரவணகுமாரின் போர்ட்ஃபோலியோ இவான்டர் இனாசியோ போர்ட்ஃபோலியோ திட்டத்தை அடிப்படையாகக் கொண்டுள்ளது, இது முதலில் இவான்டர் இனாசியோவால் உருவாக்கப்பட்டு GitHub இல் பகிரப்பட்டது.'
      },
      content2: {
        en: 'The project Evander Inacio Portfolio is not open-source, and its use and distribution are subject to the original creator\'s terms.',
        ta: 'இவான்டர் இனாசியோ போர்ட்ஃபோலியோ திட்டம் திறந்த மூலமல்ல, மேலும் அதன் பயன்பாடு மற்றும் விநியோகம் அசல் உருவாக்கியவரின் விதிமுறைகளுக்கு உட்பட்டது.'
      },
      content3: {
        en: 'Special thanks to Evander Inacio for granting permission to use and build upon his project. This project has since evolved with numerous enhancements and new features while maintaining proper attribution to the original creator.',
        ta: 'அவரது திட்டத்தைப் பயன்படுத்தவும் மேம்படுத்தவும் அனுமதி வழங்கியதற்காக இவான்டர் இனாசியோவுக்கு சிறப்பு நன்றி. அசல் உருவாக்கியவருக்கு சரியான பங்களிப்பை வழங்கும் அதே வேளையில், இந்த திட்டம் பல மேம்பாடுகள் மற்றும் புதிய அம்சங்களுடன் வளர்ச்சி அடைந்துள்ளது.'
      },
      content4: {
        en: 'Modifications and additional features to the site were made by Saravanakumar R for personal use and are not intended for redistribution or commercial use without proper authorization.',
        ta: 'தளத்தின் மாற்றங்கள் மற்றும் கூடுதல் அம்சங்கள் சரவணகுமார் R ஆல் தனிப்பட்ட பயன்பாட்டிற்காக செய்யப்பட்டன, மேலும் சரியான அங்கீகாரம் இல்லாமல் மறுவிநியோகம் அல்லது வணிக பயன்பாட்டிற்கு இவை நோக்கமாக இல்லை.'
      },
      disclaimer: {
        en: 'Disclaimer: The creator of Saravanakumar\'s Portfolio does not claim ownership of the original "Evander Inacio" project or its intellectual property. All rights to the original code are retained by the original creator.',
        ta: 'மறுப்பு: சரவணகுமாரின் போர்ட்ஃபோலியோவின் உருவாக்கியவர் அசல் "இவான்டர் இனாசியோ" திட்டம் அல்லது அதன் அறிவுசார் சொத்தின் உடைமையைக் கோரவில்லை. அசல் குறியீட்டின் அனைத்து உரிமைகளும் அசல் உருவாக்கியவரிடம் உள்ளன.'
      }
    },
    section4: {
      title: {
        en: '4. User Responsibilities',
        ta: '4. பயனர் பொறுப்புகள்'
      },
      content: {
        en: 'When using forms or interacting with the website, you agree to:',
        ta: 'படிவங்களைப் பயன்படுத்தும்போது அல்லது இணையதளத்துடன் தொடர்பு கொள்ளும்போது, நீங்கள் பின்வருவனவற்றிற்கு ஒப்புக்கொள்கிறீர்கள்:'
      },
      item1: {
        en: 'Provide accurate and truthful information.',
        ta: 'துல்லியமான மற்றும் உண்மையான தகவல்களை வழங்குதல்.'
      },
      item2: {
        en: 'Avoid submitting unlawful, harmful, or offensive content.',
        ta: 'சட்டவிரோத, தீங்கு விளைவிக்கும் அல்லது புண்படுத்தும் உள்ளடக்கத்தைச் சமர்ப்பிப்பதைத் தவிர்த்தல்.'
      },
      item3: {
        en: 'Refrain from attempting to access unauthorized areas of the website or servers.',
        ta: 'இணையதளம் அல்லது சர்வர்களின் அங்கீகரிக்கப்படாத பகுதிகளை அணுக முயற்சிப்பதைத் தவிர்த்தல்.'
      }
    },
    section5: {
      title: {
        en: '5. Data Collection and Use',
        ta: '5. தரவு சேகரிப்பு மற்றும் பயன்பாடு'
      },
      content: {
        en: 'By using features like the contact form or feedback form, you agree to the collection and use of your data as outlined in our Privacy Policy.',
        ta: 'தொடர்பு படிவம் அல்லது கருத்து படிவம் போன்ற அம்சங்களைப் பயன்படுத்துவதன் மூலம், எங்கள் தனியுரிமைக் கொள்கையில் குறிப்பிடப்பட்டுள்ளபடி உங்கள் தரவைச் சேகரிப்பதற்கும் பயன்படுத்துவதற்கும் நீங்கள் ஒப்புக்கொள்கிறீர்கள்.'
      }
    },
    section6: {
      title: {
        en: '6. Third-Party Services',
        ta: '6. மூன்றாம் தரப்பு சேவைகள்'
      },
      content1: {
        en: 'This site uses third-party tools (such as Google Analytics, Vercel, Botpress, Email.js, and others) to manage analytics, forms, chatbots, and embeds. Each service is governed by its own privacy policy and terms. Please refer to our [Privacy Policy] for more details.',
        ta: 'இந்த தளம் பகுப்பாய்வு, படிவங்கள், சாட்பாட்கள் மற்றும் உட்பொதிப்புகளை நிர்வகிக்க மூன்றாம் தரப்பு கருவிகளைப் (Google Analytics, Vercel, Botpress, Email.js மற்றும் பிற) பயன்படுத்துகிறது. ஒவ்வொரு சேவையும் அதன் சொந்த தனியுரிமைக் கொள்கை மற்றும் விதிமுறைகளால் நிர்வகிக்கப்படுகிறது. மேலும் விவரங்களுக்கு எங்கள் [தனியுரிமைக் கொள்கை] ஐப் பார்க்கவும்.'
      },
      content2: {
        en: 'These services operate under their respective terms and policies. We are not responsible for their data collection or handling practices.',
        ta: 'இந்த சேவைகள் அவற்றின் அந்தந்த விதிமுறைகள் மற்றும் கொள்கைகளின் கீழ் இயங்குகின்றன. அவர்களின் தரவு சேகரிப்பு அல்லது கையாளும் நடைமுறைகளுக்கு நாங்கள் பொறுப்பல்ல.'
      }
    },
    section7: {
      title: {
        en: '7. Limitation of Liability',
        ta: '7. பொறுப்பின் வரம்பு'
      },
      content1: {
        en: 'Saravanakumar\'s Portfolio is provided "as is," without warranties of any kind.',
        ta: 'சரவணகுமாரின் போர்ட்ஃபோலியோ "அது உள்ளபடியே" வழங்கப்படுகிறது, எந்த வகையான உத்தரவாதமும் இல்லை.'
      },
      content2: {
        en: 'We are not responsible for inaccuracies or errors in the content.',
        ta: 'உள்ளடக்கத்தில் உள்ள தவறுகள் அல்லது பிழைகளுக்கு நாங்கள் பொறுப்பல்ல.'
      },
      content3: {
        en: 'We disclaim liability for any damages resulting from the use of this website or third-party services.',
        ta: 'இந்த இணையதளம் அல்லது மூன்றாம் தரப்பு சேவைகளின் பயன்பாட்டால் ஏற்படும் எந்தவொரு சேதத்திற்கும் நாங்கள் பொறுப்பை மறுக்கிறோம்.'
      }
    },
    section8: {
      title: {
        en: '8. Intellectual Property',
        ta: '8. அறிவுசார் சொத்து'
      },
      content1: {
        en: 'All intellectual property related to the original project, including code, design, and content, remains the property of the original creator.',
        ta: 'குறியீடு, வடிவமைப்பு மற்றும் உள்ளடக்கம் உட்பட அசல் திட்டத்துடன் தொடர்புடைய அனைத்து அறிவுசார் சொத்துக்களும் அசல் உருவாக்கியவரின் சொத்தாகவே இருக்கும்.'
      },
      content2: {
        en: 'Modifications made to the site by Saravana Kumar R are for personal, non-commercial use only. Unauthorized use is prohibited outside the scope of personal use.',
        ta: 'சரவண குமார் R ஆல் தளத்தில் செய்யப்பட்ட மாற்றங்கள் தனிப்பட்ட, வணிகமற்ற பயன்பாட்டிற்கு மட்டுமே. தனிப்பட்ட பயன்பாட்டின் எல்லைக்கு வெளியே அங்கீகரிக்கப்படாத பயன்பாடு தடைசெய்யப்பட்டுள்ளது.'
      }
    },
    section9: {
      title: {
        en: '9. Changes to Terms and Conditions',
        ta: '9. விதிமுறைகள் மற்றும் நிபந்தனைகளில் மாற்றங்கள்'
      },
      content: {
        en: 'We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Users are encouraged to review the T&C periodically.',
        ta: 'இந்த விதிமுறைகள் மற்றும் நிபந்தனைகளை எந்த நேரத்திலும் புதுப்பிக்க அல்லது மாற்ற நாங்கள் உரிமை கொண்டுள்ளோம். இந்த பக்கத்தில் இடுகையிட்ட உடனே மாற்றங்கள் நடைமுறையில் இருக்கும். பயனர்கள் T&C ஐ அவ்வப்போது மதிப்பாய்வு செய்ய ஊக்குவிக்கப்படுகிறார்கள்.'
      }
    },
    section10: {
      title: {
        en: '10. Governing Law',
        ta: '10. ஆளும் சட்டம்'
      },
      content: {
        en: 'These Terms and Conditions are governed by the laws of India. Any disputes arising out of the use of this website will be subject to the jurisdiction of courts in India.',
        ta: 'இந்த விதிமுறைகள் மற்றும் நிபந்தனைகள் இந்தியாவின் சட்டங்களால் நிர்வகிக்கப்படுகின்றன. இந்த இணையதளத்தின் பயன்பாட்டில் இருந்து எழும் எந்தவொரு தகராறுகளும் இந்தியாவில் உள்ள நீதிமன்றங்களின் அதிகார வரம்புக்கு உட்பட்டதாக இருக்கும்.'
      }
    },
    section11: {
      title: {
        en: '11. Contact Information',
        ta: '11. தொடர்பு தகவல்கள்'
      },
      content: {
        en: 'For questions about these Terms and Conditions or the original project attribution, contact:',
        ta: 'இந்த விதிமுறைகள் மற்றும் நிபந்தனைகள் அல்லது அசல் திட்ட பங்களிப்பு பற்றிய கேள்விகளுக்கு, தொடர்பு கொள்ளுங்கள்:'
      },
      name: {
        en: 'Saravanakumar R',
        ta: 'சரவணகுமார் R'
      },
      website: {
        en: 'Website: ',
        ta: 'இணையதளம்: '
      }
    }
  };

  return (
    <>
      <Head>
        <title>{content.title[currentLang]}</title>
      </Head>
      <TermsAndConditionsContainer>
        <br /><br />
        <h1>{content.heading[currentLang]}</h1>

        <h2>{content.lastUpdated[currentLang]}</h2>

        <p>{content.intro[currentLang]}</p>

        <h3>{content.section1.title[currentLang]}</h3>
        <p>{content.section1.content[currentLang]}</p>

        <h3>{content.section2.title[currentLang]}</h3>
        <p>{content.section2.content[currentLang]}</p>

        <h3>{content.section3.title[currentLang]}</h3>
        <p>{content.section3.content1[currentLang]}</p>
        <p>{content.section3.content2[currentLang]}</p>
        <p>{content.section3.content3[currentLang]}</p>
        <p>{content.section3.content4[currentLang]}</p>
        <p><strong>{currentLang === 'ta' ? 'மறுப்பு:' : 'Disclaimer:'}</strong> {content.section3.disclaimer[currentLang]}</p>
        
        <h3>{content.section4.title[currentLang]}</h3>
        <p>{content.section4.content[currentLang]}</p>
        <ul>
          <li>{content.section4.item1[currentLang]}</li>
          <li>{content.section4.item2[currentLang]}</li>
          <li>{content.section4.item3[currentLang]}</li>
        </ul>

        <h3>{content.section5.title[currentLang]}</h3>
        <p>{content.section5.content[currentLang]}</p>

        <h3>{content.section6.title[currentLang]}</h3>
        <p>{content.section6.content1[currentLang]}</p>
        <p>{content.section6.content2[currentLang]}</p>

        <h3>{content.section7.title[currentLang]}</h3>
        <p>{content.section7.content1[currentLang]}</p>
        <p>{content.section7.content2[currentLang]}</p>
        <p>{content.section7.content3[currentLang]}</p>

        <h3>{content.section8.title[currentLang]}</h3>
        <p>{content.section8.content1[currentLang]}</p>
        <p>{content.section8.content2[currentLang]}</p>

        <h3>{content.section9.title[currentLang]}</h3>
        <p>{content.section9.content[currentLang]}</p>

        <h3>{content.section10.title[currentLang]}</h3>
        <p>{content.section10.content[currentLang]}</p>

        <h3>{content.section11.title[currentLang]}</h3>
        <p>{content.section11.content[currentLang]}</p>

        <p><strong>{content.section11.name[currentLang]}</strong><br />
          {content.section11.website[currentLang]}<a href="https://saravana.vercel.app">saravana.vercel.app</a>
        </p>
      </TermsAndConditionsContainer>
      <ScrollTop />
      <Footer />
    </>
  );
}