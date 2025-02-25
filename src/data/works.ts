import { url } from "inspector"

const works = [
  {
    id: 1,
    url: 'NSS',
    img: '/Volunteering/NSS/NSSBanner.png',
    title: 'NSS Volunteer',
    title2: '# Social Service',
    title3: 'NSS Volunteer',
    subTitle: 'National Service Scheme - VEC',
    description:
      'My NSS journey at Velammal Engineering College has been transformative. From leading a team, hosting events, winning competitions, to participating in impactful initiatives like health campaigns, tree plantations, and even my first dance performance on Republic Day - each moment has been a step towards personal growth and community impact.',
    tags: [
      { name: 'NSS Logo', icon: '/experience/Nss.png' },
      { name: 'VEC Logo', icon: '/education/Vec.png' },
    ],
    date: 'Dec 2021 - Aug 2024',
    prints: [
      {
        name: 'Commencement of my Journey',
        image: '/Volunteering/NSS/NSS1.jpeg',
        date: '24th, November 2021',
        description:
          'The day (24/11/2021) when my journey as an NSS volunteer at Velammal Engineering College commenced. ' 
      },
      {
        name: 'Republic Day 2022 Dance',
        image: '/Volunteering/NSS/NSS2.jpeg',
        date: '26th, January 2022',
        url: 'https://youtu.be/MMTdvNh260E',
        urltitle: 'Watch my dance here',
        description:
          'It was my first time dancing, forgive me if I was a bit odd in a group of excellent dancers. I was the one in the middle with the white shirt. '
      },
      {
        name: 'GD and Speech winner',
        image: '/Volunteering/NSS/NSS3.jpeg',
        date: '9th, March 2022',
        description:
          'Group Discussion and Speech winner of the NSS internal competition. I was receiving the award from my General Coordination (2021 to 2022) of NSS, Muralidharan.'
      },
      {
        name: 'Planting Seeds of Change',
        image: '/Volunteering/NSS/NSS4.jpeg',
        date: '22nd, March 2022',
        description:
          'Participated in a meaningful tree plantation drive as an NSS volunteer.'
      },
      {
        name: 'Gandhi Jayanthi Short Film 2023',
        image: '/Volunteering/NSS/NSS5.jpeg',
        date: '2nd, October 2022',
        url: 'https://www.youtube.com/watch?v=5nw9oLOoU4Q',
        urltitle: 'Watch my video here',
        description:
          'My part spanned from 1.29 to 2.10 in the video, and it portrayed the character of Lord Erwin.'
      },
      {
        name: 'Independence Day 2023 Host',
        image: '/Volunteering/NSS/NSS6.jpeg',
        date: '15th, August 2023',
        description:
        'I was privileged to have hosted the Independence Day celebrations as part of my role as an NSS volunteer. This is the last event of my volunteering period in NSS.'
      },
      {
        name: 'Technical Team Head (2023-24)',
        image: '/Volunteering/NSS/NSS7.jpg',
        date: '9th, September 2023',
        description:
          'I was honoured to be appointed Technical Team Head by Dr.R. Karthik Sir (NSS, Program Officer), extending my volunteer period for an additional year starting September 9, 2023. This role acknowledges my dedication and technical prowess demonstrated over the past two years within the National Service Scheme (NSS), fostering innovation and excellence in our projects and events.'
      },
      {
        name: 'Conducted GD for Juniors',        
        image: '/Volunteering/NSS/NSS8.jpg',
        date: '23rd, September 2023',
        description:
          'I conducted a Group Discussion for the juniors on the occasion of NSS Day. The topic was "Social Media - Boon or Bane". The juniors were very active and they participated very well in the discussion.'
      },
      {
        name: 'NSS RD Parade Selection in Trichy',
        image: '/Volunteering/NSS/NSS9.jpg',
        date: '31st, December 2023',
        description:
          'I proudly represented NSS at the RD Parade Selection in Trichy, showcasing my commitment to national service and leadership potential. The event was a great learning experience and an opportunity to meet like-minded individuals.'
      },
      {
        name: 'Besant Nagar Beach Cleaning',
        image: '/Volunteering/NSS/NSS10.jpg',
        date: '28th, January 2024',
        description:
          'I participated with my NSS Squad in a beach cleaning drive at Besant Nagar Beach, Chennai, as part of my ongoing commitment to environmental conservation and community service. The event was a great success, and I was delighted to contribute to the cleanliness of our city.'
      },
      {
        name: 'NSS Glaucathon Rally',
        image: '/Volunteering/NSS/NSS11.jpg',
        date: '16th, March 2024',
        description:
          'I participated in the NSS Glaucathon Rally, an initiative to raise awareness about glaucoma and promote eye health. The rally started at Dunlop and ended at Vasan Eye Care Hospital, Chennai. It was a great opportunity to contribute to a noble cause and spread awareness about eye health.'
      },

      {
        name: 'NSS Blood Donation Camp',
        image: '/Volunteering/NSS/NSS14.JPG',
        date: '26th, March 2024',
        description:
          'I volunteered at the NSS Blood Donation Camp, an initiative to promote voluntary blood donation and save lives. The camp was organized at Velammal Engineering College, and I was delighted to contribute to this noble cause.'
      },
      {
        name: ' My Co-Ordinators team',
        image: '/Volunteering/NSS/NSS12.JPG',
        date: '15th, August 2024',
        description:
          'Being part of the NSS Co-ordinator team for 2023-24 was an incredible honor. Led by the inspiring Dr. R. Karthik Sir, we united as passionate volunteers to organize impactful events, creating lasting memories and deepening our commitment to service and community. Together, we worked tirelessly to foster a culture of social responsibility and make a positive impact on society.'
      },
      {
        name: 'Our Panel Handover Ceremony',
        image: '/Volunteering/NSS/NSS13.JPG',
        date: '29th, August 2024',
        description:
          'The NSS Panel Handover Ceremony was a memorable event where the outgoing panel handed over the responsibilities to the incoming panel. It was a moment of pride and gratitude as we reflected on our achievements and passed on the baton to the next generation of NSS leaders.'
      },
      {
        name: 'NSS Image Gallery',
        image: '/Volunteering/Banners/NSSJourney.png',
        date: '24th, November 2021 - 29th, August 2024',
        url: 'https://photos.app.goo.gl/Md3BTQYZeA37NPSj9',
        urltitle: 'View the images here',
        description:
          'A collection of images from my NSS journey at Velammal Engineering College, showcasing my participation in various events, competitions, and initiatives.'
      },
      {
        name: 'NSS Journey Documentation',
        image: '/Volunteering/Banners/NSSDocumentation.png',
        date: '24th, November 2021 - 29th, August 2024',
        url: 'https://drive.google.com/drive/folders/1Zjb4FVAGb8vq1X2Lo_-o8tZAbOaPNzcg?usp=drive_link',
        urltitle: 'View the documentation here',
        description:
          'A comprehensive documentation of my NSS journey containing Newsletters, Host Scripts, Certificates, Contributions and other important documents.'
      }

    ]
  },
  {
    id: 2,
    url: 'Shelter-Service',
    img: '/Volunteering/Bhumi/Bhumi.png',
    title: 'Ignite - Kanini',
    title2: '#Shelter Care',
    title3: 'Bhumi Volunteer',
    subTitle: 'Bhumi - Chennai',
    description:
      'Ignite is a shelter transformation program that aims to improve the quality of education provided to children in shelter homes. The program focuses on the holistic development of the children by providing them with the necessary support and guidance.',
    tags: [
      { name: 'Bhumi Logo', icon: '/Volunteering/Bhumi/BhumiLogo.png' },
      { name: 'Nakshatra Logo', icon: '/Volunteering/Bhumi/Nakshatra.png' },
    ],
    date: 'Jun 2023 - Present',
    prints: [
      {
        name: 'The Induction Program',
        image: '/Volunteering/Bhumi/prep.jpg',
        date: '4th, June 2023',
        description:
          'The day (4/6/2023) when my journey as an Bhumi volunteer commenced. I decided to join the Kanini program as I am passionate about teaching kids about Computer Science.' 
      },
      {
        name: 'Kanini Induction Program',
        image: '/Volunteering/Bhumi/Kanini.jpg',
        date: '11th, June 2023',
        description:
          'This Induction Program was conducted by the Kanini team. The program was conducted to give us an overview of the program and also to give us an idea of what we are going to do in the program and in which center we are going to teach.'
      },
      {
        name: 'Bhumi Awards 2023',
        image: '/Volunteering/Bhumi/Award.JPG',
        date: '16th, July 2023',
        description:
          'The awards were given to the volunteers who have done a great job in the past year. I was a spectator for the event and I was inspiring to see the volunteers getting the awards.'
      },
      {
        name: 'Nakshatra Arts 2023',
        image: '/Volunteering/Bhumi/NakshatraCerti.jpeg',
        date: '9th, September 2023',
        description:
          'The event was conducted to showcase the talents of the kids. The kids performed various activities such as Dance, Singing, Drawing, etc. The kids were very happy and enjoyed the event.'
      },
      {
        name: 'City Con 2023',
        image: '/Volunteering/Bhumi/Citycon.jpg',
        date: '17th, December 2023',
        description:
          'City Con 2023 was a meet within the Chennai city volunteers. The meet was conducted to discuss the progress of the program and also to discuss the problems faced by the volunteers. The meet was very useful and I got to know a lot of things about the program.'
      },
      {
        name: 'Seeds of Change',
        image: '/Volunteering/Bhumi/Seeds.png',
        date: '14th, April 2024',
        description:
          'Participated in a meaningful tree plantation drive as a Bhumi volunteer conducted by Eco-Champs Team of Bhumi.'
      },
      {
        name: 'Kanini AVM',
        image: '/Volunteering/Bhumi/AVM.jpg',
        date: '23rd, Feb 2025',
        description:
          'Annual Volunteer Meet (AVM) was conducted to discuss the progress of the program and also to discuss the problems faced by the volunteers. The meet was very useful and I got to know a lot of things about the program.'
      },
      {
        name: 'Caught Ya! Award',
        image: '/Volunteering/Bhumi/CaughtYa.jpg',
        date: '23rd, Feb 2025',
        description:
          'I was awarded the "Caught Ya!" award for my dedication and hard work in the Kanini program. The award was given to me by Sivasubramanium, LB of Kanini, Bhumi.',
        url: 'https://drive.google.com/file/d/1ISK_3vqLz2MOjK2LlqtUWws58D5jdX5a/view?usp=sharing',
        urltitle: 'View the certificate here'
      },
      {
        name: 'Bhumi Image Gallery',
        image: '/Volunteering/Banners/BhumiJourney.png',
        date: '4th, June 2023 - Present',
        url: 'https://photos.app.goo.gl/9MBDG7vz87Bczgy19',
        urltitle: 'View the images here',
        description:
          'A collection of images from my Kanini journey at Bhumi, showcasing my participation in various events, competitions, and initiatives.'
      },
      {
        name: 'Bhumi Documentation',
        image: '/Volunteering/Banners/BhumiDocumentation.png',
        date: '4th, June 2023 - Present',
        url: 'https://drive.google.com/drive/folders/14V1WOJlykj97yWppdx2ESnuK1U-yhafC?usp=sharing',
        urltitle: 'View the documentation here',
        description:
          'A comprehensive documentation of my Kanini journey at Bhumi, highlighting my participation in events, competitions, and initiatives.'
      },


    ]
  },
  {
    id: 3,
    url: 'School-Service',
    img: '/Volunteering/School/Govt.png',
    title: 'Volunteer',
    title2: '#Passion',
    title3: 'Teaching Kids',
    subTitle: 'Government School - Chennai',
    description:
      'My strong initiative, exceptional passion, and ability to teach a diverse range of learners allow me to play a crucial role in a teaching environment. Even though I am a college student with academics to follow, I still want to pursue my passion for teaching.',
    tags: [
      { name: 'Students', icon: '/Volunteering/School/Students.png' },
      { name: 'Sessions', icon: '/Volunteering/School/Sessions.png' },
    ],
    date: 'Apr 2022 - Jan 2023',
    prints: [
      {
        name: 'The Beginning',
        image: '/Volunteering/School/1.jpg',
        date: '11th, July 2022',
        description:
          'I have taken spoken English classes to 4t & 5th Grade. Phase 2 started on 11th July and ended on 31st August. Phase 2 had a total of 22 sessions in which the students have taught various important topics and also took part in fun activities.' 
      },
      {
        name: 'Volunteering with Poovaragavan',
        image: '/Volunteering/School/Poova.jpg',
        date: '13th, July 2022',
        description:
          'My fellow NSS volunteer, Poovaragavan joined with me for a day to teach Articles to the kids. He taught the kids about the basics of Articles and also gave them a few examples.'
      },
      {
        name: 'Volunteering with Vijay',
        image: '/Volunteering/School/Vijay.jpg',
        date: '14th, July 2022',
        description:
          'My friend Vijay joined with me for a day to teach kids verbs. He taught the kids about the basics of verbs and also gave them a few examples. He also taught the kids about the basics of tenses.'
      },
      {
        name: 'Awarness Video in English',
        image: '/Volunteering/School/2.jpg',
        date: '12th, August 2022',
        url: 'https://drive.google.com/file/d/1cdWwjy40xD6y7-vs74b3F8vrTB1WTowh/view?usp=sharing',
        urltitle: 'Watch the video here',
        description:
          'Awareness Video On International Youth Day (12th Aug), An awareness video was created on the topic given by the United Nations Ageism. The 5th Grade students spoke 1 Min about ageism in English. The video was uploaded on Drive and the link was shared below.'
      },
      {
        name: 'Fun with Kids',
        image: '/Volunteering/School/Fun.jpg',
        date: '28th, August 2022',
        description:
          'Fun Activities such as Drawings, Origami, Dance and Singing were conducted for the kids. The kids were very happy and enjoyed the activities. The kids also learned a lot from the activities.'
      },
      {
        name: 'Final Exam',
        image: '/Volunteering/School/Exam.jpg',
        date: '30th, August 2022',
        description:
        'The final exam was conducted on 30th August. The exam was conducted to test the knowledge of the kids. The exam was conducted for 50 marks and the kids were given 1 hour to complete the exam. In the End Exam, The class average was 42% with 0 failures & 5 absentees.'
      },
      {
        name: 'Visit with my NSS Team',
        image: '/Volunteering/School/Visit.jpg',
        date: '11th, March 2023',
        description:
          'My NSS team visited the school to see the progress of the kids. The kids showed us the drawings they made and also showed us the activities they learned. The kids were very happy and they were very excited to show us their work. My team played with the kids and also taught them a few things. The kids were very happy and they enjoyed the visit. ',
      },
      {
        name: 'Volunteering Documentation', 
        image: '/Volunteering/Banners/GovtDocumentation.png',
        date: '31st, August 2022',
        description:"The documentation included the details of the sessions, the topics taught, the activities conducted, and the exam details with corrected papers.",
        url: 'https://drive.google.com/drive/folders/1iBqFAWdkygWAuBZxrFDmeg0UeGHf84Lo?usp=sharing',
        urltitle: 'View the documentation here'
      }
    ]
  },
]

export default works
