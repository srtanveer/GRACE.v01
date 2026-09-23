import Link from 'next/link';
import { notFound } from 'next/navigation';
import AlumniPhoto from '../../../components/alumni/AlumniPhoto';

const alumniMap = {
  '151002017': {
    studentId: '151002017',
    name: 'Mohammad Tareq Hosain',
    profileImage: '/images/alumni/151002017.jpg',
    batch: 'CSE 151',
    graduationYear: 2020,
    profession: 'Data Engineer',
    organization: 'NEXT Ventures',
    designation: 'Senior Data Engineer',
    location: 'Dhaka, Bangladesh',
    shortBio: 'Senior data engineer building reliable data systems and helping teams make better use of information.',
    biography: 'Mohammad Tareq Hosain has built his career around data engineering, scalable systems, and practical technology solutions. His professional journey reflects the continued growth of Green University CSE alumni across the technology industry.',
    education: [],
    career: [
      {
        organization: 'NEXT Ventures',
        designation: 'Senior Data Engineer',
        period: 'Jul 2026 - Present (3 months)',
        location: 'Dhaka, Bangladesh',
        workMode: 'Hybrid · Full-time',
      },
      {
        organization: 'TICON System Ltd',
        designation: 'Software Engineer',
        period: 'Aug 2023 - Jun 2026 (2 years 11 months)',
        location: 'Dhaka, Bangladesh',
        workMode: 'On-site · Full-time',
      },
      {
        organization: 'TechnoNext Ltd',
        designation: 'Software Engineer',
        period: 'Jun 2022 - Jul 2023 (1 year 2 months)',
        location: 'Dhaka, Bangladesh',
        workMode: 'On-site · Full-time',
      },
      {
        organization: 'Barikoi - Full Stack Location Services Platform',
        designation: 'Junior Software Engineer',
        period: 'Feb 2021 - May 2022 (1 year 4 months)',
        location: 'Dhaka, Bangladesh',
        workMode: 'On-site · Full-time',
      },
      {
        organization: 'Barikoi - Full Stack Location Services Platform',
        designation: 'Frontend Developer',
        period: 'Nov 2020 - Jan 2021 (3 months)',
        location: 'Dhaka, Bangladesh',
        workMode: 'Hybrid · Internship',
      },
    ],
    leadershipExperience: [
      { organization: 'GRACE', designation: 'President', startYear: 2026, endYear: 2028 },
      { organization: 'Green University Computer Club (GUCC)', designation: 'President', period: 'Jan 2018 - Jan 2019 (1 year 1 month)', category: 'Education' },
      { organization: 'Green University Computer Club (GUCC)', designation: 'Programming Secretary', period: 'Jan 2017 - Dec 2017 (1 year)', category: 'Education' },
      { organization: 'Green University Computer Club (GUCC)', designation: 'Executive Member', period: 'Sep 2015 - Dec 2016 (1 year 4 months)', category: 'Education' },
    ],
    skills: ['Data Engineering', 'SQL', 'Python', 'Cloud Platforms'],
    achievements: ['Designed and maintained production data pipelines', 'Supported data-informed product and business decisions'],
    graceInvolvement: 'Serves as President of the GRACE Executive Committee for 2026-2028.',
    social: {},
    featured: true,
  },
};

