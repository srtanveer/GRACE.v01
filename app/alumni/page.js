'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AlumniPhoto from '../../components/alumni/AlumniPhoto';

const directoryAlumni = [
  {
    studentId: '22190200123',
    name: 'Nusrat Jahan',
    batch: 'CSE 221',
    graduationYear: 2026,
    profession: 'Software Engineer',
    organization: 'Pathao',
    designation: 'Senior Product Engineer',
    location: 'Dhaka, Bangladesh',
    skills: ['React', 'JavaScript', 'Product Strategy'],
    featured: true,
  },
  {
    studentId: '20190203456',
    name: 'Mahmud Hasan',
    batch: 'CSE 201',
    graduationYear: 2024,
    profession: 'Product Engineer',
    organization: 'Brain Station 23',
    designation: 'Lead Software Developer',
    location: 'Dhaka, Bangladesh',
    skills: ['Node.js', 'System Design', 'JavaScript'],
    featured: false,
  },
  {
    studentId: '20180201987',
    name: 'Rabeya Sultana',
    batch: 'CSE 201',
    graduationYear: 2023,
    profession: 'Data Scientist',
    organization: 'Airtel Digital',
    designation: 'Senior Data Scientist',
    location: 'Chattogram, Bangladesh',
    skills: ['Python', 'Data Analysis', 'Machine Learning'],
    featured: true,
  },
  {
    studentId: '19180201344',
    name: 'Sabbir Ahmed',
    batch: 'CSE 191',
    graduationYear: 2022,
    profession: 'Researcher',
    organization: 'Open Source Lab',
    designation: 'Research Engineer',
    location: 'Sylhet, Bangladesh',
    skills: ['Research', 'JavaScript', 'Open Source'],
    featured: false,
  },
  {
    studentId: '151002017',
    name: 'Mohammad Tareq Hosain',
    batch: 'CSE 151',
    graduationYear: 2020,
    profession: 'Data Engineer',
    organization: 'NEXT Ventures',
    designation: 'Senior Data Engineer',
    location: 'Dhaka, Bangladesh',
    skills: ['Data Engineering', 'SQL', 'Python', 'Cloud Platforms'],
    image: '/images/alumni/151002017.jpg',
    featured: true,
  },
];

const committeeMembers = [
  ['Md. Sajib Sikder', 'Advisor', '110302005'],
  ['Akbar Hossain', 'Advisor', '120102038'],
  ['Md. Mahamudul Hasan Khan', 'Advisor', '130202048'],
  ['Jannatul Ferdous Katha', 'Advisor', '142002035'],
  ['Md. Atikuzzaman', 'Advisor', '151002019'],
  ['Mohammad Tareq Hosain', 'President', '151002017'],
  ['Sajib Miah', 'Sr. Vice President', '181002053'],
  ['Md. Tamim Hossen', 'Vice President', '162002013'],
  ['Najmus Sakib Sizan', 'Vice President', '181002115'],
  ['Saroar Jahan Sojib', 'General Secretary', '171002011'],
  ['Md. Montasir Rahman', 'Treasurer', '202002003'],
  ['Mocarram Hosan', 'Joint Secretary', '163002010'],
  ['Md. Showaib Rahman Tanveer', 'Asst. General Secretary', '221902084'],
  ['Abdul Fattah', 'Deputy Treasurer', '221902066'],
  ['Hridoy Debnath', 'Organizing Secretary', '213002239'],
  ['Tarafder Razibur Rahman', 'Social Welfare and Skill Development Secretary', '161002054'],
  ['Saiful Islam Rimon', 'Office Secretary', '213002039'],
  ['Mohammad Sajid Hossain', 'Press & Media Secretary', '221902116'],
  ['Rabeya Akter Eva', 'Cultural Secretary', '221902065'],
  ['Md. Shoab Alam', 'Sports Secretary', '181002011'],
  ['Nafisa Anjum Samia', 'International Affairs Secretary', '172002005'],
  ['Mehreen Jerin Khan', "Women's Affairs Secretary", '222902019'],
  ['Arman Hossain', 'Executive Member', '221002624'],
  ['Md. Nur A. Neouse', 'Executive Member', '193002093'],
  ['Md. Adnan Sami Pavel', 'Executive Member', '212002128'],
  ['Md. Abu Rayhan Imran', 'Executive Member', '221002457'],
  ['Md. Dulal Hossain', 'Executive Member', '213902116'],
  ['Al Shahriar Ahommed Shanto', 'Executive Member', '221002567'],
  ['Mofidul Moktar Mofid', 'Executive Member', '221002164'],
  ['Anika Afroz', 'Executive Member', '222015019'],
];

