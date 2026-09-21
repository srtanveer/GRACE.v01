import Link from 'next/link';
import AlumniPhoto from '../../components/alumni/AlumniPhoto';

const advisors = [
  { name: 'Md. Sajib Sikder', studentId: '110302005', email: 'mhsajib.dev@gmail.com', phone: '01746290097' },
  { name: 'Akbar Hossain', studentId: '120102038', email: 'akbarhossain15@gmail.com', phone: '01925197090' },
  { name: 'Md. Mahamudul Hasan Khan', studentId: '130202048', email: 'jessankhan77@gmail.com', phone: '01686447177' },
  { name: 'Jannatul Ferdous Katha', studentId: '142002035', email: 'ferdouskatha@gmail.com', phone: '01792855694' },
  { name: 'Md. Atikuzzaman', studentId: '151002019', email: 'atik@cse.green.edu.bd', phone: '01912961096' },
];

const executives = [
  { name: 'Mohammad Tareq Hosain', position: 'President', studentId: '151002017', email: 'mtareqhosain@gmail.com', phone: '01886611404', image: '/images/alumni/151002017.jpg' },
  { name: 'Sajib Miah', position: 'Sr. Vice President', studentId: '181002053', email: 'srsajib76@gmail.com', phone: '01605393799' },
  { name: 'Md. Tamim Hossen', position: 'Vice President', studentId: '162002013', email: 'tamimhossengub@gmail.com', phone: '01754472907' },
  { name: 'Najmus Sakib Sizan', position: 'Vice President', studentId: '181002115', email: 'nsakibsizan115@gmail.com', phone: '01876895227' },
  { name: 'Saroar Jahan Sojib', position: 'General Secretary', studentId: '171002011', email: 'saroarcse171@gmail.com', phone: '01789489563' },
  { name: 'Md. Montasir Rahman', position: 'Treasurer', studentId: '202002003', email: 'montasirrahmanhridoy@gmail.com', phone: '01633605153' },
  { name: 'Mocarram Hosan', position: 'Joint Secretary', studentId: '163002010', email: 'mocarramhossain@gmail.com', phone: '01755442475' },
  { name: 'Md. Showaib Rahman Tanveer', position: 'Asst. General Secretary', studentId: '221902084', email: 'srtanveer.cse@gmail.com', phone: '01569104401', image: '/images/alumni/221902084.webp' },
  { name: 'Abdul Fattah', position: 'Deputy Treasurer', studentId: '221902066', email: 'abdulfattah1177@gmail.com', phone: '01858560779' },
  { name: 'Hridoy Debnath', position: 'Organizing Secretary', studentId: '213002239', email: 'hridoydebnath111@gmail.com', phone: '01742029266' },
  { name: 'Tarafder Razibur Rahman', position: 'Social Welfare and Skill Development Secretary', studentId: '161002054', email: 'rajiburrahmantrafder@gmail.com', phone: '01961134806' },
  { name: 'Saiful Islam Rimon', position: 'Office Secretary', studentId: '213002039', email: 'saifulofficial025@gmail.com', phone: '01756018512' },
  { name: 'Mohammad Sajid Hossain', position: 'Press & Media Secretary', studentId: '221902116', email: 'aayansajid88@gmail.com', phone: '01902386629' },
  { name: 'Rabeya Akter Eva', position: 'Cultural Secretary', studentId: '221902065', email: 'rabeyaeva185@gmail.com', phone: '01731047213' },
  { name: 'Md. Shoab Alam', position: 'Sports Secretary', studentId: '181002011', email: 'shoab@cse.green.edu.bd', phone: '01869116828' },
  { name: 'Nafisa Anjum Samia', position: 'International Affairs Secretary', studentId: '172002005', email: 'samiashipu1414@gmail.com', phone: '4917670850828' },
  { name: 'Mehreen Jerin Khan', position: "Women's Affairs Secretary", studentId: '222902019', email: 'mehreenjerinkhan@gmail.com', phone: '01849294334' },
  { name: 'Arman Hossain', position: 'Executive Member', studentId: '221002624', email: '221002624@student.green.edu.bd', phone: '01609437299' },
  { name: 'Md. Nur A. Neouse', position: 'Executive Member', studentId: '193002093', email: 'neouse00@gmail.com', phone: '01600115606' },
  { name: 'Md. Adnan Sami Pavel', position: 'Executive Member', studentId: '212002128', email: 'adnansamipavel@gmail.com', phone: '01884917523' },
  { name: 'Md. Abu Rayhan Imran', position: 'Executive Member', studentId: '221002457', email: 'aburayhan2550@gmail.com', phone: '01628171665' },
  { name: 'Md. Dulal Hossain', position: 'Executive Member', studentId: '213902116', email: 'dulal.md.cse@gmail.com', phone: '01786107700' },
  { name: 'Al Shahriar Ahommed Shanto', position: 'Executive Member', studentId: '221002567', email: 'shahriarshanto221002567@gmail.com', phone: '01521582378' },
  { name: 'Mofidul Moktar Mofid', position: 'Executive Member', studentId: '221002164', email: 'uimofid7@gmail.com', phone: '01622407325' },
  { name: 'Anika Afroz', position: 'Executive Member', studentId: '222015019', email: 'afroz222cse@gmail.com', phone: '01775570070' },
];