const committeeProfiles = [
  { name: 'Md. Sajib Sikder', position: 'Advisor', studentId: '110302005' },
  { name: 'Akbar Hossain', position: 'Advisor', studentId: '120102038' },
  { name: 'Md. Mahamudul Hasan Khan', position: 'Advisor', studentId: '130202048' },
  { name: 'Jannatul Ferdous Katha', position: 'Advisor', studentId: '142002035' },
  { name: 'Md. Atikuzzaman', position: 'Advisor', studentId: '151002019' },
  { name: 'Mohammad Tareq Hosain', position: 'President', studentId: '151002017' },
  { name: 'Sajib Miah', position: 'Sr. Vice President', studentId: '181002053' },
  { name: 'Md. Tamim Hossen', position: 'Vice President', studentId: '162002013' },
  { name: 'Najmus Sakib Sizan', position: 'Vice President', studentId: '181002115' },
  { name: 'Saroar Jahan Sojib', position: 'General Secretary', studentId: '171002011' },
  { name: 'Md. Montasir Rahman', position: 'Treasurer', studentId: '202002003' },
  { name: 'Mocarram Hosan', position: 'Joint Secretary', studentId: '163002010' },
  { name: 'Md. Showaib Rahman Tanveer', position: 'Asst. General Secretary', studentId: '221902084' },
  { name: 'Abdul Fattah', position: 'Deputy Treasurer', studentId: '221902066' },
  { name: 'Hridoy Debnath', position: 'Organizing Secretary', studentId: '213002239' },
  { name: 'Tarafder Razibur Rahman', position: 'Social Welfare and Skill Development Secretary', studentId: '161002054' },
  { name: 'Saiful Islam Rimon', position: 'Office Secretary', studentId: '213002039' },
  { name: 'Mohammad Sajid Hossain', position: 'Press & Media Secretary', studentId: '221902116' },
  { name: 'Rabeya Akter Eva', position: 'Cultural Secretary', studentId: '221902065' },
  { name: 'Md. Shoab Alam', position: 'Sports Secretary', studentId: '181002011' },
  { name: 'Nafisa Anjum Samia', position: 'International Affairs Secretary', studentId: '172002005' },
  { name: 'Mehreen Jerin Khan', position: "Women's Affairs Secretary", studentId: '222902019' },
  { name: 'Arman Hossain', position: 'Executive Member', studentId: '221002624' },
  { name: 'Md. Nur A. Neouse', position: 'Executive Member', studentId: '193002093' },
  { name: 'Md. Adnan Sami Pavel', position: 'Executive Member', studentId: '212002128' },
  { name: 'Md. Abu Rayhan Imran', position: 'Executive Member', studentId: '221002457' },
  { name: 'Md. Dulal Hossain', position: 'Executive Member', studentId: '213902116' },
  { name: 'Al Shahriar Ahommed Shanto', position: 'Executive Member', studentId: '221002567' },
  { name: 'Mofidul Moktar Mofid', position: 'Executive Member', studentId: '221002164' },
  { name: 'Anika Afroz', position: 'Executive Member', studentId: '222015019' },
].reduce((profiles, member) => {
  profiles[member.studentId] = {
    studentId: member.studentId,
    name: member.name,
    batch: `CSE ${member.studentId.slice(0, 3)}`,
    graduationYear: 'Not provided',
    profession: 'GRACE Executive Committee',
    organization: 'Green University Alumni Association of CSE (GRACE)',
    designation: member.position,
    location: 'Green University of Bangladesh',
    shortBio: `${member.name} serves as ${member.position} of the GRACE Executive Committee for 2026-2028.`,
    biography: 'This alumni profile highlights the member’s role in supporting alumni engagement, professional networking, and the continued development of the CSE alumni community.',
    education: [],
    career: [],
    leadershipExperience: [{ organization: 'Green University Alumni Association of CSE (GRACE)', designation: member.position, startYear: 2026, endYear: 2028 }],
    skills: [],
    achievements: [],
    graceInvolvement: 'Active member of the GRACE Executive Committee for 2026-2028.',
    social: {},
    featured: false,
  };
  return profiles;
}, {});

committeeProfiles['110302005'] = {
  ...committeeProfiles['110302005'],
  batch: 'CSE 110',
  profession: 'Staff Engineer',
  organization: 'CarryBee',
  designation: 'Advisor',
  location: 'Dhaka, Bangladesh',
  shortBio: 'Software engineer with a strong track record across product engineering, platform development, and digital services.',
  biography: 'Md. Sajib Sikder has built a robust software engineering career in Bangladesh, spanning multiple product companies and senior engineering roles.',
  education: [],
  career: [
    { organization: 'CarryBee', designation: 'Staff Engineer', period: 'Dec 2024 - Present', location: 'Dhaka, Bangladesh' },
    { organization: 'Shikho', designation: 'Senior Software Engineer', period: 'Nov 2023 - Dec 2024', location: 'Dhaka, Bangladesh' },
    { organization: 'ShopUp', designation: 'Sr. Software Engineer', period: 'Dec 2022 - Nov 2023', location: 'Dhaka, Bangladesh' },
    { organization: 'Grameen Digital Healthcare Solutions', designation: 'Sr. Software Engineer', period: 'Oct 2021 - Dec 2022', location: 'Dhaka, Bangladesh' },
    { organization: 'Shohoj Limited', designation: 'Sr. Software Engineer', period: 'Feb 2018 - Sep 2021', location: 'Dhaka, Bangladesh' },
    { organization: 'Nano Information Technology', designation: 'Sr. Software Engineer', period: 'Oct 2016 - Feb 2018', location: 'Dhaka, Bangladesh' },
    { organization: 'Userhub', designation: 'Software Engineer', period: 'Mar 2016 - Oct 2016', location: 'Dhaka, Bangladesh' },
    { organization: 'UBS BD', designation: 'Web Application Developer', period: 'Jan 2014 - Mar 2016', location: 'Dhaka, Bangladesh' },
    { organization: 'SEleven IT', designation: 'Web Application Developer', period: 'Aug 2012 - Jan 2014', location: 'Dhaka, Bangladesh' },
  ],
  leadershipExperience: [{ organization: 'Green University Alumni Association of CSE (GRACE)', designation: 'Advisor', startYear: 2026, endYear: 2028 }],
  graceInvolvement: 'Advisor of the GRACE Executive Committee for 2026-2028.',
  featured: true,
};

