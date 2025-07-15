
import Head from 'next/head';
import Link from 'next/link';
import events from '../../data/events.json';

export default function Events() {
  return (
    <div>
      <Head>
        <title>Events | DeveloperUG</title>
      </Head>
      <main className='p-6'>
        <h1 className='text-3xl font-bold mb-6'>Upcoming Events</h1>
        <ul>
          {events.map((event) => (
            <li key={event.slug} className='mb-4'>
              <Link href={`/events/${event.slug}`}>
                <a className='text-xl text-blue-600 underline'>{event.title}</a>
              </Link>
              <p>{event.date} — {event.location}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