function MemberCard({ member, advisor = false }) {
  return (
    <Link href={`/alumni/${member.studentId}`} className="block rounded-[24px] border border-[rgba(17,33,61,0.08)] bg-white p-5 shadow-[0_14px_35px_rgba(17,33,61,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(17,33,61,0.1)]">
      <div className="grid gap-5 sm:grid-cols-[112px_1fr]">
        <div className="relative h-32 w-full overflow-hidden rounded-[18px] bg-[linear-gradient(145deg,#e4f0e9,#e5eaf5)] sm:h-36">
          <AlumniPhoto studentId={member.studentId} name={member.name} src={member.image} sizes="(max-width: 640px) 100vw, 112px" />
        </div>
        <div className="min-w-0">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-green">
            {advisor ? 'Advisor' : member.position}
          </div>
          <h3 className="text-xl font-black tracking-[-0.04em] text-brand-blue">{member.name}</h3>
          <div className="mt-4 space-y-1 text-sm text-foreground/70">
            <p><span className="font-semibold text-foreground">ID:</span> {member.studentId}</p>
            <p className="break-all"><span className="font-semibold text-foreground">Email:</span> {member.email}</p>
            <p><span className="font-semibold text-foreground">Phone:</span> {member.phone}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ExecutiveCommitteePage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10">
      <header className="mb-12 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.2em] text-brand-green">Leadership · 2026-2028</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-brand-blue md:text-5xl">GRACE Executive Committee</h1>
        <p className="mt-5 text-lg text-foreground/70">Meet the advisors and dedicated alumni members appointed to strengthen engagement, professional networking, and the CSE alumni community at Green University of Bangladesh.</p>
      </header>

      <section aria-labelledby="advisor-members">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-brand-green">Leadership panel</div>
            <h2 id="advisor-members" className="mt-2 text-3xl font-black tracking-[-0.05em] text-brand-blue">Advisor members of GRACE</h2>
          </div>
          <span className="text-sm font-semibold text-foreground/55">{advisors.length} members</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {advisors.map((member) => <MemberCard key={member.studentId} member={member} advisor />)}
        </div>
      </section>

      <section aria-labelledby="executive-members" className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-brand-green">Alumni leadership panel</div>
            <h2 id="executive-members" className="mt-2 text-3xl font-black tracking-[-0.05em] text-brand-blue">Executive committee members</h2>
          </div>
          <span className="text-sm font-semibold text-foreground/55">{executives.length} members</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {executives.map((member) => <MemberCard key={member.studentId} member={member} />)}
        </div>
      </section>
    </main>
  );
}
