import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Image from 'next/image';
import Link from 'next/link';

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
}[] = [
  {
    company: 'Millennium Management',
    role: 'Software Engineer',
    date: 'July 2025 → Present',
    logo: './millennium.png',
  },
  {
    company: 'Millennium Management',
    role: 'Software Engineer Intern',
    date: 'June 2024 → August 2024',
    logo: './millennium.png',
  },
  {
    company: 'Cornell University',
    role: 'Undergraduate Research Assistant',
    date: 'August 2024 → December 2024',
    logo: './cornell.png',
  },
  {
    company: 'Babylon Micro-Farms',
    role: 'Machine Learning Engineer Intern',
    date: 'June 2023 → August 202',
    logo: './babylon.png',
  },
];

export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Contact Information" />
      <section className="pb-8 prose prose-lg">
        <p>
          I can be reached via email at {' '}
          <Link href="mailto:bhr53@cornell.edu">bhr53[at]cornell[dot]edu</Link>.
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {experience.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 text-xl font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-700 text-lg">{exp.role}</span>
                  <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href="/resume.pdf"
          target="_blank"
          className="block my-8 text-slate-500 text-sm font-medium"
        >
          Download resume →
        </Link>
      </section>
    </main>
  );
}
