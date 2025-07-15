
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">DeveloperUG</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/"><a className="hover:underline">Home</a></Link></li>
          <li><Link href="/events"><a className="hover:underline">Events</a></Link></li>
          <li><Link href="/about"><a className="hover:underline">About</a></Link></li>
          <li><Link href="/code-of-conduct"><a className="hover:underline">Code of Conduct</a></Link></li>
          <li><Link href="/contact"><a className="hover:underline">Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}