committeeProfiles['120102038'] = {
  ...committeeProfiles['120102038'],
  batch: 'CSE 120',
  profession: 'Software Engineer',
  organization: 'Adventure Dhaka Limited',
  designation: 'Advisor',
  location: 'Dhaka, Bangladesh',
  shortBio: 'Technology leader and software engineer with experience across product engineering and business-critical digital systems.',
  biography: 'Akbar Hossain has progressed through several engineering roles in Bangladesh, building a career focused on software delivery, systems thinking, and digital product growth.',
  education: [],
  career: [
    { organization: 'Adventure Dhaka Limited', designation: 'Assistant Manager', period: 'Aug 2026 - Present', location: 'Dhaka, Bangladesh' },
    { organization: 'Adventure Dhaka Limited', designation: 'Senior Software Engineer', period: 'May 2023 - Jul 2026', location: 'Dhaka, Bangladesh' },
    { organization: 'Grameen Digital Health', designation: 'Software Engineer', period: 'Aug 2021 - Jan 2023', location: 'Dhaka, Bangladesh' },
    { organization: 'Shohoj Limited', designation: 'Software Engineer', period: 'Aug 2018 - Jul 2021', location: 'Dhaka, Bangladesh' },
    { organization: 'Nano Information Technology', designation: 'Software Engineer', period: 'Jul 2017 - Jul 2018', location: 'Dhaka, Bangladesh' },
    { organization: 'Userhub', designation: 'Web Developer', period: 'Nov 2016 - Mar 2017', location: 'Dhaka, Bangladesh' },
    { organization: 'SEleven IT Limited', designation: 'Web Developer', period: 'Feb 2015 - Sep 2016', location: 'Dhaka, Bangladesh' },
  ],
  leadershipExperience: [{ organization: 'Green University Alumni Association of CSE (GRACE)', designation: 'Advisor', startYear: 2026, endYear: 2028 }],
  graceInvolvement: 'Advisor of the GRACE Executive Committee for 2026-2028.',
  featured: true,
};

committeeProfiles['142002035'] = {
  ...committeeProfiles['142002035'],
  batch: 'CSE 142',
  profession: 'Software Quality Assurance Engineer',
  organization: 'MetLife Bangladesh',
  designation: 'Advisor',
  location: 'Dhaka, Bangladesh',
  shortBio: 'Quality assurance engineer focused on software reliability, digital product quality, and test-driven release confidence.',
  biography: 'Jannatul Ferdous Katha has built her professional career in QA engineering across banking, digital operations, e-commerce, and product quality initiatives in Bangladesh.',
  education: [
    { institution: 'Bangladesh University of Professionals (BUP)', degree: 'Master of Engineering (MEng) in Cyber Security', year: 'January 2025' },
  ],
  career: [
    { organization: 'MetLife Bangladesh', designation: 'Software Quality Assurance Engineer (working as an ADN DigiNet resource)', period: 'Jan 2025 - Present', location: 'Bangladesh' },
    { organization: 'ADN DigiNet Ltd.', designation: 'Software Quality Assurance Engineer', period: 'Dec 2024 - Present', location: 'Dhaka, Bangladesh' },
    { organization: 'Green University of Bangladesh', designation: 'Edge Project Trainer', period: 'Not specified in profile', location: 'Dhaka, Bangladesh' },
    { organization: 'CodeFoTech', designation: 'Software Quality Assurance Engineer', period: 'Sep 2024 - Jan 2025', location: 'Dhaka, Bangladesh' },
    { organization: 'SEBPO Bangladesh', designation: 'Executive - QA (Digital Ad Operations)', period: 'Jan 2023 - Nov 2024', location: 'Dhaka, Bangladesh' },
    { organization: 'ajkerdeal.com', designation: 'Software Engineer', period: 'Jan 2020 - Nov 2022', location: 'Dhaka, Bangladesh' },
  ],
  leadershipExperience: [{ organization: 'Green University Alumni Association of CSE (GRACE)', designation: 'Advisor', startYear: 2026, endYear: 2028 }],
  graceInvolvement: 'Advisor of the GRACE Executive Committee for 2026-2028.',
  featured: true,
};

