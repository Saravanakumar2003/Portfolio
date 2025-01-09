const educations = [
  // {
  //   id: 1,
  //   title: {
  //     en: 'Google IT Support',
  //     ta: 'கூகுள் ஐடி ஆதரவு',
  //   },
  //   subTitle: {
  //     en: 'Click here to see certificate',
  //     ta: 'சான்றிதழைப் பார்க்க இங்கே கிளிக் செய்யவும்',
  //   },
  //   status: {
  //     en: 'Completed',
  //     ta: 'நிறைவு',
  //   },
  //   level: {
  //     en: 'October 2023',
  //     ta: 'அக்டோபர் 2023',
  //   },
  //   link: 'https://www.coursera.org/account/accomplishments/professional-cert/7B6496VHSVNK?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof',
  //   description: {
  //     en: 'I learned the ins and outs of IT support, from computer hardware to the latest software. It helped me to learn how to provide support to meet any organization’s IT needs. It helped me to learn critical thinking and problem-solving skills using both Windows and Linux operating systems, and to gain practical experience with the command line.',
  //     ta: 'கணினி வன்பொருளிலிருந்து சமீபத்திய மென்பொருள் வரை ஐடி ஆதரவு பற்றிய முழு விவரங்களையும் கற்றுக்கொண்டேன். எந்த நிறுவனத்தின் ஐடி தேவைகளையும் பூர்த்தி செய்ய ஆதரவு வழங்குவது எப்படி என்று கற்றுக்கொண்டேன். விண்டோஸ் மற்றும் லினக்ஸ் இயக்க முறைமைகள் இரண்டையும் பயன்படுத்தி முக்கியமான சிந்தனை மற்றும் சிக்கல் தீர்க்கும் திறன்களை கற்றுக்கொண்டேன் மற்றும் கட்டளை வரியுடன் நடைமுறை அனுபவத்தைப் பெற்றேன்.',
  //   },
  //   logo: '/certi/coursera_logo.jpeg',
  // },
  {
    id: 2,
    title: {
      en: 'Microsoft AI Fundamentals',
      ta: 'மைக்ரோசாஃப்ட் ஏஐ அடிப்படைகள்',
    },
    subTitle: {
      en: 'Click here to see certificate',
      ta: 'சான்றிதழைப் பார்க்க இங்கே கிளிக் செய்யவும்',
    },
    status: {
      en: 'Completed',
      ta: 'நிறைவு',
    },
    level: {
      en: 'March 2023',
      ta: 'மார்ச் 2023',
    },
    link: 'https://www.credly.com/badges/8e6fd35d-7614-462f-8f2a-af895223de59/linked_in_profile',
    description: {
      en: 'I learned the fundamentals of Artificial Intelligence (AI), and how AI is being used to solve business problems. It helped me to explore use cases and discover ways to start identifying opportunities to use AI within my organization.',
      ta: 'நான் செயற்கை நுண்ணறிவின் (AI) அடிப்படைகளை கற்றுக்கொண்டேன், மேலும் AI வணிக சிக்கல்களைத் தீர்க்க எவ்வாறு பயன்படுத்தப்படுகிறது என்பதையும் கற்றுக்கொண்டேன். என் நிறுவனத்தில் AI ஐப் பயன்படுத்துவதற்கான வாய்ப்புகளை அடையாளம் காணத் தொடங்க வழக்குகளை ஆராய்ந்து கண்டறிய உதவியது.',
    },
    logo: '/certi/microsoft_logo.jpeg',
  },
  {
    id: 3,
    title: {
      en: 'Microsoft Azure Fundamentals',
      ta: 'மைக்ரோசாஃப்ட் அசூர் அடிப்படைகள்',
    },
    subTitle: {
      en: 'Click here to see certificate',
      ta: 'சான்றிதழைப் பார்க்க இங்கே கிளிக் செய்யவும்',
    },
    status: {
      en: 'Completed',
      ta: 'நிறைவு',
    },
    level: {
      en: 'Feb 2023',
      ta: 'பிப்ரவரி 2023',
    },
    link: 'https://www.credly.com/badges/399438ce-4210-4e08-af50-e9409d1343cf/public_url',
    description: {
      en: 'I learned basic cloud concepts and core Azure services; security, privacy, compliance, and trust; and Azure pricing and support. It helped me to get started with Azure, Microsoft’s cloud platform, and learn the fundamentals of cloud computing.',
      ta: 'நான் அடிப்படை கிளவுட் கருத்துக்கள் மற்றும் முக்கிய அசூர் சேவைகளை கற்றுக்கொண்டேன்; பாதுகாப்பு, தனியுரிமை, இணக்கம் மற்றும் நம்பிக்கை; மற்றும் அசூர் விலை மற்றும் ஆதரவு. மைக்ரோசாஃப்டின் கிளவுட் தளமான அசூருடன் தொடங்கவும், கிளவுட் கணினி அடிப்படைகளை கற்றுக்கொள்ளவும் உதவியது.',
    },
    logo: '/certi/microsoft_logo.jpeg',
  },
  {
    id: 4,
    title: {
      en: 'SoftSkills NPTEL',
      ta: 'மென்மையான திறன்கள் NPTEL',
    },
    subTitle: {
      en: 'Click here to see certificate',
      ta: 'சான்றிதழைப் பார்க்க இங்கே கிளிக் செய்யவும்',
    },
    status: {
      en: 'Completed',
      ta: 'நிறைவு',
    },
    level: {
      en: 'October 2022',
      ta: 'அக்டோபர் 2022',
    },
    link: '',
    description: {
      en: 'I learned the soft skills required to excel in the workplace. It helped me to learn the importance of communication skills, teamwork, and problem solving in the workplace. It helped me to learn how to manage time effectively, and how to manage and resolve conflicts that can arise in the workplace.',
      ta: 'வேலைக்குச் செல்ல தேவையான மென்மையான திறன்களை கற்றுக்கொண்டேன். வேலைக்குச் செல்ல தொடர்பு திறன்களின் முக்கியத்துவம், குழு வேலை மற்றும் சிக்கல் தீர்க்கும் திறன்களை கற்றுக்கொள்ள உதவியது. நேரத்தை திறமையாக நிர்வகிப்பது எப்படி, மற்றும் வேலைக்குச் செல்லக்கூடிய மோதல்களை நிர்வகித்து தீர்ப்பது எப்படி என்பதையும் கற்றுக்கொண்டேன்.',
    },
    logo: '/certi/nptel.jpeg',
  },
];

export default educations;