import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

import { ArticleLink } from './components/article-link';
import clsx from 'clsx';
import { getAllPosts } from '@/lib/articles';
import { Title } from '@/app/components/title';

const projects: {
  href?: string;
  title: string;
  description: string;
  image: string;
  keywords?: string[];
}[] = [
  {
    title: 'RML OCaml Interpreter',
    href: 'https://drive.google.com/file/d/1ILJpRmq-MzcsY8Te-oNDPdCMvwbMvL_D/view?usp=drive_link',
    description: 'Implemented interpreter for non-trivial programming language (RML) implemented in OCaml',
    image: './rml.png',
    keywords: ['OCaml', 'Interpreter', 'IPC/Named pipes'],
  },
  {
    title: 'TCP-Lite',
    href: 'https://github.com/rroyals/appdev',
    description: 'Developed scalable server and client solution to securely process users’ requests using sockets, threading, and SSL',
    image: './tcp.png',
    keywords: ['C++', 'Sockets', 'SSL', 'Multithreading'],
  },
];

export default async function Home() {
  const posts = await getAllPosts({
    includeDrafts: process.env.NODE_ENV === 'development',
  });

  return (
    <main className="px-4 md:px-0">
      <section className="pb-14 border-b border-slate-300 mb-14">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Brendan Royals
          <span className="block text-slate-500 font-normal text-2xl">
            A software engineer based in New York
          </span>
        </h1>
        <p className="text-slate-700 text-lg md:text-xl leading-normal">
        I am currently in my fourth year at Cornell University in the College of Engineering.
        After graduation, I will be working as a software engineer, at Millennium Management.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/info"
            className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
          >
            More Information
          </Link>
          <Link
            href="/resume.pdf"
            className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
          >
            Resume
          </Link>
        </div>
      </section>

      <section className="pb-16">
        <Title as="h2" variant="secondary" className="mb-4">
          Projects
        </Title>

        <p className="text-slate-700 text-lg">
          Below is a selection of recent projects that I&apos;ve worked on.
        </p>
        <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
          {projects.map((project) => {
            const isLink = !!project.href;
            const WrappingComponent = isLink ? Link : 'div';

            return (
              <WrappingComponent
                href={project.href ?? '/'}
                key={project.title}
                className={clsx(
                  'flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8'
                )}
              >
                <div className="relative rounded-xl mb-4 shadow-project">
                  <Image
                    width={450}
                    height={240}
                    quality={90}
                    src={project.image}
                    alt=""
                    className="rounded-xl bg-cover"
                  />
                </div>
                <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
                  {project.title}
                </h3>
                <h3 className="text-slate-500 text-base">
                  {project.description}
                </h3>

                {project.keywords && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="bg-slate-200 text-slate-800 text-xs font-mono px-2 py-1 rounded-full"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </WrappingComponent>
            );
          })}
        </div>

        <Link
          href="/projects"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          View older projects
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>

      <section className="pt-10 pb-16">
        <Title as="h2" variant="secondary" className="mb-8">
          Recent Writing
        </Title>
        <div className="divide-y">
          {posts.slice(0, 3).map((post) => {
            return (
              <ArticleLink
                key={post?.meta.title}
                href={post.href}
                title={post.meta.title}
                date={post?.date}
                summary={post.meta.summary}
              />
            );
          })}
        </div>
        <Link
          href="/posts"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          View More Posts{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
