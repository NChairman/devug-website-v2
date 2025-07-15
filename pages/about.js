
import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About | DeveloperUG</title>
      </Head>
      <main className='p-6'>
        <h1 className='text-3xl font-bold mb-4'>About DeveloperUG</h1>
        <p>DeveloperUG is a community of passionate developers committed to growing, sharing, and collaborating through events, mentorship, and open-source projects.</p>
      </main>
    </div>
  );
}
