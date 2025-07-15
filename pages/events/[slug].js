
import { useRouter } from 'next/router';
import events from '../../data/events.json';

export default function EventDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const event = events.find(e => e.slug === slug);

  if (!event) return <p className='p-6'>Event not found.</p>;

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-2'>{event.title}</h1>
      <p className='mb-2'>{event.date} — {event.location}</p>
      <p>More event details coming soon...</p>
    </div>
  );
}
