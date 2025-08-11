import { url } from "inspector"

const works = [
  {
    id: 1,
    url: 'NSS',
    img: '/Volunteering/NSS/NSSBanner.png',
    title: {
      en: 'NSS Volunteer',
      ta: 'NSS தன்னார்வலர்',
    },
    title2: {
      en: '# Social Service',
      ta: '# சமூக சேவை',
    },
    title3: {
      en: 'NSS Volunteer',
      ta: 'NSS தன்னார்வலர்',
    },
    subTitle: {
      en: 'National Service Scheme - VEC',
      ta: 'தேசிய சேவைத் திட்டம் - VEC',
    },
    description: {
      en: 'My NSS journey at Velammal Engineering College has been transformative. From leading a team, hosting events, winning competitions, to participating in impactful initiatives like health campaigns, tree plantations, and even my first dance performance on Republic Day - each moment has been a step towards personal growth and community impact.',
      ta: 'வேலம்மல் பொறியியல் கல்லூரியில் எனது NSS பயணம் மாற்றமளிக்கும் அனுபவமாக இருந்தது. குழுவை வழிநடத்துதல், நிகழ்வுகளை நடத்துதல், போட்டிகளில் வெற்றி பெறுதல் முதல் சுகாதாரப் பிரச்சாரங்கள், மரக்கன்று நடுதல், மற்றும் குடியரசு தினத்தில் எனது முதல் நடன நிகழ்ச்சி வரை - ஒவ்வொரு தருணமும் தனிப்பட்ட வளர்ச்சி மற்றும் சமூக தாக்கத்திற்கான ஒரு படியாக இருந்தது.',
    },
    tags: [
      { name: 'NSS Logo', icon: '/experience/Nss.png' },
      { name: 'VEC Logo', icon: '/education/Vec.png' },
    ],
    date: {
      en: 'Dec 2021 - Aug 2024',
      ta: 'டிசம்பர் 2021 - ஆகஸ்ட் 2024',
    },
    prints: [
      {
        name: {
          en: 'Commencement of my Journey',
          ta: 'எனது பயணத்தின் தொடக்கம்',
        },
        image: '/Volunteering/NSS/NSS1.jpeg',
        date: {
          en: '24th, November 2021',
          ta: '24வது, நவம்பர் 2021',
        },
        description: {
          en: 'The day (24/11/2021) when my journey as an NSS volunteer at Velammal Engineering College commenced.',
          ta: 'வேலம்மல் பொறியியல் கல்லூரியில் NSS தன்னார்வலராக எனது பயணம் தொடங்கிய நாள் (24/11/2021).',
        }
      },
      {
        name: {
          en: 'Republic Day 2022 Dance',
          ta: 'குடியரசு தினம் 2022 நடனம்',
        },
        image: '/Volunteering/NSS/NSS2.jpeg',
        date: {
          en: '26th, January 2022',
          ta: '26வது, ஜனவரி 2022',
        },
        url: 'https://youtu.be/MMTdvNh260E',
        urltitle: {
          en: 'Watch my dance here',
          ta: 'எனது நடனத்தை இங்கே பாருங்கள்',
        },
        description: {
          en: 'It was my first time dancing, forgive me if I was a bit odd in a group of excellent dancers. I was the one in the middle with the white shirt.',
          ta: 'இது எனது முதல் நடன அனுபவம், சிறந்த நடனக் கலைஞர்கள் குழுவில் நான் சற்று வித்தியாசமாக இருந்தால் மன்னிக்கவும். வெள்ளை சட்டையுடன் நடுவில் இருந்தவன் நான்.',
        }
      },
      {
        name: {
          en: 'GD and Speech winner',
          ta: 'குழு விவாதம் மற்றும் பேச்சுப் போட்டி வெற்றியாளர்',
        },
        image: '/Volunteering/NSS/NSS3.jpeg',
        date: {
          en: '9th, March 2022',
          ta: '9வது, மார்ச் 2022',
        },
        description: {
          en: 'Group Discussion and Speech winner of the NSS internal competition. I was receiving the award from my General Coordination (2021 to 2022) of NSS, Muralidharan.',
          ta: 'NSS உள் போட்டியில் குழு விவாதம் மற்றும் பேச்சுப் போட்டி வெற்றியாளர். எனது பொது ஒருங்கிணைப்பாளர் (2021 முதல் 2022 வரை) NSS இன் முரளிதரனிடமிருந்து விருதைப் பெற்றுக்கொண்டேன்.',
        }
      },
      {
        name: {
          en: 'Planting Seeds of Change',
          ta: 'மாற்றத்தின் விதைகளை நடுதல்',
        },
        image: '/Volunteering/NSS/NSS4.jpeg',
        date: {
          en: '22nd, March 2022',
          ta: '22வது, மார்ச் 2022',
        },
        description: {
          en: 'Participated in a meaningful tree plantation drive as an NSS volunteer.',
          ta: 'NSS தன்னார்வலராக அர்த்தமுள்ள மரம் நடும் இயக்கத்தில் பங்கேற்றேன்.',
        }
      },
      {
        name: {
          en: 'Gandhi Jayanthi Short Film 2023',
          ta: 'காந்தி ஜெயந்தி குறும்படம் 2023',
        },
        image: '/Volunteering/NSS/NSS5.jpeg',
        date: {
          en: '2nd, October 2022',
          ta: '2வது, அக்டோபர் 2022',
        },
        url: 'https://www.youtube.com/watch?v=5nw9oLOoU4Q',
        urltitle: {
          en: 'Watch my video here',
          ta: 'எனது வீடியோவை இங்கே பாருங்கள்',
        },
        description: {
          en: 'My part spanned from 1.29 to 2.10 in the video, and it portrayed the character of Lord Erwin.',
          ta: 'வீடியோவில் 1.29 முதல் 2.10 வரை எனது பங்கு இருந்தது, அது லார்ட் எர்வின் கதாபாத்திரத்தை சித்தரித்தது.',
        }
      },
      {
        name: {
          en: 'Independence Day 2023 Host',
          ta: 'சுதந்திர தினம் 2023 தொகுப்பாளர்',
        },
        image: '/Volunteering/NSS/NSS6.jpeg',
        date: {
          en: '15th, August 2023',
          ta: '15வது, ஆகஸ்ட் 2023',
        },
        description: {
          en: 'I was privileged to have hosted the Independence Day celebrations as part of my role as an NSS volunteer. This is the last event of my volunteering period in NSS.',
          ta: 'NSS தன்னார்வலராக எனது பங்கின் ஒரு பகுதியாக சுதந்திர தின கொண்டாட்டங்களை தொகுத்து வழங்கும் பாக்கியம் பெற்றேன். இது NSS இல் எனது தன்னார்வ காலத்தின் கடைசி நிகழ்வாகும்.',
        }
      },
      {
        name: {
          en: 'Technical Team Head (2023-24)',
          ta: 'தொழில்நுட்ப குழுத் தலைவர் (2023-24)',
        },
        image: '/Volunteering/NSS/NSS7.jpg',
        date: {
          en: '9th, September 2023',
          ta: '9வது, செப்டம்பர் 2023',
        },
        description: {
          en: 'I was honoured to be appointed Technical Team Head by Dr.R. Karthik Sir (NSS, Program Officer), extending my volunteer period for an additional year starting September 9, 2023. This role acknowledges my dedication and technical prowess demonstrated over the past two years within the National Service Scheme (NSS), fostering innovation and excellence in our projects and events.',
          ta: 'டாக்டர். ஆர். கார்த்திக் சார் (NSS, திட்ட அதிகாரி) அவர்களால் தொழில்நுட்ப குழுத் தலைவராக நியமிக்கப்பட்டது எனக்கு மிகுந்த பெருமையாக இருந்தது, செப்டம்பர் 9, 2023 முதல் கூடுதல் ஒரு வருடத்திற்கு எனது தன்னார்வ காலத்தை நீட்டித்தது. இந்த பங்கு தேசிய சேவைத் திட்டத்தில் (NSS) கடந்த இரண்டு ஆண்டுகளில் நான் வெளிப்படுத்திய அர்ப்பணிப்பு மற்றும் தொழில்நுட்ப திறமையை அங்கீகரிக்கிறது.',
        }
      },
      {
        name: {
          en: 'Conducted GD for Juniors',
          ta: 'இளையவர்களுக்கு குழு விவாதம் நடத்தினேன்',
        },
        image: '/Volunteering/NSS/NSS8.jpg',
        date: {
          en: '23rd, September 2023',
          ta: '23வது, செப்டம்பர் 2023',
        },
        description: {
          en: 'I conducted a Group Discussion for the juniors on the occasion of NSS Day. The topic was "Social Media - Boon or Bane". The juniors were very active and they participated very well in the discussion.',
          ta: 'NSS தினத்தின் வாயிலாக இளையவர்களுக்கு குழு விவாதம் நடத்தினேன். தலைப்பு "சமூக ஊடகம் - வரமா சாபமா" என்பதாக இருந்தது. இளையவர்கள் மிகவும் சுறுசுறுப்பாக இருந்தனர் மற்றும் விவாதத்தில் சிறப்பாக பங்கேற்றனர்.',
        }
      },
      {
        name: {
          en: 'NSS RD Parade Selection in Trichy',
          ta: 'திருச்சியில் NSS குடியரசு தின அணிவகுப்பு தேர்வு',
        },
        image: '/Volunteering/NSS/NSS9.jpg',
        date: {
          en: '31st, December 2023',
          ta: '31வது, டிசம்பர் 2023',
        },
        description: {
          en: 'I proudly represented NSS at the RD Parade Selection in Trichy, showcasing my commitment to national service and leadership potential. The event was a great learning experience and an opportunity to meet like-minded individuals.',
          ta: 'திருச்சியில் நடந்த குடியரசு தின அணிவகுப்பு தேர்வில் NSS ஐ பெருமையுடன் பிரதிநிதித்துவப்படுத்தினேன், தேசிய சேவை மற்றும் தலைமைத்துவ திறனுக்கான எனது அர்ப்பணிப்பை வெளிப்படுத்தினேன். இந்த நிகழ்வு ஒரு சிறந்த கற்றல் அனுபவமாகவும் ஒத்த எண்ணம் கொண்ட நபர்களை சந்திக்கும் வாய்ப்பாகவும் இருந்தது.',
        }
      },
      {
        name: {
          en: 'Besant Nagar Beach Cleaning',
          ta: 'பேசன்ட் நகர் கடற்கரை சுத்தம்',
        },
        image: '/Volunteering/NSS/NSS10.jpg',
        date: {
          en: '28th, January 2024',
          ta: '28வது, ஜனவரி 2024',
        },
        description: {
          en: 'I participated with my NSS Squad in a beach cleaning drive at Besant Nagar Beach, Chennai, as part of my ongoing commitment to environmental conservation and community service. The event was a great success, and I was delighted to contribute to the cleanliness of our city.',
          ta: 'சுற்றுச்சூழல் பாதுகாப்பு மற்றும் சமூக சேவைக்கான எனது தொடர்ச்சியான அர்ப்பணிப்பின் ஒரு பகுதியாக, சென்னையின் பேசன்ட் நகர் கடற்கரையில் எனது NSS குழுவுடன் கடற்கரை சுத்தம் செய்யும் இயக்கத்தில் பங்கேற்றேன். இந்த நிகழ்வு பெரிய வெற்றியாக இருந்தது, எங்கள் நகரத்தின் சுத்தத்திற்கு பங்களிப்பதில் மகிழ்ச்சி அடைந்தேன்.',
        }
      },
      {
        name: {
          en: 'NSS Glaucathon Rally',
          ta: 'NSS க்ளாகேதான் பேரணி',
        },
        image: '/Volunteering/NSS/NSS11.jpg',
        date: {
          en: '16th, March 2024',
          ta: '16வது, மார்ச் 2024',
        },
        description: {
          en: 'I participated in the NSS Glaucathon Rally, an initiative to raise awareness about glaucoma and promote eye health. The rally started at Dunlop and ended at Vasan Eye Care Hospital, Chennai. It was a great opportunity to contribute to a noble cause and spread awareness about eye health.',
          ta: 'க்ளாகோமா பற்றிய விழிப்புணர்வை ஏற்படुத்த மற்றும் கண் ஆரோக்கியத்தை மேம்படுத்துவதற்கான முன்முயற்சியான NSS க்ளாகேதான் பேரணியில் பங்கேற்றேன். பேரணி டன்லப்பில் தொடங்கி சென்னையில் உள்ள வாசன் கண் பராமரிப்பு மருத்துவமனையில் முடிந்தது. இது ஒரு உன்னத நோக்கத்திற்கு பங்களித்து கண் ஆரோக்கியம் பற்றிய விழிப்புணர்வை பரப்புவதற்கான சிறந்த வாய்ப்பாக இருந்தது.',
        }
      },
      {
        name: {
          en: 'NSS Blood Donation Camp',
          ta: 'NSS இரத்த தான முகாம்',
        },
        image: '/Volunteering/NSS/NSS14.JPG',
        date: {
          en: '26th, March 2024',
          ta: '26வது, மார்ச் 2024',
        },
        description: {
          en: 'I volunteered at the NSS Blood Donation Camp, an initiative to promote voluntary blood donation and save lives. The camp was organized at Velammal Engineering College, and I was delighted to contribute to this noble cause.',
          ta: 'தன்னார்வ இரத்த தானத்தை ஊக்குவிக்கவும் உயிர்களைக் காப்பாற்றவும் ஒரு முன்முயற்சியான NSS இரத்த தான முகாமில் தன்னார்வலராக பணியாற்றினேன். முகாம் வேலம்மல் பொறியியல் கல்லூரியில் ஏற்பாடு செய்யப்பட்டது, இந்த உன்னத நோக்கத்திற்கு பங்களிப்பதில் மகிழ்ச்சி அடைந்தேன்.',
        }
      },
      {
        name: {
          en: 'My Co-Ordinators team',
          ta: 'எனது ஒருங்கிணைப்பாளர் குழு',
        },
        image: '/Volunteering/NSS/NSS12.JPG',
        date: {
          en: '15th, August 2024',
          ta: '15வது, ஆகஸ்ட் 2024',
        },
        description: {
          en: 'Being part of the NSS Co-ordinator team for 2023-24 was an incredible honor. Led by the inspiring Dr. R. Karthik Sir, we united as passionate volunteers to organize impactful events, creating lasting memories and deepening our commitment to service and community. Together, we worked tirelessly to foster a culture of social responsibility and make a positive impact on society.',
          ta: '2023-24க்கான NSS ஒருங்கிணைப்பாளர் குழுவின் ஒரு பகுதியாக இருப்பது ஒரு நம்பமுடியாத பெருமையாக இருந்தது. ஊக்கமளிக்கும் டாக்டர். ஆர். கார்த்திக் சாரின் தலைமையில், தாக்கமான நிகழ்வுகளை ஏற்பாடு செய்ய ஆர்வமுள்ள தன்னார்வலர்களாக ஒன்றுபட்டோம், நீடித்த நினைவுகளை உருவாக்கினோம் மற்றும் சேவை மற்றும் சமூகத்திற்கான எங்கள் அர்ப்பணிப்பை ஆழப்படுத்தினோம்.',
        }
      },
      {
        name: {
          en: 'Our Panel Handover Ceremony',
          ta: 'எங்கள் குழுவின் பதவி ஒப்படைப்பு விழா',
        },
        image: '/Volunteering/NSS/NSS13.JPG',
        date: {
          en: '29th, August 2024',
          ta: '29வது, ஆகஸ்ட் 2024',
        },
        description: {
          en: 'The NSS Panel Handover Ceremony was a memorable event where the outgoing panel handed over the responsibilities to the incoming panel. It was a moment of pride and gratitude as we reflected on our achievements and passed on the baton to the next generation of NSS leaders.',
          ta: 'NSS குழு பதவி ஒப்படைப்பு விழா ஒரு மறக்க முடியாத நிகழ்வாக இருந்தது, அங்கு வெளியேறும் குழு புதிய குழுவிடம் பொறுப்புகளை ஒப்படைத்தது. எங்கள் சாதனைகளை நினைவுகூர்ந்து அடுத்த தலைமுறை NSS தலைவர்களுக்கு தலைமைப் பொறுப்பை ஒப்படைத்தபோது அது பெருமை மற்றும் நன்றியுணர்வின் தருணமாக இருந்தது.',
        }
      },
      {
        name: {
          en: 'NSS Image Gallery',
          ta: 'NSS படத் தொகுப்பு',
        },
        image: '/Volunteering/Banners/NSSJourney.png',
        date: {
          en: '24th, November 2021 - 29th, August 2024',
          ta: '24வது, நவம்பர் 2021 - 29வது, ஆகஸ்ட் 2024',
        },
        url: 'https://photos.app.goo.gl/Md3BTQYZeA37NPSj9',
        urltitle: {
          en: 'View the images here',
          ta: 'படங்களை இங்கே பாருங்கள்',
        },
        description: {
          en: 'A collection of images from my NSS journey at Velammal Engineering College, showcasing my participation in various events, competitions, and initiatives.',
          ta: 'வேலம்மல் பொறியியல் கல்லூரியில் எனது NSS பயணத்தின் படத் தொகுப்பு, பல்வேறு நிகழ்வுகள், போட்டிகள் மற்றும் முன்முயற்சிகளில் எனது பங்கேற்பை வெளிப்படுத்துகிறது.',
        }
      },
      {
        name: {
          en: 'NSS Journey Documentation',
          ta: 'NSS பயண ஆவணப்படுத்தல்',
        },
        image: '/Volunteering/Banners/NSSDocumentation.png',
        date: {
          en: '24th, November 2021 - 29th, August 2024',
          ta: '24வது, நவம்பர் 2021 - 29வது, ஆகஸ்ட் 2024',
        },
        url: 'https://drive.google.com/drive/folders/1Zjb4FVAGb8vq1X2Lo_-o8tZAbOaPNzcg?usp=drive_link',
        urltitle: {
          en: 'View the documentation here',
          ta: 'ஆவணங்களை இங்கே பாருங்கள்',
        },
        description: {
          en: 'A comprehensive documentation of my NSS journey containing Newsletters, Host Scripts, Certificates, Contributions and other important documents.',
          ta: 'செய்திமடல்கள், தொகுப்பாளர் ஸ்கிரிப்டுகள், சான்றிதழ்கள், பங்களிப்புகள் மற்றும் பிற முக்கியமான ஆவணங்களைக் கொண்ட எனது NSS பயணத்தின் விரிவான ஆவணப்படுத்தல்.',
        }
      }
    ]
  },
  {
    id: 2,
    url: 'Shelter-Service',
    img: '/Volunteering/Bhumi/Bhumi.png',
    title: {
      en: 'Ignite - Kanini',
      ta: 'இக்னைட் - கணினி',
    },
    title2: {
      en: '#Shelter Care',
      ta: '#ஆதரவு இல்லம்',
    },
    title3: {
      en: 'Bhumi Volunteer',
      ta: 'பூமி தன்னார்வலர்',
    },
    subTitle: {
      en: 'Bhumi - Chennai',
      ta: 'பூமி - சென்னை',
    },
    description: {
      en: 'Ignite is a shelter transformation program that aims to improve the quality of education provided to children in shelter homes. The program focuses on the holistic development of the children by providing them with the necessary support and guidance.',
      ta: 'இக்னைட் என்பது ஆதரவு இல்லங்களில் உள்ள குழந்தைகளுக்கு வழங்கப்படும் கல்வியின் தரத்தை மேம்படுத்துவதை நோக்கமாகக் கொண்ட ஒரு ஆதரவு இல்ல மாற்றுத் திட்டமாகும். இந்த திட்டம் குழந்தைகளுக்கு தேவையான ஆதரவு மற்றும் வழிகாட்டுதலை வழங்குவதன் மூலம் அவர்களின் முழுமையான வளர்ச்சியில் கவனம் செலுத்துகிறது.',
    },
    tags: [
      { name: 'Bhumi Logo', icon: '/Volunteering/Bhumi/BhumiLogo.png' },
      { name: 'Nakshatra Logo', icon: '/Volunteering/Bhumi/Nakshatra.png' },
    ],
    date: {
      en: 'Jun 2023 - Present',
      ta: 'ஜூன் 2023 - தற்போது',
    },
    prints: [
      {
        name: {
          en: 'The Induction Program',
          ta: 'அறிமுக திட்டம்',
        },
        image: '/Volunteering/Bhumi/prep.jpg',
        date: {
          en: '4th, June 2023',
          ta: '4வது, ஜூன் 2023',
        },
        description: {
          en: 'The day (4/6/2023) when my journey as a Bhumi volunteer commenced. I decided to join the Kanini program as I am passionate about teaching kids about Computer Science.',
          ta: 'பூமி தன்னார்வலராக எனது பயணம் தொடங்கிய நாள் (4/6/2023). குழந்தைகளுக்கு கணினி அறிவியலைப் பற்றி கற்பிப்பதில் ஆர்வம் இருப்பதால் கணினி திட்டத்தில் சேர முடிவு செய்தேன்.',
        }
      },
      {
        name: {
          en: 'Kanini Induction Program',
          ta: 'கணினி அறிமுக திட்டம்',
        },
        image: '/Volunteering/Bhumi/Kanini.jpg',
        date: {
          en: '11th, June 2023',
          ta: '11வது, ஜூன் 2023',
        },
        description: {
          en: 'This Induction Program was conducted by the Kanini team. The program was conducted to give us an overview of the program and also to give us an idea of what we are going to do in the program and in which center we are going to teach.',
          ta: 'இந்த அறிமுக திட்டம் கணினி குழுவால் நடத்தப்பட்டது. திட்டத்தின் மேலோட்டத்தை வழங்குவதற்கும் திட்டத்தில் நாம் என்ன செய்யப் போகிறோம் மற்றும் எந்த மையத்தில் கற்பிக்கப் போகிறோம் என்பது பற்றிய யோசனையை வழங்குவதற்கும் இந்த திட்டம் நடத்தப்பட்டது.',
        }
      },
      {
        name: {
          en: 'Bhumi Awards 2023',
          ta: 'பூமி விருதுகள் 2023',
        },
        image: '/Volunteering/Bhumi/Award.JPG',
        date: {
          en: '16th, July 2023',
          ta: '16வது, ஜூலை 2023',
        },
        description: {
          en: 'The awards were given to the volunteers who have done a great job in the past year. I was a spectator for the event and I was inspiring to see the volunteers getting the awards.',
          ta: 'கடந்த ஆண்டில் சிறந்த பணியைச் செய்த தன்னார்வலர்களுக்கு விருதுகள் வழங்கப்பட்டன. நான் இந்த நிகழ்வின் பார்வையாளராக இருந்தேன், தன்னார்வலர்கள் விருதுகளைப் பெறுவதைப் பார்ப்பது ஊக்கமளிக்கும் விஷயமாக இருந்தது.',
        }
      },
      {
        name: {
          en: 'Nakshatra Arts 2023',
          ta: 'நக்ஷத்ரா கலைகள் 2023',
        },
        image: '/Volunteering/Bhumi/NakshatraCerti.jpeg',
        date: {
          en: '9th, September 2023',
          ta: '9வது, செப்டம்பர் 2023',
        },
        description: {
          en: 'The event was conducted to showcase the talents of the kids. The kids performed various activities such as Dance, Singing, Drawing, etc. The kids were very happy and enjoyed the event.',
          ta: 'குழந்தைகளின் திறமைகளை வெளிப்படுத்துவதற்காக இந்த நிகழ்வு நடத்தப்பட்டது. குழந்தைகள் நடனம், பாடுதல், ஓவியம் வரைதல் போன்ற பல்வேறு செயல்பாடுகளை நிகழ்த்தினர். குழந்தைகள் மிகவும் மகிழ்ச்சியாக இருந்தனர் மற்றும் நிகழ்வை ரசித்தனர்.',
        }
      },
      {
        name: {
          en: 'City Con 2023',
          ta: 'சிட்டி கான் 2023',
        },
        image: '/Volunteering/Bhumi/Citycon.jpg',
        date: {
          en: '17th, December 2023',
          ta: '17வது, டிசம்பர் 2023',
        },
        description: {
          en: 'City Con 2023 was a meet within the Chennai city volunteers. The meet was conducted to discuss the progress of the program and also to discuss the problems faced by the volunteers. The meet was very useful and I got to know a lot of things about the program.',
          ta: 'சிட்டி கான் 2023 என்பது சென்னை நகர தன்னார்வலர்களுக்குள் ஒரு சந்திப்பாக இருந்தது. திட்டத்தின் முன்னேற்றத்தைப் பற்றி விவாதிக்கவும் தன்னார்வலர்கள் எதிர்கொள்ளும் பிரச்சனைகளைப் பற்றி விவாதிக்கவும் இந்த சந்திப்பு நடத்தப்பட்டது. சந்திப்பு மிகவும் பயனுள்ளதாக இருந்தது மற்றும் திட்டத்தைப் பற்றி நிறைய விஷயங்களை அறிந்துகொண்டேன்.',
        }
      },
      {
        name: {
          en: 'Seeds of Change',
          ta: 'மாற்றத்தின் விதைகள்',
        },
        image: '/Volunteering/Bhumi/Seeds.png',
        date: {
          en: '14th, April 2024',
          ta: '14வது, ஏப்ரல் 2024',
        },
        description: {
          en: 'Participated in a meaningful tree plantation drive as a Bhumi volunteer conducted by Eco-Champs Team of Bhumi.',
          ta: 'பூமியின் ஈகோ-சாம்ப்ஸ் குழுவால் நடத்தப்பட்ட பூமி தன்னார்வலராக அர்த்தமுள்ள மரம் நடும் இயக்கத்தில் பங்கேற்றேன்.',
        }
      },
      {
        name: {
          en: 'Kanini AVM',
          ta: 'கணினி AVM',
        },
        image: '/Volunteering/Bhumi/AVM.jpg',
        date: {
          en: '23rd, Feb 2025',
          ta: '23வது, பிப் 2025',
        },
        description: {
          en: 'Annual Volunteer Meet (AVM) was conducted to discuss the progress of the program and also to discuss the problems faced by the volunteers.',
          ta: 'வருடாந்திர தன்னார்வலர் சந்திப்பு (AVM) திட்டத்தின் முன்னேற்றத்தைப் பற்றி விவாதிக்கவும் தன்னார்வலர்கள் எதிர்கொள்ளும் பிரச்சனைகளைப் பற்றி விவாதிக்கவும் நடத்தப்பட்டது.',
        }
      },
      {
        name: {
          en: 'Caught Ya! Award',
          ta: 'காட் யா! விருது',
        },
        image: '/Volunteering/Bhumi/CaughtYa.JPG',
        date: {
          en: '23rd, Feb 2025',
          ta: '23வது, பிப் 2025',
        },
        description: {
          en: 'I was awarded the "Caught Ya!" award for my dedication and hard work in the Kanini program. The award was given to me by Sivasubramanium, LB of Kanini, Bhumi.',
          ta: 'கணினி திட்டத்தில் எனது அர்ப்பணிப்பு மற்றும் கடின உழைப்பிற்காக "காட் யா!" விருது வழங்கப்பட்டது. பூமியின் கணினி LB சிவசுப்ரமணியம் அவர்களால் எனக்கு இந்த விருது வழங்கப்பட்டது.',
        },
        url: 'https://drive.google.com/file/d/1ISK_3vqLz2MOjK2LlqtUWws58D5jdX5a/view?usp=sharing',
        urltitle: {
          en: 'View the certificate here',
          ta: 'சான்றிதழை இங்கே பாருங்கள்',
        }
      },
      {
        name: {
          en: 'Bhumi Image Gallery',
          ta: 'பூமி படத் தொகுப்பு',
        },
        image: '/Volunteering/Banners/BhumiJourney.png',
        date: {
          en: '4th, June 2023 - Present',
          ta: '4வது, ஜூன் 2023 - தற்போது',
        },
        url: 'https://photos.app.goo.gl/9MBDG7vz87Bczgy19',
        urltitle: {
          en: 'View the images here',
          ta: 'படங்களை இங்கே பாருங்கள்',
        },
        description: {
          en: 'A collection of images from my Kanini journey at Bhumi, showcasing my participation in various events, competitions, and initiatives.',
          ta: 'பூமியில் எனது கணினி பயணத்தின் படத் தொகுப்பு, பல்வேறு நிகழ்வுகள், போட்டிகள் மற்றும் முன்முயற்சிகளில் எனது பங்கேற்பை வெளிப்படுத்துகிறது.',
        }
      },
      {
        name: {
          en: 'Bhumi Documentation',
          ta: 'பூமி ஆவணப்படுத்தல்',
        },
        image: '/Volunteering/Banners/BhumiDocumentation.png',
        date: {
          en: '4th, June 2023 - Present',
          ta: '4வது, ஜூன் 2023 - தற்போது',
        },
        url: 'https://drive.google.com/drive/folders/14V1WOJlykj97yWppdx2ESnuK1U-yhafC?usp=sharing',
        urltitle: {
          en: 'View the documentation here',
          ta: 'ஆவணங்களை இங்கே பாருங்கள்',
        },
        description: {
          en: 'A comprehensive documentation of my Kanini journey at Bhumi, highlighting my participation in events, competitions, and initiatives.',
          ta: 'பூமியில் எனது கணினி பயணத்தின் விரிவான ஆவணப்படுத்தல், நிகழ்வுகள், போட்டிகள் மற்றும் முன்முயற்சிகளில் எனது பங்கேற்பை எடுத்துக்காட்டுகிறது.',
        }
      }
    ]
  },
  {
    id: 3,
    url: 'School-Service',
    img: '/Volunteering/School/Govt.png',
    title: {
      en: 'Volunteer',
      ta: 'தன்னார்வலர்',
    },
    title2: {
      en: '#Passion',
      ta: '#ஆர்வம்',
    },
    title3: {
      en: 'Teaching Kids',
      ta: 'குழந்தைகளுக்கு கற்பித்தல்',
    },
    subTitle: {
      en: 'Government School - Chennai',
      ta: 'அரசுப் பள்ளி - சென்னை',
    },
    description: {
      en: 'My strong initiative, exceptional passion, and ability to teach a diverse range of learners allow me to play a crucial role in a teaching environment. Even though I am a college student with academics to follow, I still want to pursue my passion for teaching.',
      ta: 'எனது வலுவான முன்முயற்சி, விதிவிலக்கான ஆர்வம் மற்றும் பல்வேறு வகையான கற்றலாளர்களுக்கு கற்பிக்கும் திறன் ஆகியவை கற்பித்தல் சூழலில் முக்கிய பங்கு வகிக்க அனுமதிக்கின்றன. நான் கல்லூரி மாணவனாக இருந்து கல்வியைப் பின்பற்ற வேண்டியிருந்தாலும், கற்பித்தலுக்கான எனது ஆர்வத்தைத் தொடர விரும்புகிறேன்.',
    },
    tags: [
      { name: 'Students', icon: '/Volunteering/School/Students.png' },
      { name: 'Sessions', icon: '/Volunteering/School/Sessions.png' },
    ],
    date: {
      en: 'Apr 2022 - Jan 2023',
      ta: 'ஏப் 2022 - ஜன 2023',
    },
    prints: [
      {
        name: {
          en: 'The Beginning',
          ta: 'தொடக்கம்',
        },
        image: '/Volunteering/School/1.jpg',
        date: {
          en: '11th, July 2022',
          ta: '11வது, ஜூலை 2022',
        },
        description: {
          en: 'I have taken spoken English classes to 4th & 5th Grade. Phase 2 started on 11th July and ended on 31st August. Phase 2 had a total of 22 sessions in which the students have taught various important topics and also took part in fun activities.',
          ta: '4வது மற்றும் 5வது வகுப்பு மாணவர்களுக்கு பேசும் ஆங்கில வகுப்புகளை நடத்தினேன். இரண்டாம் கட்டம் ஜூலை 11ல் தொடங்கி ஆகஸ்ட் 31ல் முடிந்தது. இரண்டாம் கட்டத்தில் மொத்தம் 22 அமர்வுகள் இருந்தன, அதில் மாணவர்களுக்கு பல்வேறு முக்கியமான தலைப்புகள் கற்பிக்கப்பட்டன மற்றும் வேடிக்கையான செயல்பாடுகளிலும் பங்கேற்றனர்.',
        }
      },
      {
        name: {
          en: 'Volunteering with Poovaragavan',
          ta: 'பூவரகவனுடன் தன்னார்வ பணி',
        },
        image: '/Volunteering/School/Poova.jpg',
        date: {
          en: '13th, July 2022',
          ta: '13வது, ஜூலை 2022',
        },
        description: {
          en: 'My fellow NSS volunteer, Poovaragavan joined with me for a day to teach Articles to the kids. He taught the kids about the basics of Articles and also gave them a few examples.',
          ta: 'எனது சக NSS தன்னார்வலர் பூவரகவன் குழந்தைகளுக்கு கட்டுரைகளைப் பற்றி கற்பிக்க ஒரு நாள் என்னுடன் சேர்ந்தார். அவர் குழந்தைகளுக்கு கட்டுரைகளின் அடிப்படைகளைப் பற்றி கற்பித்தார் மற்றும் சில உதாரணங்களையும் கொடுத்தார்.',
        }
      },
      {
        name: {
          en: 'Volunteering with Vijay',
          ta: 'விஜயுடன் தன்னார்வ பணி',
        },
        image: '/Volunteering/School/Vijay.jpg',
        date: {
          en: '14th, July 2022',
          ta: '14வது, ஜூலை 2022',
        },
        description: {
          en: 'My friend Vijay joined with me for a day to teach kids verbs. He taught the kids about the basics of verbs and also gave them a few examples. He also taught the kids about the basics of tenses.',
          ta: 'எனது நண்பர் விஜய் குழந்தைகளுக்கு வினைச்சொற்களைப் பற்றி கற்பிக்க ஒரு நாள் என்னுடன் சேர்ந்தார். அவர் குழந்தைகளுக்கு வினைச்சொற்களின் அடிப்படைகளைப் பற்றி கற்பித்தார் மற்றும் சில உதாரணங்களையும் கொடுத்தார். அவர் குழந்தைகளுக்கு காலங்களின் அடிப்படைகளையும் கற்பித்தார்.',
        }
      },
      {
        name: {
          en: 'Awareness Video in English',
          ta: 'ஆங்கிலத்தில் விழிப்புணர்வு வீடியோ',
        },
        image: '/Volunteering/School/2.jpg',
        date: {
          en: '12th, August 2022',
          ta: '12வது, ஆகஸ்ட் 2022',
        },
        url: 'https://drive.google.com/file/d/1cdWwjy40xD6y7-vs74b3F8vrTB1WTowh/view?usp=sharing',
        urltitle: {
          en: 'Watch the video here',
          ta: 'வீடியோவை இங்கே பாருங்கள்',
        },
        description: {
          en: 'Awareness Video On International Youth Day (12th Aug), An awareness video was created on the topic given by the United Nations Ageism. The 5th Grade students spoke 1 Min about ageism in English. The video was uploaded on Drive and the link was shared below.',
          ta: 'சர்வதேச இளைஞர் தினத்தில் (ஆகஸ்ட் 12) விழிப்புணர்வு வீடியோ, ஐக்கிய நாடுகள் சபையால் கொடுக்கப்பட்ட வயது பாகுபாடு என்ற தலைப்பில் ஒரு விழிப்புணர்வு வீடியோ உருவாக்கப்பட்டது. 5வது வகுப்பு மாணவர்கள் வயது பாகுபாடு பற்றி ஆங்கிலத்தில் 1 நிமிடம் பேசினர். வீடியோ டிரைவில் பதிவேற்றப்பட்டது.',
        }
      },
      {
        name: {
          en: 'Fun with Kids',
          ta: 'குழந்தைகளுடன் வேடிக்கை',
        },
        image: '/Volunteering/School/Fun.jpg',
        date: {
          en: '28th, August 2022',
          ta: '28வது, ஆகஸ்ட் 2022',
        },
        description: {
          en: 'Fun Activities such as Drawings, Origami, Dance and Singing were conducted for the kids. The kids were very happy and enjoyed the activities. The kids also learned a lot from the activities.',
          ta: 'குழந்தைகளுக்காக ஓவியம், ஓரிகாமி, நடனம் மற்றும் பாடுதல் போன்ற வேடிக்கையான செயல்பாடுகள் நடத்தப்பட்டன. குழந்தைகள் மிகவும் மகிழ்ச்சியாக இருந்தனர் மற்றும் செயல்பாடுகளை ரசித்தனர். குழந்தைகள் செயல்பாடுகளிலிருந்து நிறைய கற்றுக்கொண்டனர்.',
        }
      },
      {
        name: {
          en: 'Final Exam',
          ta: 'இறுதித் தேர்வு',
        },
        image: '/Volunteering/School/Exam.jpg',
        date: {
          en: '30th, August 2022',
          ta: '30வது, ஆகஸ்ட் 2022',
        },
        description: {
          en: 'The final exam was conducted on 30th August. The exam was conducted to test the knowledge of the kids. The exam was conducted for 50 marks and the kids were given 1 hour to complete the exam. In the End Exam, The class average was 42% with 0 failures & 5 absentees.',
          ta: 'இறுதித் தேர்வு ஆகஸ்ட் 30ல் நடத்தப்பட்டது. குழந்தைகளின் அறிவைச் சோதிக்க தேர்வு நடத்தப்பட்டது. தேர்வு 50 மதிப்பெண்களுக்கு நடத்தப்பட்டது மற்றும் குழந்தைகளுக்கு தேர்வை முடிக்க 1 மணி நேரம் கொடுக்கப்பட்டது. இறுதித் தேர்வில், வகுப்பு சராசரி 42% ஆக இருந்தது, 0 தோல்விகள் மற்றும் 5 வருகை இல்லாதவர்கள்.',
        }
      },
      {
        name: {
          en: 'Visit with my NSS Team',
          ta: 'எனது NSS குழுவுடன் வருகை',
        },
        image: '/Volunteering/School/Visit.jpg',
        date: {
          en: '11th, March 2023',
          ta: '11வது, மார்ச் 2023',
        },
        description: {
          en: 'My NSS team visited the school to see the progress of the kids. The kids showed us the drawings they made and also showed us the activities they learned. The kids were very happy and they were very excited to show us their work. My team played with the kids and also taught them a few things. The kids were very happy and they enjoyed the visit.',
          ta: 'குழந்தைகளின் முன்னேற்றத்தைப் பார்க்க எனது NSS குழு பள்ளிக்கு வருகை தந்தது. குழந்தைகள் தாங்கள் வரைந்த ஓவியங்களைக் காட்டினர் மற்றும் அவர்கள் கற்றுக்கொண்ட செயல்பாடுகளையும் காட்டினர். குழந்தைகள் மிகவும் மகிழ்ச்சியாக இருந்தனர் மற்றும் தங்கள் வேலையைக் காட்ட மிகவும் உற்சாகமாக இருந்தனர். எனது குழு குழந்தைகளுடன் விளையாடியது மற்றும் சில விஷயங்களையும் கற்பித்தது.',
        }
      },
      {
        name: {
          en: 'Volunteering Documentation',
          ta: 'தன்னார்வ ஆவணப்படுத்தல்',
        },
        image: '/Volunteering/Banners/GovtDocumentation.png',
        date: {
          en: '31st, August 2022',
          ta: '31வது, ஆகஸ்ட் 2022',
        },
        description: {
          en: 'The documentation included the details of the sessions, the topics taught, the activities conducted, and the exam details with corrected papers.',
          ta: 'ஆவணப்படுத்தலில் அமர்வுகளின் விவரங்கள், கற்பிக்கப்பட்ட தலைப்புகள், நடத்தப்பட்ட செயல்பாடுகள் மற்றும் திருத்தப்பட்ட தாள்களுடன் தேர்வு விவரங்கள் ஆகியவை அடங்கியுள்ளன.',
        },
        url: 'https://drive.google.com/drive/folders/1iBqFAWdkygWAuBZxrFDmeg0UeGHf84Lo?usp=sharing',
        urltitle: {
          en: 'View the documentation here',
          ta: 'ஆவணங்களை இங்கே பாருங்கள்',
        }
      }
    ]
  },
]

export default works