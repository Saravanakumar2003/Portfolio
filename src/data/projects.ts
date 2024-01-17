const projects = [
  {
    id: 2,
    url: 'EmpowerKids',
    banner: '/projects/EKBG.png',
    img: '/projects/EKBG.png',
    title: 'EmpowerKids',
    type: 'Website',
    icon: '/projects/EKLogo.jpg',
    github: 'https://github.com/Saravanakumar2003/EmpowerKids',
    web: 'https://empowerkids.netlify.app/',
    description:
      'Empowerkids is a platform that allows children to file complaints regarding issues that affect them. ',
    tags: [
      {
        name: 'HTML',
        icon: '/skills/html.svg',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'CSS',
        icon: '/skills/css.svg',
        color: '#3178C6',
        rgb: '49, 120, 198'
      },
      {
        name: 'JavaScript',
        icon: '/skills/javascript.svg',
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
          'It is the home page of our website with basic information. It features a Notification / Circulars section with the latest updates from Officers.',
        img: '/projects/EK1.jpeg'
      },
      {
        name: 'Student Dashboard',
        description:
          'Student can Raise a New Complaint by entering "Complaint Type" and "Complaint Description". Students can see the "My Complaints" section with all complaints lodged by him/her in the Data Table. Info icon opens dialog box for additional information like Issued To, Remarks etc.',
        img: '/projects/EKStudent.jpeg'
      },
      {
        name: 'Officer Dashboard',
        description:
          'Features the same UI for three different officers - EmpowerKids Team, Legal Expert, and Government Official. Officer can add/delete Notification / Circulars from the dashboard which is shown on the Home Page.',
        img: '/projects/EKOfficial.jpeg'
      },
      {
        name: 'Admin Dashboard',
        description:
          'Admin Data Table features all account details. Admin can change any account type to - Student, EmpowerKids Team, Legal Expert, Government Official, Admin.',
        img: '/projects/EKAdmin.jpeg'
      },
      {
        name: 'All Complaints',
        description:
          'Every visitor is able to see all complaints. User can filter complaints according to Resolved, Pending, or Declined. All Data Talbe features are available.',
        img: '/projects/EKComplaint.jpeg'
      },
    ],
    status: 'Completed',
    year: '2023',
    gif: '',
    backgroundImage: '/projects/EKBG.png',
    video:
      'https://youtu.be/oh0n2WFNn5U'
  },
  {
    id: 1,
    url: 'dat_2_csv',
    banner: '/projects/DATBG.png',
    img: '/projects/DATBG.png',
    title: 'DAT to CSV Converter',
    type: 'Convertor',
    icon: '/projects/DATBG.png',
    github: 'https://github.com/Saravanakumar2003/DAT-to-CSV-Convertor',
    web: 'https://saravanakumar.pythonanywhere.com/',
    description:
      'This project is a Python-based .dat to .csv file converter initially developed during my internship tenure at the National Institute of Wind Energy (NIWE). The objective was to address the challenge of converting .dat files to .csv format efficiently.',
    tags: [
      {
        name: 'HTML',
        icon: '/Skills/html.svg',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'Flask',
        icon: '/icons/flask.png',
        color: '#3178C6',
        rgb: '49, 120, 198'
      },
      {
        name: 'Python',
        icon: '/icons/python.png',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'PythonAnywhere',
        icon: '/icons/pyany.png',
        color: '#635BFF',
        rgb: '99, 91, 255'
      },
    ],
    print: [
      {
        name: 'Home Page',
        description:
          'A user-friendly website, enabling anyone, regardless of technical expertise, to perform the conversion effortlessly. This proactive approach allows for automation and provides accessibility to perform the conversion in a fraction of a second using any device, anytime and anywhere.',
        img: '/projects/DatHome.jpeg'
      },
      {
        name: 'Input File',
        description:
          'The user can upload the .dat file to be converted. The .dat file has to be in the format given below. The user can also download the sample .dat file from the website.',
        img: '/projects/DatInput.jpeg'
      },
      {
        name: 'Output File',
        description:
          'The user can download the converted .csv file. The .csv file will be in the format given below. The user can also download the .csv file from the website by uploadin sample .dat into the converter.',
        img: '/projects/DatOutput.jpeg'
      },
    ],
    status: 'Completed',
    year: '2023',
    gif: '/projects/EmpowerKids/promo.mp4',
    backgroundImage: '/projects/DATBG.png',
    video:
      'https://youtu.be/9UlWMI6VSA0'
  },
]

export default projects
