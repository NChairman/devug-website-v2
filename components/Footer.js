
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 p-4 mt-10 text-center">
      <p className="mb-2">&copy; {new Date().getFullYear()} DeveloperUG. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="https://twitter.com/developerug" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" className="h-6" />
        </a>
        <a href="https://linkedin.com/company/developerug" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6" />
        </a>
        <a href="mailto:contact@developerug.org.za">
          <img src="/icons/email.svg" alt="Email" className="h-6" />
        </a>
      </div>
    </footer>
  );
}
