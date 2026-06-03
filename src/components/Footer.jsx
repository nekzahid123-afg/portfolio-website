function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.3" fill="currentColor" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-3 19c.5.1.7-.2.7-.5v-2c-3 .7-3.6-1.2-3.6-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.4-.3-5-1.2-5-5.3 0-1.2.4-2.1 1-2.9-.1-.3-.4-1.4.1-2.9 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.5 1.5.2 2.6.1 2.9.7.8 1 1.7 1 2.9 0 4.1-2.6 5-5 5.3.4.3.8 1 .8 2v2.7c0 .3.2.6.8.5A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M6.5 8.8H3.2V20h3.3V8.8ZM4.9 7.3A1.9 1.9 0 1 0 4.9 3.5a1.9 1.9 0 0 0 0 3.8ZM20.8 20v-6.1c0-3.2-1.7-5.3-4.5-5.3-2 0-3 1.1-3.5 1.9V8.8H9.5V20h3.3v-5.6c0-1.5.7-2.7 2.2-2.7s2.4 1.1 2.4 2.9V20h3.4Z" />
    </svg>
  )
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M15 3c.4 2.5 1.8 4 4 4.4v3.3c-1.5 0-2.8-.4-4-1.2v5.6c0 3.1-2.1 5.4-5.1 5.4A5 5 0 0 1 5 15.4c0-3 2.3-5.1 5.1-5.1.4 0 .8 0 1.1.1v3.4a3 3 0 0 0-1.1-.2c-1.1 0-1.9.7-1.9 1.8s.8 1.9 1.8 1.9c1.1 0 1.8-.7 1.8-2V3H15Z" />
    </svg>
  )
}

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61578693781035',
    Icon: FacebookIcon,
    className: 'bg-[#1877F2] text-white hover:bg-[#0f6ee8]',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nekzahid?igsh=eHgyYmJ0c2x0bHNm',
    Icon: InstagramIcon,
    className: 'bg-rose-500 text-white hover:bg-rose-400',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/nekzahid123-afg/Webtech',
    Icon: GithubIcon,
    className: 'bg-white text-[#181717] ring-1 ring-gray-500 hover:bg-gray-200',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nek-zahid-3900323a8/',
    Icon: LinkedinIcon,
    className: 'bg-[#0A66C2] text-white hover:bg-[#0958a8]',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@nek.zahid7?_r=1&_t=ZS-96dOI3NnsTk',
    Icon: TiktokIcon,
    className: 'bg-black text-white hover:bg-gray-900',
  },
]

export default function Footer() {
  return (
    <footer className="mx-3 grid grid-cols-1 gap-6 bg-gray-900 p-5 text-white sm:mx-4 sm:p-6 md:grid-cols-3">
      <div>
        <h1 className="text-xl font-bold sm:text-2xl">Useful Links</h1>
        <p className="mt-3 text-sm text-gray-300">Home | About | Contact</p>
      </div>

      <div>
        <h1 className="text-xl font-bold sm:text-2xl">Contact me</h1>
        <p className="mt-3 break-words text-sm text-gray-300">Whatsapp: 03214755764</p>
        <p className="break-words text-sm text-gray-300">Gmail: nekzahid123@gmail.com</p>
      </div>

      <div>
        <h1 className="text-xl font-bold sm:text-2xl">Follow me</h1>
        <div className="mt-3 flex flex-wrap gap-3">
          {socialLinks.map(({ name, href, Icon, className }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              title={name}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition ${className}`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
