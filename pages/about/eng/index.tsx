import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Eng() {
  return (
    <div className="bg-gradient-to-br from-orange-400 via-red-500 to-yellow-300 min-h-screen">
      <header className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 text-white relative">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center flex-1">
            <Image
              src="/Logo CWMUN.png"
              alt="Logo"
              width={100}
              height={100}
              className='cursor-pointer'
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xl font-black">CWMUN NewYork 2024 Experience</span>
          </div>
          <nav className="flex items-center justify-end space-x-4 font-semibold flex-1">
            <Link legacyBehavior href="/">
              <a className="hover:bg-white hover:text-orange-600 px-3 py-2 rounded transition duration-300">Home</a>
            </Link>
            <Link legacyBehavior href="/about/eng">
              <a className="hover:bg-white hover:text-orange-600 px-3 py-2 rounded transition duration-300">About</a>
            </Link>
            <Link legacyBehavior href="/about/it">
              <a className="hover:bg-white hover:text-orange-600 px-3 py-2 rounded transition duration-300">Translate 🇮🇹</a>
            </Link>
          </nav>
        </div>
      </header>

      <div className="relative isolate flex items-center gap-x-6 overflow-hidden rounded-lg px-4 py-3 sm:px-3 sm:before:flex-1" style={{ background: 'linear-gradient(to right, #FFA500, #FF6347)' }}>
        <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true"></div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-white">
            <strong className="font-semibold">Newspaper News!</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current text-orange-200" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            The project I was involved in has been published in the Gazzetta del Sud.
          </p>
          <a href="https://gazzettadelsud.it/?p=1879677" target="_blank" className="flex-none rounded-full bg-red-600 px-3.5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
            Visit! <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>


      <main className="container mx-auto px-4 py-8 bg-gray-800 bg-opacity-75 text-white mt-8 rounded-lg shadow-lg mb-16">

        <h1 className="text-4xl font-bold mb-8">About It</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p>
            Myself and other students from Verona Trento decided to apply for the scholarship offered by the Diplomatic Association; this scholarship allows selected candidates, chosen through an interview, to participate in the Change the World Model United Nations (CWMUN).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">What is CWMUN</h2>
          <p>
            CWMUN is an international program attended by over 10,000 students worldwide each year eager to discuss the main topics of the international political agenda. CWMUN is the largest international youth forum on the planet, currently held in New York City, Abu Dhabi, Dubai, Paris, Singapore, and Rome. The experience is designed for young people who want to change the world and improve themselves.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Destination</h2>
          <p>
            We chose New York as our destination because it is the best and most suggestive but also the most numerous in terms of participants to experience the best possible experience. We have been assigned, in groups of two, to various available delegations distributed in the UN commissions, each dealing with a different topic (UNESCO, ECOSOC, UNOOSA, etc.).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conference Objective</h2>
          <p>
            The purpose of the conference is to build collaborations with other countries to create a large commission to create the working paper, which is the document where the main issues and those encountered during the conference and their possible solutions are written. The collaborations must obviously have diplomatic coherence, i.e., they must follow the recurring relations between states (for example, Russia and the United States could not collaborate as they do not share the same ideas).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Experience Benefits</h2>
          <p>
            This experience shapes you, not only in speaking English but also in relating to other people both diplomatically within the conference and informally outside with people from various cultures.
          </p>
        </section>
      </main>
      <footer className="bg-gradient-to-r text-white py-4 text-center">
        <p>Website created with love by{" "}
          <a href="https://github.com/jmiccoDev" target="_blank" className="font-semibold hover:text-white" rel="noreferrer">Mirko Fiorini</a>{" "}
          and{" "}
          <a href="https://github.com/jmiccoDev" target="_blank" className="font-semibold hover:text-white" rel="noreferrer">Sergio Serraino</a>.
          <br />
          Special thanks to the{" "}
          <a href="https://www.diplomatici.it/" target="_blank" className="font-semibold hover:text-white" rel="noreferrer">Associazione Diplomatici</a>.
          <br />
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}