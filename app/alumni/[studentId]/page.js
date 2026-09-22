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
    education: [{ institution: 'Green University of Bangladesh', degree: 'B.Sc. in Computer Science and Engineering', year: '2020' }],
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
        details: ['Delivered scalable web solutions using TypeScript and Next.js for data-driven and user-centric products.'],
        skills: ['TypeScript', 'Next.js'],
      },
      {
        organization: 'TechnoNext Ltd',
        designation: 'Software Engineer',
        period: 'Jun 2022 - Jul 2023 (1 year 2 months)',
        location: 'Dhaka, Bangladesh',
        workMode: 'On-site · Full-time',
        details: ['Led the frontend team to deliver high-performance, scalable web applications for the aviation industry, focusing on user experience and operational efficiency.'],
        skills: ['Tailwind CSS', 'Front-End Development'],
      },
      {
        organization: 'Barikoi - Full Stack Location Services Platform',
        designation: 'Junior Software Engineer',
        period: 'Feb 2021 - May 2022 (1 year 4 months)',
        location: 'Dhaka, Bangladesh',
        workMode: 'On-site · Full-time',
        details: ['Crafted scalable, real-time web solutions, delivering high-performance dashboards and location-based services that enhanced operational efficiency and customer experience.'],
        skills: ['Deck.gl', 'JavaScript'],
      },
      {
        organization: 'Barikoi - Full Stack Location Services Platform',
        designation: 'Frontend Developer',
        period: 'Nov 2020 - Jan 2021 (3 months)',
        location: 'Dhaka, Bangladesh',
        workMode: 'Hybrid · Internship',
        details: [
          'Customized Material-UI components to create reusable, consistent UI elements across multiple projects.',
          'Implemented an authentication system in React.js, gaining foundational knowledge in user access and security.',
        ],
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
      details: [
        'Coordinated project execution with Oracle, Cisco and HPE',
        'Translated complex software and hardware capabilities into clear business values for clients',
        'Prepared and maintained project documentation, presentations and operational records',
        'Collaborated with cross-functional teams to ensure timely project delivery and stakeholder alignment',
      ],
    },
    {
      organization: 'Digi5 LTD',
      designation: 'Frontend Developer - Intern (Academic Industrial Training)',
      period: 'Oct 2025 - Jan 2026 (4 months)',
      location: 'Aftabnagar, Dhaka',
      details: [
        'Coordinated project tasks, documentation and communication across development teams',
        'Tracked project progress and ensured timely delivery of client requirements',
      ],
    },
    {
      organization: 'Rang Bangladesh LTD',
      designation: 'Web Service Management Officer (Contractual)',
      period: 'Feb 2023 - Jul 2023 (6 months)',
      location: 'Chashara, Narayanganj',
      details: [
        'Managed website content using a Content Management System (CMS) / WordPress',
        'Maintained content accuracy while coordinating updates across internal teams',
      ],
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
    <main className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
      <div className="overflow-hidden rounded-[28px] border border-[rgba(17,33,61,0.08)] bg-white shadow-[0_18px_50px_rgba(17,33,61,0.06)]">
        <div className="grid gap-8 bg-[linear-gradient(135deg,#f6f8f4,#edf3f1)] p-8 md:grid-cols-[280px_1fr] md:p-10">
          <div className="relative h-72 overflow-hidden rounded-[22px] bg-[linear-gradient(145deg,#e4f0e9,#e5eaf5)] md:h-full">
            <AlumniPhoto studentId={alumni.studentId} name={alumni.name} src={alumni.profileImage} sizes="(max-width: 768px) 100vw, 280px" />
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-brand-green">Alumni profile</div>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-brand-blue md:text-5xl">{alumni.name}</h1>
            <div className="mt-2 text-xl font-semibold text-brand-green">{alumni.designation}</div>
            <div className="mt-4 text-base text-foreground/75">{alumni.organization}</div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-foreground/70">
              <span className="rounded-full border border-[rgba(17,33,61,0.12)] bg-white px-3 py-2">Student ID: {alumni.studentId}</span>
              <span className="rounded-full border border-[rgba(17,33,61,0.12)] bg-white px-3 py-2">Batch: {alumni.batch}</span>
              <span className="rounded-full border border-[rgba(17,33,61,0.12)] bg-white px-3 py-2">Graduation: {alumni.graduationYear}</span>
              <span className="rounded-full border border-[rgba(17,33,61,0.12)] bg-white px-3 py-2">{alumni.location}</span>
            </div>

            <div className="mt-8 flex gap-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
              <Link href="/alumni" className="rounded-full border border-brand-blue/20 px-4 py-2">Back to alumni</Link>
              <Link href="/contact" className="rounded-full bg-brand-blue px-4 py-2 text-white">Connect</Link>
            </div>
          </div>
        </div>

        <div className="space-y-10 p-8 md:p-10">
          <section>
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-green">About</div>
            <p className="max-w-4xl text-lg text-foreground/75">{alumni.shortBio}</p>
            <p className="mt-5 max-w-4xl text-base text-foreground/70">{alumni.biography}</p>
          </section>

          {alumni.education?.length > 0 && (
            <section>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-green">Education</div>
              <div className="space-y-4">
                {alumni.education.map((item) => (
                  <div key={`${item.institution}-${item.year}`} className="rounded-[20px] border border-[rgba(17,33,61,0.08)] bg-[#f9f7f3] p-5">
                    <div className="text-lg font-bold text-brand-blue">{item.degree}</div>
                    <div className="mt-1 text-foreground/70">{item.institution}</div>
                    <div className="mt-2 text-sm text-foreground/60">{item.year}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {alumni.career?.length > 0 && (
            <section>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-green">Career journey</div>
              <div className="space-y-4">
                {alumni.career.map((item) => (
                  <div key={`${item.organization}-${item.designation}`} className="rounded-[20px] border border-[rgba(17,33,61,0.08)] bg-[#f9f7f3] p-5">
                    <div className="text-lg font-bold text-brand-blue">{item.designation}</div>
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