committeeProfiles['151002019'] = {
  ...committeeProfiles['151002019'],
  batch: 'CSE 151',
  profession: 'Lecturer',
  organization: 'Green University of Bangladesh',
  designation: 'Advisor',
  location: 'Dhaka, Bangladesh',
  shortBio: 'Academic and research professional working at the intersection of learning, machine learning, and visual computing.',
  biography: 'Md. Atikuzzaman contributes to academia and research with experience in teaching, machine learning research, and data-driven visual computing.',
  education: [
    { institution: 'Kyung Hee University', degree: 'Master of Artificial Intelligence', year: 'Sep 2022 - Aug 2024' },
  ],
  career: [
    { organization: 'Green University of Bangladesh', designation: 'Lecturer', period: 'Sep 2019 - Present', location: 'Dhaka, Bangladesh' },
    { organization: 'Machine Learning & Visual Computing Laboratory, Kyung Hee University', designation: 'Research Assistant (RA)', period: 'Sep 2022 - Aug 2024', location: 'Republic of Korea' },
    { organization: 'Adiva Graphics', designation: 'Data Artist (Associate)', period: 'May 2019 - Jul 2019', location: 'Dhaka, Bangladesh' },
  ],
  leadershipExperience: [{ organization: 'Green University Alumni Association of CSE (GRACE)', designation: 'Advisor', startYear: 2026, endYear: 2028 }],
  graceInvolvement: 'Advisor of the GRACE Executive Committee for 2026-2028.',
  featured: true,
};

committeeProfiles['162002013'] = {
  ...committeeProfiles['162002013'],
  batch: 'CSE 162',
  profession: 'Assistant IT Manager',
  organization: 'Mediscan Teleradiology Solutions',
  designation: 'Assistant IT Manager',
  location: 'Mohakhali, Dhaka, Bangladesh',
  shortBio: 'IT manager overseeing enterprise infrastructure and technical operations at Mediscan Teleradiology Solutions.',
  biography: 'Md. Tamim Hossen works in IT infrastructure and technical operations, with experience managing enterprise systems and process documentation.',
  education: [],
  career: [
    { organization: 'Mediscan Teleradiology Solutions', designation: 'Assistant IT Manager', period: 'Sep 2020 - Present', location: 'Mohakhali, Dhaka, Bangladesh' },
  ],
  leadershipExperience: [{ organization: 'Green University Alumni Association of CSE (GRACE)', designation: 'Vice President', startYear: 2026, endYear: 2028 }],
  graceInvolvement: 'Vice President of the GRACE Executive Committee for 2026-2028.',
  featured: true,
};

committeeProfiles['181002053'] = {
  ...committeeProfiles['181002053'],
  batch: 'CSE 181',
  profession: 'Software QA Engineer',
  organization: 'Riseup Labs',
  designation: 'Software QA Engineer',
  location: 'Uttara, Dhaka, Bangladesh',
  shortBio: 'Software QA engineer focused on quality assurance, automated testing, and cross-functional delivery.',
  biography: 'Sajib Miah works in software quality assurance at Riseup Labs, contributing to testing initiatives and collaborative product delivery.',
  education: [],
  career: [
    { organization: 'Riseup Labs', designation: 'Software QA Engineer', period: 'Jul 2023 - Present', location: 'Uttara, Dhaka, Bangladesh', workMode: 'Offshore QA Engineer (Safe-Guard Team)' },
    { organization: 'Riseup Labs', designation: 'Jr Software QA Engineer', period: 'Feb 2022 - Jun 2023', location: 'Uttara, Dhaka, Bangladesh' },
  ],
  leadershipExperience: [{ organization: 'Green University Alumni Association of CSE (GRACE)', designation: 'Sr. Vice President', startYear: 2026, endYear: 2028 }],
  graceInvolvement: 'Sr. Vice President of the GRACE Executive Committee for 2026-2028.',
  featured: true,
};

