
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DeveloperUG</title>
      </Head>
      <main className='p-6'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to DeveloperUG</h1>
        <p className='mb-4'>A community of developers growing and learning together.</p>
        <Link href='/events'><a className='text-blue-600 underline'>View Events</a></Link>
      </main>
    </div>
  );
}
