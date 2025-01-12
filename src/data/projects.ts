import { time } from "console"

const projects = [
  {
    id: 4,
    url: 'electrowiz',
    banner: '/projects/Electrowiz/Banner.png',
    img: '/projects/Electrowiz/Banner.png',
    title: 'ELECTROWIZ\'25',
    type: 'Website',
    icon: '/projects/Electrowiz/icon.png',
    blog: 'https://saravanakumar2003.hashnode.dev/muon-track-reconstruction',
    github: 'https://github.com/Saravanakumar2003/Electrowiz-25',
    web: 'https://electrowiz.info/',
    description:
      'An automated symposium website integrating online registration, Razorpay payments, QR code-based ID cards, and Google Sheets for attendance tracking, significantly reducing manual effort and enhancing efficiency.',
    tags: [
      {name: 'College Projects'},
    ],
    tech: [
      {
        name: 'HTML',
        icon: '/icons/HTML.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'CSS',
        icon: '/icons/CSS.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'React',
        icon: '/icons/react.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'Firebase',
        icon: '/icons/Firebase.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'Vercel',
        icon: '/icons/vercel.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
    ],

    print: [
      {
        name: 'Homepage',
        description:
          '',
        img: '/projects/Electrowiz/Home.png'
      },
      {
        name: 'Events Page',
        description:
          '',
        img: '/projects/Electrowiz/Events.png'
      },
      {
        name: 'Register Page',
        description:
          '',
        img: '/projects/Electrowiz/Register.png'
      },
    ],
    team: [
      {
        id: '1',
        name: 'Saravanakumar',
        role: 'Student, VEC',
        img: '/projects/Teams/Saravana.jpg',
        github: 'https://github.com/Saravanakumar2003',
        linkedin: 'https://www.linkedin.com/in/saravanakumar2003/',
        twitter: 'https://twitter.com/Saravana2003',
        instagram: 'https://www.instagram.com/saravana2003/'
      },
    ],
    status: 'Completed',
    year: 'Jan 2025',
    gif: '/projects/Portfolio/Cool.mp4',
    backgroundImage: '/projects/Background.png',
    trelloboard: 'https://trello.com/b/G09nw8o5.html',
    trelloedit: 'https://forms.gle/p2vH1ensakcsPgvv6',
    video:
      'https://youtu.be/WzlVRtlzjSM'
  },
  {
    id: 4,
    url: 'Muon',
    banner: '/projects/Muon/Muon.png',
    img: '/projects/Muon/Muon.png',
    title: 'Muon Track Reconstruction',
    type: 'Software',
    icon: '/projects/Muon/icon.png',
    blog: 'https://saravanakumar2003.hashnode.dev/muon-track-reconstruction',
    github: 'https://github.com/Saravanakumar2003/Muon-Track-Reconstruction',
    web: 'https://muon-api.onrender.com/',
    description:
      'The Muon Track Reconstruction software is a sophisticated simulation and analysis tool designed for studying muon interactions with customizable drift tube arrays. This project showcases advanced skills in particle physics simulation, data analysis, and software development, combining complex algorithms with an intuitive user interface to provide researchers with a powerful tool for muon detection experiments.',
    tags: [
      {name: 'Internship Projects'},
    ],
    tech: [
      {
        name: 'Python',
        icon: '/icons/python.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'PyQT5',
        icon: '/icons/PyQt5.jpeg',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'PyQt Designer',
        icon: '/icons/qtdesign.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'Flask',
        icon: '/icons/flask.jpg',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      }
    ],

    print: [
      {
        name: 'Main Window',
        description:
          'The main window of the Muon Track Reconstruction software serves as the central interface for setting up and running muon track simulations. It provides various input fields, controls, and visualisations to help users configure drift tubes, initiate simulations, and observe the results',
        img: '/projects/Muon/Main_Window.png'
      },
      {
        name: 'Drift Tube Array Configuration',
        description:
          'Each drift tube has their own data such as Timing Histogram, Coarse RT, Measure RT, True RT and Tube ID. All these can seen or accessed by pressing double click on the drift tube you want to see. Then a secondary window will pop up (This is the dtstauswindow). Where do you have all the information about that particular drift tube.',
        img: '/projects/Muon/Drift_tubes.png'
      },
      {
        name: 'DT status window',
        description:
          'The DT Status Window is a crucial part of the Muon Track Reconstruction software. It provides detailed information about the status of the particular drift tubes during the simulation process. This window allows users to monitor the current state of the drift tube, track counts, TrueRT, MeasureRt, CoarseRT and timing Histogram.',
        img: '/projects/Muon/dt_status_window.png'
      },
    ],
    team: [
      {
        id: '2',
        name: 'Saikat Das',
        role: 'Scientfic Officer, BARC (Mentor)',
        img: '/projects/Teams/Saikat Sir.jpeg',
        linkedin: 'https://www.linkedin.com/in/saikat-das-87924136/',
        email: 'saikatd@barc.gov.in'
      },
      {
        id: '1',
        name: 'Saravanakumar',
        role: 'Project Trainee, BARC',
        img: '/projects/Teams/Saravana.jpg',
        github: 'https://github.com/Saravanakumar2003',
        linkedin: 'https://www.linkedin.com/in/saravanakumar2003/',
        twitter: 'https://twitter.com/Saravana2003',
        instagram: 'https://www.instagram.com/saravana2003/'
      },
    ],
    status: 'Completed',
    year: 'July 2024',
    gif: '/projects/Portfolio/Cool.mp4',
    backgroundImage: '/projects/Background.png',
    trelloboard: 'https://trello.com/b/G09nw8o5.html',
    trelloedit: 'https://forms.gle/p2vH1ensakcsPgvv6',
    video:
      'https://youtu.be/WzlVRtlzjSM'
  },
  {
    id: 3,
    url: 'NSSVEC',
    banner: '/projects/NSS/Banner.png',
    img: '/projects/NSS/Banner.png',
    title: 'NSS Website',
    type: 'Website',
    icon: '/projects/NSS/Nss.png',
    blog: 'https://saravanakumar2003.hashnode.dev/nssvec-website',
    github: 'https://github.com/Saravanakumar2003/NSS',
    web: 'https://nssvec.vercel.app/',
    description:
      'NSSVEC is a platform that allows students to register, login, event/photo/video uploads, view & upload newsletters, notifications, volunteer/teacher lists, admin controls, and batch details. It was developed for the National Service Scheme (NSS) unit of Velammal Engineering College.',
    tags: [
      {name: 'Personal Projects'}
    ],

    tech: [
      {
        name: 'HTML',
        icon: '/icons/HTML.png',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'CSS',
        icon: '/icons/CSS.png',
        color: '#3178C6',
        rgb: '49, 120, 198'
      },
      {
        name: 'JavaScript',
        icon: '/icons/JS.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'Firebase',
        icon: '/icons/Firebase.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'Vercel',
        icon: '/icons/vercel.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'React',
        icon: '/icons/react.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
    ],

    print: [
      {
        name: 'Home Page',
        description:
          'The "Home" screen is the landing page, offering a welcoming interface and providing an introduction to the NSSVEC website.',
        img: '/projects/NSS/1.png'
      },
      {
        name: 'Login Page',
        description:
          'The "Login" screen allows users to sign in to their accounts, providing access to personalized features and content.',
        img: '/projects/NSS/2.png'
      },
      {
        name: 'Student Dashboard',
        description:
          'The "Student Dashboard" screen showcases a list of upcoming events, allowing students to register for events and access resources.',
        img: '/projects/NSS/3.png'
      },
      {
        name: 'Admin Dashboard',
        description:
          'The "Admin Dashboard" screen provides administrators with tools to manage events, view registrations, and access student data.',
        img: '/projects/NSS/5.png'
      },
      {
        name: 'Volunteer List Page',
        description:
          'The "Volunteer List" screen displays a list of volunteers, providing information about each volunteer and their respective roles.',
        img: '/projects/NSS/6.png'
      },
      {
        name: 'Event Upload Page',
        description:
          'The "Event Upload" screen allows administrators & teachers to upload new events, providing details and information for students to register.',
        img: '/projects/NSS/8.png'
      },
      {
        name: 'Newsletters Page',
        description:
          'The "Newsletters" screen features a collection of newsletters, providing updates and information about NSSVEC activities and events.',
        img: '/projects/NSS/9.png'
       },
    ],
    team: [
      {
        id: '1',
        name: 'Saravanakumar',
        role: 'Developer',
        img: '/projects/Teams/Saravana.jpg',
        github: 'https://github.com/Saravanakumar2003',
        linkedin: 'https://www.linkedin.com/in/saravanakumar2003/',
        twitter: 'https://twitter.com/Saravana2003',
        instagram: 'https://www.instagram.com/saravana2003/'
      },
    ],
    status: 'Completed',
    year: 'May 2024',
    gif: '/projects/Portfolio/Cool.mp4',
    backgroundImage: '/projects/Background.png',
    trelloboard: 'https://trello.com/b/Nkhrtqx9.html',
    trelloedit: 'https://forms.gle/p2vH1ensakcsPgvv6',
    video:'https://youtu.be/WzlVRtlzjSM'
  },
  {
    id: 2,
    url: 'dat_2_csv',
    banner: '/projects/DATtoCSV/DATBG.png',
    img: '/projects/DATtoCSV/DATBG.png',
    title: 'DAT to CSV Converter',
    type: 'Convertor',
    icon: '/projects/DATtoCSV/DATlogo.png',
    blog: 'https://saravanakumar2003.hashnode.dev/dat-to-csv-file-converter',
    github: 'https://github.com/Saravanakumar2003/DAT-to-CSV-Convertor',
    web: 'https://saravanakumar.pythonanywhere.com/',
    description:
      'This project is a Python-based .dat to .csv file converter initially developed during my internship tenure at the National Institute of Wind Energy (NIWE). The objective was to address the challenge of converting .dat files to .csv format efficiently.',
    tags: [
      {name: 'Internship Projects'}
    ],

    tech: [
      {
        name: 'HTML',
        icon: '/icons/HTML.png',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'PythonAnywhere',
        icon: '/icons/Pyany.png',
        color: '#635BFF',
        rgb: '99, 91, 255'
      },
      {
        name: 'Python',
        icon: '/icons/python.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'Flask',
        icon: '/icons/flask.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
    ],

    print: [
      {
        name: 'Home Page',
        description:
          'A user-friendly website, enabling anyone, regardless of technical expertise, to perform the conversion effortlessly. This proactive approach allows for automation and provides accessibility to perform the conversion in a fraction of a second using any device, anytime and anywhere.',
        img: '/projects/DATtoCSV/DatHome.jpeg'
      },
      {
        name: 'Input File',
        description:
          'The user can upload the .dat file to be converted. The .dat file has to be in the format given below. The user can also download the sample .dat file from the website.',
        img: '/projects/DATtoCSV/DatInput.jpeg'
      },
      {
        name: 'Output File',
        description:
          'The user can download the converted .csv file. The .csv file will be in the format given below. The user can also download the .csv file from the website by uploadin sample .dat into the converter.',
        img: '/projects/DATtoCSV/DatOutput.jpeg'
      },
    ],
    team: [
      {
        id: '2',
        name: 'Dr. K. Boopathi',
        role: 'Director/Divison Head WRA, NIWE (Mentor)',
        img: '/projects/Teams/Boopathi Sir.png',
        email: 'boopathi@niwe.res.in'
      },
      {
        id: '1',
        name: 'Saravanakumar',
        role: 'Developer',
        img: '/projects/Teams/Saravana.jpg',
        github: 'https://github.com/Saravanakumar2003',
        linkedin: 'https://www.linkedin.com/in/saravanakumar2003/',
        twitter: 'https://twitter.com/Saravana2003',
        instagram: 'https://www.instagram.com/saravana2003/'
      },
    ],
    status: 'Completed',
    year: 'December 2023',
    gif: '/projects/Portfolio/Cool.mp4',
    backgroundImage: '/projects/Background.png',
    trelloboard: 'https://trello.com/b/G09nw8o5.html',
    trelloedit: 'https://forms.gle/p2vH1ensakcsPgvv6',
    video:
      'https://youtu.be/ggpB_Erkl4k'
  },
  {
    id: 1,
    url: 'Personal Portfolio',
    banner: '/projects/Portfolio/Portfolio.png',
    img: '/projects/Portfolio/Portfolio.png',
    title: 'Personal Portfolio',
    type: 'Website',
    icon: '/Logo1.png',
    github: 'https://github.com/Saravanakumar2003/Portfolio',
    blog: 'https://saravanakumar2003.hashnode.dev/how-i-built-my-portfolio',
    web: 'https://saravana.vercel.app/',
    description:
      'It is built using Next.js, a React framework that enables server-side rendering and other powerful features. The website is designed to showcase my skills, projects, and other relevant information.',
    tags: [
      {name: 'Personal Projects'},
    ],

    tech: [
      {
        name: 'Next.js',
        icon: '/icons/nextjs.png',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'Vercel',
        icon: '/icons/vercel.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'TypeScript',
        icon: '/icons/TS.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'React',
        icon: '/icons/react.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
    ],

    print: [
      {
        name: 'Home Page',
        description:
          'The home page features a brief introduction about me, my skills, and my projects. It also features a link contact form and to my resume. The home page also features a music toggle button that allows the user to play a bgm while viewing my portfolio.',
        img: '/projects/Portfolio/Home.png'
      },
      {
        name: 'Top Skills',
        description:
          'The top skills section features my top skills with a stunning. The top skills is animated using Framer Motion. It is also responsive and changes its width and number of skills to be displayed in single row according to the screen size.',
        img: '/projects/Portfolio/Skills.png'
      },
      {
        name: 'Instagram Feed',
        description:
          'The Instagram feed section features my latest Instagram posts. It is built using the Instagram Widgets by Behold.so (third-part provider).',
        img: '/projects/Portfolio/IG.png'
      },
      {
        name: 'Github Contributions',
        description:
          'Integration with GitHub allows dynamic fetching and display of GitHub-related data, such as followers, following, total stars and contributions.',
        img: '/projects/Portfolio/github.png'
      },
      {
        name: 'Contact Page',
        description:
          'The contact page features a contact form that allows the user to send me a message. The contact form is built using Emailjs, a third-party provider.',
        img: '/projects/Portfolio/contact.png'
      },
      {
        name: 'Calendly Integration',
        description:
          'Integration with Calendly allows the user to schedule a meeting with me. The Calendly widget is embedded in the website.',
        img: '/projects/Portfolio/calendy.png'
      }
    ],
    team: [
      {
        id: '1',
        name: 'Saravanakumar',
        role: 'Student',
        img: '/projects/Teams/Saravana.jpg',
        github: 'https://github.com/Saravanakumar2003',
        linkedin: 'https://www.linkedin.com/in/saravanakumar2003/',
        twitter: 'https://twitter.com/Saravana2003',
        instagram: 'https://www.instagram.com/saravana2003/'
      },
    ],
    status: 'Completed',
    year: 'October 2023',
    gif: '/projects/Portfolio/Cool.mp4',
    backgroundImage: '/projects/Background.png',
    trelloboard: 'https://trello.com/b/0dMB7E3v.html',
    trelloedit: 'https://forms.gle/p2vH1ensakcsPgvv6',
    video:
      'https://youtu.be/WzlVRtlzjSM'
  },
]

export default projects