committeeProfiles['213002239'] = {
  ...committeeProfiles['213002239'],
  batch: 'CSE 213',
  profession: 'Software Quality Assurance Engineer',
  organization: 'PlayOn24',
  designation: 'Software Quality Assurance Engineer',
  location: 'Dhaka, Bangladesh',
  shortBio: 'Software quality assurance engineer working across testing, product quality, and delivery operations.',
  biography: 'Hridoy Debnath has experience in software quality assurance and student community leadership at Green University of Bangladesh.',
  education: [],
  career: [
    { organization: 'PlayOn24', designation: 'Software Quality Assurance Engineer', period: 'Sep 2025 - Present', location: 'Dhaka, Bangladesh' },
    { organization: 'QA Harbor Limited', designation: 'Software Quality Assurance Engineer', period: 'Jul 2025 - Sep 2025', location: 'Dhaka, Bangladesh' },
    { organization: 'Green University of Bangladesh', designation: 'Student Mentor', period: 'Sep 2024 - Aug 2025', location: 'Dhaka, Bangladesh' },
  ],
  leadershipExperience: [
    { organization: 'Green University Computer Club (GUCC)', designation: 'Joint Organizing Secretary', period: 'Aug 2023 - Mar 2025' },
    { organization: 'Green University Student Mentorship Program (GUSMP)', designation: 'Student Mentor', period: 'Sep 2024 - Aug 2025' },
    { organization: 'Center of Excellence for Teaching and Learning (CETL), Green University', designation: 'Event Manager / Intern', period: 'Jun 2024 - Jun 2025' },
    { organization: 'W.B. Union Model Institution Computer & Robotics Club', designation: 'Former General Secretary' },
  ],
  graceInvolvement: 'Organizing Secretary of the GRACE Executive Committee for 2026-2028.',
  featured: true,
};

committeeProfiles['202002003'] = {
  ...committeeProfiles['202002003'],
  batch: 'CSE 202',
  profession: 'Senior Research Assistant',
  organization: 'MOMODa FOUNDATION',
  designation: 'Senior Research Assistant',
  location: 'Dhaka, Bangladesh',
  shortBio: 'Research professional working across research assistance, communication, and machine learning initiatives.',
  biography: 'Md. Montasir Rahman has experience in research, communication, machine learning, and academic program coordination.',
  education: [],
  career: [
    { organization: 'MOMODa FOUNDATION', designation: 'Senior Research Assistant', period: 'Dec 2025 - Present', location: 'Dhaka, Bangladesh' },
    { organization: 'MOMODa FOUNDATION', designation: 'Officer (Communication)', period: 'Sep 2024 - Jun 2025', location: 'Dhaka, Bangladesh' },
    { organization: 'Robo Tech Valley', designation: 'Machine Learning Intern', period: 'May 2024 - Jul 2024', location: 'Mirpur, Dhaka, Bangladesh' },
  ],
  leadershipExperience: [
    { organization: 'Green University Computer Club (GUCC)', designation: 'President' },
    { organization: 'Green University Research and Publication Community', designation: 'Advisor', period: 'Jan 2026 - Sep 2026' },
    { organization: 'Center of Excellence for Teaching and Learning (CETL), Green University', designation: 'Intern Coordinator', period: 'Sep 2023 - Jun 2024' },
    { organization: 'Center of Excellence for Teaching and Learning (CETL), Green University', designation: 'Research Assistant Intern', period: 'Oct 2022 - Jun 2024' },
  ],
  graceInvolvement: 'Treasurer of the GRACE Executive Committee for 2026-2028.',
  featured: true,
};

committeeProfiles['171002011'] = {
  ...committeeProfiles['171002011'],
  batch: 'CSE 171',
  profession: 'Senior Software Engineer',
  organization: 'US-Bangla Airlines Ltd.',
  designation: 'Senior Software Engineer',
  location: 'Dhaka, Bangladesh',
  shortBio: 'Senior software engineer focused on backend architecture, product engineering, and mentorship.',
  biography: 'Saroar Jahan Sojib has progressed through software engineering roles across airline, product, and location-services technology companies.',
  education: [],
  career: [
    { organization: 'US-Bangla Airlines Ltd.', designation: 'Senior Software Engineer', period: 'Sep 2026 - Present', location: 'Dhaka, Bangladesh' },
    { organization: 'TechnoNext', designation: 'Senior Software Engineer', period: 'Feb 2026 - Sep 2026', location: 'Dhaka, Bangladesh' },
    { organization: 'TechnoNext', designation: 'Software Engineer', location: 'Dhaka, Bangladesh' },
    { organization: 'TechnoNext', designation: 'Junior Software Engineer', period: 'Apr 2022 - Nov 2022', location: 'Dhaka, Bangladesh' },
    { organization: 'Barikoi - Full Stack Location Services Platform', designation: 'Junior Software Engineer', period: 'Feb 2022 - Apr 2022', location: 'Dhaka, Bangladesh' },
    { organization: 'Barikoi', designation: 'Software Engineer Intern', location: 'Dhaka, Bangladesh' },
  ],
  leadershipExperience: [
    { organization: 'TechnoNext', designation: 'Backend Architecture Lead & Mentor' },
    { organization: 'TechnoNext', designation: 'Software Development Supervisor' },
  ],
  graceInvolvement: 'General Secretary of the GRACE Executive Committee for 2026-2028.',
  featured: true,
};

