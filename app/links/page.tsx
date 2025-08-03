import { Metadata } from 'next';
import './style.css'
import Image from 'next/image'
import 'tailwindcss'

export const metadata: Metadata = {
  title: "Vortygon Links",
  description: "Ссылочки",
};

function Link(props) {
  return(
    <a href={props.src} target="_blank">
      {props.icon ? <i className={'nf '+props.icon} /> : <></>} 
      {props.iconsrc ? <Image src={props.iconsrc} alt='' width={100} height={100}/> : <></>} 
      {/* <i className={'nf '+props.icon} /> */}
      <span>{props.name}</span>
    </a>
  )
}

export default function Links() {
  return (

        <div id="root" className='antialiased'>

          <img src="avatar.png" id="avatar"/>
          
          <div id="content">
          
            <div id="header">
              <h1>Hi there, i'm Vortygon</h1>
              <p>I'm the Ultimate Cringe Lord</p>
            </div>
            
            <hr />

            <div id="links">

              <h2>Links:</h2>

              <Link 
                name="Portfolio" src="https://vortygon.space" icon="nf-md-web" 
              />
              
              <Link 
                name="CopyCat" src="https://copycat.vortygon.space" 
                iconsrc="https://copycat.vortygon.space/CopyCat_logo_white.svg" 
              />

              <Link 
                name="Twitch" src="https://twitch.tv/vortygon" icon="nf-fa-twitch" 
              />

              <Link 
                name="X (Twitter)" src="https://x.com/vortygon" icon="nf-dev-twitter" 
              />

            </div>

          </div>
        </div>
        
  )
}
