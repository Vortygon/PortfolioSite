import Image from "next/image";

export const metadata = {
  openGraph: {
    images: '/avatar.png'
  }
}

const panels = [
  {name:"Test", description:"Sunt id proident cillum laborum qui enim adipisicing excepteur labore sint officia proident elit. Veniam dolore esse velit ipsum ut qui do veniam voluptate adipisicing et qui commodo dolor."},
  {name:"Test", description:"Sunt id proident cillum laborum qui enim adipisicing excepteur labore sint officia proident elit. Veniam dolore esse velit ipsum ut qui do veniam voluptate adipisicing et qui commodo dolor."},
  {name:"Test", description:"Sunt id proident cillum laborum qui enim adipisicing excepteur labore sint officia proident elit. Veniam dolore esse velit ipsum ut qui do veniam voluptate adipisicing et qui commodo dolor."},
  {name:"Test", description:"Sunt id proident cillum laborum qui enim adipisicing excepteur labore sint officia proident elit. Veniam dolore esse velit ipsum ut qui do veniam voluptate adipisicing et qui commodo dolor."},
  {name:"Test", description:"Sunt id proident cillum laborum qui enim adipisicing excepteur labore sint officia proident elit. Veniam dolore esse velit ipsum ut qui do veniam voluptate adipisicing et qui commodo dolor."},
]

const buttons = [
  {name: 'Main',},
  {name: 'Test',},
]

export default function Home() {
  return (
    <>
    
    <main className="flex flex-col bg-neutral-900 h-full px-6 pb-6 overflow-scroll">
      <header className="flex items-center justify-center gap-3 sticky p-3 bg-transparent backdrop-blur-md w-full z-10">
          <p className="text-2xl font-black">Vortygon</p>
          {buttons.map((button) => 
            <a key={button.name} href="" className="text-lg border-1 rounded-xl px-3 py-1.5 border-neutral-600 hover:bg-neutral-500 hover:border-neutral-500 duration-150">{button.name}</a>     
          )}
      </header>

      {/* <h1 className="w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter">Hello World</h1> */}

      <div></div>

      <div id="panels" className="flex flex-wrap gap-5">
        {panels.map((panel,i) => 
          <div key={panel.name+i} className="flex flex-col flex-1/4 bg-neutral-800 p-5 gap-3 rounded-2xl hover:-translate-y-1 duration-250 hover:shadow-lg not-md:flex-1/2">
            <p className="text-2xl">{panel.name}</p>
            <p className="text-lg">{panel.description}</p>
          </div>
        )}
      </div>

    </main>
    </>
  );
}
