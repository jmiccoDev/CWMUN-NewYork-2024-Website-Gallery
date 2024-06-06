// pages/about.js
import Image from 'next/image';
import Link from 'next/link';

export default function It() {
  return (
    <div className="bg-gradient-to-br from-orange-400 via-red-500 to-yellow-300 min-h-screen">
      <header className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 text-white">
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
            <Link legacyBehavior href="/about/it">
              <a className="hover:bg-white hover:text-orange-600 px-3 py-2 rounded transition duration-300">About</a>
            </Link>
            <Link legacyBehavior href="/about/eng">
              <a className="hover:bg-white hover:text-orange-600 px-3 py-2 rounded transition duration-300">Translate 🇬🇧</a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 bg-gray-800 bg-opacity-75 text-white mt-8 rounded-lg shadow-lg mb-16">
        <h1 className="text-4xl font-bold mb-8">About It</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p>
            I and other students from Verona Trento decided to apply for the scholarship offered by the Associazione Diplomatici; this scholarship allows selected students, chosen through an interview, to participate in the Change the World Model United Nations (CWMUN).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">What is CWMUN</h2>
          <p>
            CWMUN is an international program attended each year by over 10,000 students from around the world eager to debate the main issues on the international political agenda. CWMUN is the largest international youth forum on the planet, currently held in New York City, Abu Dhabi, Dubai, Paris, Singapore, and Rome. The experience is designed for young people who want to change the world and improve themselves.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Destination</h2>
          <p>
            We chose New York as the best and most exciting destination, also the most numerous in terms of participants, to have the best possible experience. We were assigned, in groups of two, to the various available delegations distributed in the UN commissions each dealing with a different topic (UNESCO, ECOSOC, UNOOSA, etc...).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conference Goal</h2>
          <p>
            The goal of the conference is to forge collaborations with other countries to create a large commission to draft the working paper, which is the document where the main issues and those encountered during the conference and their possible solutions are written. Collaborations obviously need to have diplomatic coherence, meaning they follow the recurring relations between states (e.g., Russia and the United States could not collaborate as they do not share the same ideas).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Benefits of the Experience</h2>
          <p>
            This experience shapes you, not only in speaking English but also in relating to other people both diplomatically within the conference and informally outside with people from various cultures.
          </p>
        </section>+
      </main>
   {/* Simple footer (Made by Mirko Fiorini. All rights are reserved.) */}
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
