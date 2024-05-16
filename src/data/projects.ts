const projects = [
  {
    id: 4,
    url: 'NIWEDashboard',
    banner: '/projects/NIWEDashboard/NIWE.png',
    img: '/projects/NIWEDashboard/NIWE.png',
    title: 'NIWE Dashboard',
    type: 'Website',
    icon: '/projects/NIWEDashboard/NIWE.png',
    blog: 'https://saravanakumar2003.hashnode.dev/niwe-dashboard',
    github: 'https://github.com/Saravanakumar2003/NIWEDashboard',
    web: 'https://niwe.netlify.app/',
    description:
      'This is a powerful management system made for NIWE (National Institue of Wind Energy) during my internship. The system is designed to simplify and enhance project management, making it efficient.',
    tags: [
      {name: 'NIWE Projects'},
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
    ],

    print: [
      {
        name: 'Home Page',
        description:
          'The "Home" screen is the landing page, offering a welcoming interface and providing an introduction to the NIWE Dashboard.',
        img: '/projects/NIWEDashboard/Home.jpg'
      },
      {
        name: 'Add Project',
        description:
          'The "Add Project" screen allows users to input and submit project details, making it easy to add new projects to the system.',
        img: '/projects/NIWEDashboard/Add-Poject.jpg'
      },
      {
        name: 'Project List/Table view',
        description:
          'The "Project Table" screen displays a table or grid of projects, offering a quick overview of ongoing projects, their statuses, and key details.',
        img: '/projects/NIWEDashboard/Project-Table.jpg'
      },
      {
        name: 'Add/View Employees',
        description:
          'The "Employees" screen showcases a list of team members, providing information about each employee and their respective roles.',
        img: '/projects/NIWEDashboard/Employees.jpg'
      },
      {
        name: 'Add/View Attendance',
        description:
          'The "Attendance" screen provides an overview of employee attendance, allowing for easy tracking and management of attendance records.',
        img: '/projects/NIWEDashboard/Attendance.jpg'
      },
      {
        name: 'Add/View Todo List',
        description:
          'The "Todo" screen features a task management interface, allowing users to create, track, and manage their to-do lists within the system.',
        img: '/projects/NIWEDashboard/Todo.jpg'
      },
      {
        name: 'Add/View Event List',
        description:
          'The "Events" screen showcases a calendar or list of events related to projects or team activities, helping users stay informed about upcoming events.',
        img: '/projects/NIWEDashboard/Events.jpg'
      },
      {
        name: 'Contact Us Page',
        description:
          'The "Contact Us" screen offers a form or interface for users to get in touch with the developer or relevant contacts associated with the project.',
        img: '/projects/NIWEDashboard/Contact-Us.jpg'
      }
    ],
    status: 'Completed',
    year: 'January 2024',
    gif: '',
    backgroundImage: '/projects/Background.png',
    video:
      ''
  },
  {
    id: 3,
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
      {name: 'NIWE Projects'},
      {name: 'Special Projects'}
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
    status: 'Completed',
    year: 'December 2023',
    gif: '/projects/DATtoCSV/Promo.mp4',
    backgroundImage: '/projects/Background.png',
    video:
      'https://youtu.be/ggpB_Erkl4k'
  },
  {
    id: 2,
    url: 'EmpowerKids',
    banner: '/projects/EmpowerKids/EKBG.png',
    img: '/projects/EmpowerKids/EKBG.png',
    title: 'EmpowerKids',
    type: 'Website',
    icon: '/projects/EmpowerKids/EKlogo.jpg',
    github: 'https://github.com/Saravanakumar2003/EmpowerKids',
    blog: 'https://saravanakumar2003.hashnode.dev/empowerkids-complaint-portal',
    web: 'https://empowerkids.netlify.app/',
    description:
      'Empowerkids is a platform that allows children to file complaints regarding issues that affect them. ',
    tags: [
      {name: 'Hackathon Projects'},
    ],

    tech: [
      {
        name: 'HTML',
        icon: '/icons/HTML.png',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'Firebase',
        icon: '/icons/Firebase.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'JavaScript',
        icon: '/icons/JS.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'CSS',
        icon: '/icons/CSS.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
    ],

    print: [
      {
        name: 'Home Page',
        description:
          'It is the home page of our website with basic information. It features a Notification / Circulars section with the latest updates from Officers.',
        img: '/projects/EmpowerKids/EK1.jpeg'
      },
      {
        name: 'Student Dashboard',
        description:
          'Student can Raise a New Complaint by entering "Complaint Type" and "Complaint Description". Students can see the "My Complaints" section with all complaints lodged by him/her in the Data Table. Info icon opens dialog box for additional information like Issued To, Remarks etc.',
        img: '/projects/EmpowerKids/EKStudent.jpeg'
      },
      {
        name: 'Officer Dashboard',
        description:
          'Features the same UI for three different officers - EmpowerKids Team, Legal Expert, and Government Official. Officer can add/delete Notification / Circulars from the dashboard which is shown on the Home Page.',
        img: '/projects/EmpowerKids/EKOfficial.jpeg'
      },
      {
        name: 'Admin Dashboard',
        description:
          'Admin Data Table features all account details. Admin can change any account type to - Student, EmpowerKids Team, Legal Expert, Government Official, Admin.',
        img: '/projects/EmpowerKids/EKAdmin.jpeg'
      },
      {
        name: 'Contact Us Page',
        description:
          'Contact Us Page features about us, contact details, and a email ID for any queries.',
        img: '/projects/EmpowerKids/EkComplaint.jpeg'
      },
    ],
    status: 'Completed',
    year: 'November 2023',
    gif: '',
    backgroundImage: '/projects/Background.png',
    video:
      'https://youtu.be/oh0n2WFNn5U'
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
      {name: 'Special Projects'},
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
    status: 'Completed',
    year: 'October 2023',
    gif: '',
    backgroundImage: '/projects/Background.png',
    video:
      ''
  },
]

export default projects
