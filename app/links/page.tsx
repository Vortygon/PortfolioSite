import { Metadata } from 'next';
// import './style.css'
import Image from 'next/image'
import 'tailwindcss'
import './imports.css'

export const metadata: Metadata = {
  title: "Vortygon Links",
  description: "Ссылочки",
};

function Link(props: { src: string; icon: string | undefined; iconsrc: string | undefined; name: string }) {
  return(
    <a href={props.src} target="_blank">
      {props.icon ? <i className={'nf '+props.icon} /> : <></>} 
      {props.iconsrc ? <Image src={props.iconsrc} alt='' width={100} height={100}/> : <></>} 
      {/* <i className={'nf '+props.icon} /> */}
      <span>{props.name}</span>
    </a>
  )
}

const links = [
  { name: "Portfolio", src: "https://vortygon.space", icon: "nf-md-web", iconsrc: '' },
  { name: "CopyCat", src: "https://copycat.vortygon.space", icon: "", iconsrc: "https://copycat.vortygon.space/CopyCat_logo_white.svg" },
  { name: "Twitch", src: "https://twitch.tv/vortygon", icon: "nf-fa-twitch", iconsrc: '' },
  { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
  // { name: "X (Twitter)", src: "https://x.com/vortygon", icon: "nf-dev-twitter", iconsrc: '' },
]

export default function Links() {
  return (
        <main className="antialiased flex min-h-screen bg-neutral-900 items-center justify-center md:p-24 p-6">
          <Image src={"/avatar.png"} alt='' width={2048} height={2048} className='absolute object-cover blur-3xl opacity-30 h-full avatar'/>
          <div id="root" 
          className='flex flex-col md:flex-row bg-neutral-800 backdrop-blur-3xl shadow-lg rounded-3xl overflow-hidden w-full z-10'>

            <div className='w-full md:w-1/2'>
              <Image src={"/avatar.png"} id="avatar" alt='' width={2048} height={2048} className='flex w-full h-full object-cover avatar'/>
            </div>
            
            <div id="content" className='flex-col h-full w-full md:w-1/2'>
            
              <div id="header" className='p-4'>
                <h1 className='text-3xl font-semibold'>Hi there, i&apos;m Vortygon</h1>
                <p className='text-2xl font-thin'>I&apos;m the Ultimate Cringe Lord</p>
              </div>
              
              <hr className='border-neutral-700' />

              <div id="links" className='flex flex-col p-4 gap-3 max-h-screen h-full text-lg overflow-scroll'>

                <h2 className='font-semibold not-md:hidden'>Links:</h2>

                {links.map((link) => 
                  <a href={link.src} target="_blank" className='flex hover:-translate-y-1 duration-150 hover:shadow-lg hover:bg-neutral-600 rounded-2xl bg-neutral-700 p-3 md:mx-5 px-3 h-13 items-center gap-1'>
                    {link.icon ? <i className={'w-10 text-center nf '+link.icon} /> : <></>} 
                    {link.iconsrc ? <Image src={link.iconsrc} alt='' width={100} height={100} className='max-h-full w-10'/> : <></>} 
                    <div className='w-full text-center'>{link.name}</div>
                  </a>
                )}

              </div>

            </div>
          </div>
        </main>
  )
}