committeeProfiles['181002115'] = {
  ...committeeProfiles['181002115'],
  batch: 'CSE 181',
  profession: 'Senior Software Support Engineer',
  organization: 'BJIT',
  designation: 'Senior Software Support Engineer',
  location: 'Dhaka, Bangladesh',
  shortBio: 'Senior software support engineer with experience in technical support, coordination, and engineering operations.',
  biography: 'Najmus Sakib Sizan has built experience across software support, technical coordination, and technology-focused leadership roles.',
  education: [
    { institution: 'Jagannath University, Dhaka', degree: 'Master of Science (MS) in Computer Science and Engineering', year: 'Aug 2022 - Jul 2024' },
    { institution: 'Jagannath University, Dhaka', degree: 'Master of Philosophy (MPhil) in Computer Science (In progress)', year: 'Feb 2026 - Dec 2028' },
  ],
  career: [
    { organization: 'BJIT', designation: 'Senior Software Support Engineer', period: 'Jul 2026 - Present', location: 'Dhaka, Bangladesh' },
    { organization: 'BJIT', designation: 'Software Support Engineer', period: 'Jul 2024 - Jun 2026', location: 'Dhaka, Bangladesh' },
    { organization: 'BJIT', designation: 'Support Engineer', period: 'Mar 2023 - Jul 2024', location: 'Dhaka, Bangladesh' },
    { organization: 'Athena Infonomics', designation: 'Bangladesh Country Focal', period: 'Jan 2023 - Mar 2023', location: 'Dhaka, Bangladesh' },
    { organization: 'BuffaloGrid', designation: 'Tech Coordinator', period: 'Jun 2022 - Mar 2023', location: 'Dhaka, Bangladesh' },
  ],
  leadershipExperience: [
    { organization: 'Green University Computer Club (GUCC)', designation: 'President' },
    { organization: 'Desh Universal (Pvt.) Ltd.', designation: 'Team Leader' },
    { organization: 'BuffaloGrid Ltd.', designation: 'Tech Coordinator' },
    { organization: 'Athena Infonomics', designation: 'Bangladesh Country Focal' },
  ],
  graceInvolvement: 'Vice President of the GRACE Executive Committee for 2026-2028.',
  featured: true,
};

committeeProfiles['221902084'] = {
  ...committeeProfiles['221902084'],
  profileImage: '/images/alumni/221902084.webp',
  profession: 'Pre-Sales Executive',
  organization: 'Biometrics.BD Limited',
  designation: 'Junior Executive (Pre-Sales)',
  location: 'Banani, Dhaka',
  shortBio: 'Junior Executive in pre-sales with experience in project coordination, technical documentation, and stakeholder communication.',
  biography: 'Md. Showaib Rahman Tanveer combines professional experience in pre-sales, software development, and web service management with an active record of leadership across student and professional communities.',
  career: [
    {
      organization: 'Biometrics.BD Limited',
      designation: 'Junior Executive (Pre-Sales)',
      period: 'Apr 2026 - Present (6+ months)',
      location: 'Banani, Dhaka',
      workMode: 'Hybrid · Full-time',
    },
    {
      organization: 'Digi5 LTD',
      designation: 'Frontend Developer - Intern (Academic Industrial Training)',
      period: 'Oct 2025 - Jan 2026 (4 months)',
      location: 'Aftabnagar, Dhaka',
      workMode: 'On-site · Internship',
    },
    {
      organization: 'Rang Bangladesh LTD',
      designation: 'Web Service Management Officer (Contractual)',
      period: 'Feb 2023 - Jul 2023 (6 months)',
      location: 'Chashara, Narayanganj',
      workMode: 'On-site · Contract',
    },
  ],
  leadershipExperience: [
    {
      organization: 'Green University Alumni Association of CSE (GRACE)',
      designation: 'Assistant General Secretary, Executive Committee 2026-2028',
      period: 'September 2026 - Present',
      details: [
        'Coordinated communications, event documentation and engagement initiatives across a nationwide professional community',
      ],
    },
    {
      organization: 'IEEE CS BDC Graduate Student Member Forum',
      designation: 'Public Relations Coordinator, Executive Committee 2026',
      period: 'May 2026 - Present (4+ months)',
      details: [
        'Coordinated communications, event documentation and engagement initiatives across a nationwide professional community',
      ],
    },
    {
      organization: 'Green University Computer Club (GUCC)',
      designation: 'President, Executive Committee 2025',
      period: 'Sep 2022 - Apr 2026 (3 years 8 months)',
      details: [
        'Organized a national hackathon with full sponsorship from a U.S.-based company',
        'Organized 22+ events throughout the year, including sports, industry visits and technical programs',
      ],
    },
    {
      organization: 'Green University Computer Club (GUCC)',
      designation: 'Joint General Secretary, Reformed Executive Committee 2024',
      period: 'Sep 2022 - Apr 2026 (3 years 8 months)',
      details: [
        'Organized GUB CSE Carnival 2024',
        'Led and coordinated 130+ volunteers during event execution',
      ],
    },
    {
      organization: 'Green University Computer Club (GUCC)',
      designation: 'Joint Cultural Secretary, Executive Committee 2023-24',
      period: 'Sep 2022 - Apr 2026 (3 years 8 months)',
      details: [
        'Organized and participated in cultural events, including dance, drama and other performances',
        'Planned and coordinated cultural programs and activities',
      ],
    },
    {
      organization: 'Green University Computer Club (GUCC)',
      designation: 'Executive Member, Executive Committee 2022-23',
      period: 'Sep 2022 - Apr 2026 (3 years 8 months)',
      details: [
        'Organized the IDPC 2022',
        'Collaborated with the Alumni Association to organize alumni-focused events',
      ],
    },
    {
      organization: 'Green University Center for International Affairs (GCIA)',
      designation: 'Intern, Data Collector',
      period: 'Feb 2024 - Mar 2025 (12 months)',
      details: [
        'Collected and organized data for international university partnerships and MOU preparation',
      ],
    },
  ],
  graceInvolvement: 'Assistant General Secretary of the GRACE Executive Committee for 2026-2028.',
  skills: ['Pre-Sales', 'Project Coordination', 'Technical Documentation', 'WordPress', 'Event Management', 'Public Relations'],
};

