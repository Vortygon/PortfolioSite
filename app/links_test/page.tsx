// app/page.tsx
// Next.js 13 (app router) landing page styled like the provided example — dark theme, rounded cards, compact layout

import Image from 'next/image'

const links = [
  { title: 'Portfolio', href: 'https://example.com', icon: '🌐' },
  { title: 'CopyCat', href: 'https://example.com/copycat', icon: '✒️' },
  { title: 'Twitch', href: 'https://twitch.tv', icon: '🎮' },
  { title: 'X (Twitter)', href: 'https://twitter.com', icon: '✖️' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-neutral-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg">
        {/* LEFT: IMAGE */}
        <div className="w-full md:w-1/2">
          <Image
            src="/avatar.png"
            alt="Profile"
            width={600}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* RIGHT: LINKS */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-white text-2xl font-semibold mb-1">Hi there, i’m YourName</h1>
          <p className="text-neutral-400 text-sm mb-6">I’m the Ultimate Something</p>

          <span className="text-neutral-300 text-sm font-semibold mb-3">Links:</span>
          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-xl px-4 py-3 transition-colors"
              >
                <span className="text-lg">{link.icon}</span>
                <span className="font-medium">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}