const committeeAlumni = committeeMembers.map(([name, designation, studentId]) => ({
  studentId,
  name,
  batch: `CSE ${studentId.slice(0, 3)}`,
  graduationYear: 'Not provided',
  profession: 'GRACE Executive Committee',
  organization: 'Green University Alumni Association of CSE (GRACE)',
  designation,
  location: 'Green University of Bangladesh',
  skills: ['Leadership', 'Community Engagement'],
  image: studentId === '221902084' ? '/images/alumni/221902084.webp' : undefined,
  featured: false,
}));

const alumni = [
  ...directoryAlumni,
  ...committeeAlumni.filter((member) => !directoryAlumni.some((person) => person.studentId === member.studentId)),
];

export default function AlumniDirectoryPage() {
  const [search, setSearch] = useState('');
  const [batch, setBatch] = useState('');

  const options = useMemo(() => ({
    batches: [...new Set(alumni.map((person) => person.batch))],
  }), []);

  const filteredAlumni = useMemo(() => {
    const query = search.trim().toLowerCase();

    return alumni.filter((person) => {
      const searchableText = [
        person.name,
        person.studentId,
        person.profession,
        person.designation,
        person.organization,
        person.location,
        ...person.skills,
      ].join(' ').toLowerCase();

      return (
        (!query || searchableText.includes(query)) &&
        (!batch || person.batch === batch)
      );
    });
  }, [batch, search]);

  const clearFilters = () => {
    setSearch('');
    setBatch('');
  };

  return (
    <main className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10">
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.2em] text-brand-green">Directory</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-brand-blue md:text-5xl">Alumni network</h1>
      </header>

      <div className="mb-8 grid gap-4 rounded-[24px] border border-[rgba(17,33,61,0.08)] bg-white p-5 md:grid-cols-[1.5fr_1fr_auto]">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="rounded-full border border-[rgba(17,33,61,0.12)] bg-[#f7f8f5] px-4 py-3 text-sm text-foreground outline-none ring-0 placeholder:text-foreground/45"
          placeholder="Search name, skills, location, company..."
        />
        <select value={batch} onChange={(event) => setBatch(event.target.value)} className="rounded-full border border-[rgba(17,33,61,0.12)] bg-[#f7f8f5] px-4 py-3 text-sm text-foreground outline-none">
          <option value="">All batches</option>
          {options.batches.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        <button type="button" onClick={clearFilters} className="rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
          Clear filters
        </button>
      </div>

      <div className="mb-6 text-sm font-medium text-foreground/65">Showing {filteredAlumni.length} of {alumni.length} alumni</div>

      <div className="grid gap-5 lg:grid-cols-2">
        {filteredAlumni.map((person) => (
          <Link key={person.studentId} href={`/alumni/${person.studentId}`} className="group flex gap-5 rounded-[26px] border border-[rgba(17,33,61,0.08)] bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(17,33,61,0.08)]">
            <div className="relative h-28 w-24 overflow-hidden rounded-[18px] bg-[#ecf0f1]">
              <AlumniPhoto studentId={person.studentId} name={person.name} src={person.image} sizes="96px" />
            </div>

            <div className="flex-1">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h2 className="text-xl font-black tracking-[-0.05em] text-brand-blue">{person.name}</h2>
                {person.featured && (
                  <span className="rounded-full bg-brand-green/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                    Featured
                  </span>
                )}
              </div>

              <div className="space-y-1 text-sm text-foreground/70">
                <p><span className="font-semibold text-foreground">Student ID:</span> {person.studentId}</p>
                <p><span className="font-semibold text-foreground">Batch:</span> {person.batch}</p>
                <p><span className="font-semibold text-foreground">Graduation:</span> {person.graduationYear}</p>
                <p><span className="font-semibold text-foreground">Role:</span> {person.designation}</p>
                <p><span className="font-semibold text-foreground">Organization:</span> {person.organization}</p>
                <p><span className="font-semibold text-foreground">Skills:</span> {person.skills.join(', ')}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredAlumni.length === 0 && (
        <div className="rounded-[24px] border border-dashed border-brand-blue/20 bg-white p-10 text-center text-foreground/65">
          No alumni match those search criteria.
        </div>
      )}
    </main>
  );
}