export default async function AlumniProfilePage({ params }) {
  const { studentId } = await params;
  const alumni = alumniMap[studentId] || committeeProfiles[studentId];

  if (!alumni) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-8 md:py-12 lg:px-10">
      <div className="overflow-hidden rounded-[28px] border border-[rgba(17,33,61,0.08)] bg-white shadow-[0_18px_50px_rgba(17,33,61,0.06)]">
        <div className="grid gap-5 bg-[linear-gradient(135deg,#f6f8f4,#edf3f1)] p-5 md:gap-8 md:grid-cols-[280px_1fr] md:p-10">
          <div className="relative h-60 overflow-hidden rounded-[22px] bg-[linear-gradient(145deg,#e4f0e9,#e5eaf5)] md:h-full">
            <AlumniPhoto studentId={alumni.studentId} name={alumni.name} src={alumni.profileImage} sizes="(max-width: 768px) 100vw, 280px" />
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-brand-green">Alumni profile</div>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.06em] text-brand-blue md:mt-3 md:text-5xl">{alumni.name}</h1>
            <div className="mt-1 text-lg font-semibold text-brand-green md:mt-2 md:text-xl">{alumni.designation}</div>
            <div className="mt-3 text-sm text-foreground/75 md:mt-4 md:text-base">{alumni.organization}</div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-foreground/70 md:mt-6 md:gap-3 md:text-sm">
              <span className="rounded-full border border-[rgba(17,33,61,0.12)] bg-white px-3 py-1.5 md:py-2">Student ID: {alumni.studentId}</span>
              <span className="rounded-full border border-[rgba(17,33,61,0.12)] bg-white px-3 py-1.5 md:py-2">Batch: {alumni.batch}</span>
              <span className="rounded-full border border-[rgba(17,33,61,0.12)] bg-white px-3 py-1.5 md:py-2">Graduation: {alumni.graduationYear}</span>
              <span className="rounded-full border border-[rgba(17,33,61,0.12)] bg-white px-3 py-1.5 md:py-2">{alumni.location}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue md:mt-8 md:gap-4 md:text-sm md:tracking-[0.16em]">
              <Link href="/alumni" className="rounded-full border border-brand-blue/20 px-4 py-1.5 md:px-4 md:py-2">Back to alumni</Link>
              <Link href="/contact" className="rounded-full bg-brand-blue px-4 py-1.5 text-white md:py-2">Connect</Link>
            </div>
          </div>
        </div>

        <div className="space-y-7 p-5 md:space-y-10 md:p-10">
          <section>
            <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-brand-green md:mb-4 md:text-xs">About</div>
            <p className="max-w-4xl text-base text-foreground/75 md:text-lg">{alumni.shortBio}</p>
            <p className="mt-3 max-w-4xl text-sm text-foreground/70 md:mt-5 md:text-base">{alumni.biography}</p>
          </section>

          {alumni.education?.length > 0 && (
            <section>
              <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-brand-green md:mb-4 md:text-xs">Education</div>
              <div className="space-y-3 md:space-y-4">
                {alumni.education.map((item) => (
                  <div key={`${item.institution}-${item.year}`} className="rounded-[20px] border border-[rgba(17,33,61,0.08)] bg-[#f9f7f3] p-4 md:p-5">
                    <div className="text-base font-bold text-brand-blue md:text-lg">{item.degree}</div>
                    <div className="mt-1 text-foreground/70">{item.institution}</div>
                    <div className="mt-2 text-sm text-foreground/60">{item.year}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {alumni.career?.length > 0 && (
            <section>
              <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-brand-green md:mb-4 md:text-xs">Career journey</div>
              <div className="space-y-3 md:space-y-4">
                {alumni.career.map((item) => (
                  <div key={`${item.organization}-${item.designation}`} className="rounded-[20px] border border-[rgba(17,33,61,0.08)] bg-[#f9f7f3] p-4 md:p-5">
                    <div className="text-base font-bold text-brand-blue md:text-lg">{item.designation}</div>
                    <div className="mt-1 text-foreground/70">{item.organization}</div>
                    <div className="mt-2 text-sm text-foreground/60">{item.period || `${item.startYear} — ${item.endYear || 'Present'}`}</div>
                    {item.location && <div className="mt-1 text-sm text-foreground/60">{item.location}</div>}
                    {item.workMode && <div className="mt-1 text-sm text-foreground/60">{item.workMode}</div>}
                    {item.details?.length > 0 && (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/70">
                        {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    )}
                    {item.skills?.length > 0 && (
                      <div className="mt-3 text-sm font-medium text-foreground/70">Skills: {item.skills.join(', ')}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {alumni.leadershipExperience?.length > 0 && (
            <section>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-green">Leadership experience & activity</div>
              <div className="space-y-4">
                {alumni.leadershipExperience.map((item) => (
                  <div key={`${item.organization}-${item.designation}`} className="rounded-[20px] border border-[rgba(17,33,61,0.08)] bg-[#f9f7f3] p-5">
                    <div className="text-lg font-bold text-brand-blue">{item.designation}</div>
                    <div className="mt-1 text-foreground/70">{item.organization}</div>
                    <div className="mt-2 text-sm text-foreground/60">{item.period || `${item.startYear} — ${item.endYear || 'Present'}`}</div>
                    {item.location && <div className="mt-1 text-sm text-foreground/60">{item.location}</div>}
                    {item.category && <div className="mt-1 text-sm text-foreground/60">{item.category}</div>}
                    {item.details?.length > 0 && (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/70">
                        {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {alumni.skills?.length > 0 && (
            <section>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-green">Skills</div>
              <div className="flex flex-wrap gap-3">
                {alumni.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-brand-blue/15 bg-brand-blue/5 px-4 py-2 text-sm font-medium text-brand-blue">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {alumni.achievements?.length > 0 && (
            <section>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-green">Achievements</div>
              <ul className="space-y-3 text-foreground/75">
                {alumni.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-brand-green" /> <span>{achievement}</span></li>
                ))}
              </ul>
            </section>
          )}

          {alumni.projects?.length > 0 && (
            <section>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-green">Projects</div>
              <div className="space-y-4">
                {alumni.projects.map((project) => (
                  <div key={project.title} className="rounded-[20px] border border-[rgba(17,33,61,0.08)] bg-[#f9f7f3] p-5">
                    <div className="text-lg font-bold text-brand-blue">{project.title}</div>
                    <p className="mt-2 text-foreground/70">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {alumni.graceInvolvement && (
            <section>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-green">GRACE involvement</div>
              <p className="max-w-4xl text-foreground/75">{alumni.graceInvolvement}</p>
            </section>
          )}

          {alumni.social && (
            <section>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-green">Social links</div>
              <div className="flex flex-wrap gap-3">
                {Object.entries(alumni.social).filter(([, value]) => value && value !== '#').map(([key, value]) => (
                  <a key={key} href={value} target="_blank" rel="noreferrer" className="rounded-full border border-brand-blue/15 bg-brand-blue/5 px-4 py-2 text-sm font-medium text-brand-blue capitalize">
                    {key}
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
