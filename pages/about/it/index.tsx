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
            <Link legacyBehavior href="/about/it">
              <a className="hover:bg-white hover:text-orange-600 px-3 py-2 rounded transition duration-300">About</a>
            </Link>
            <Link legacyBehavior href="/about/eng">
              <a className="hover:bg-white hover:text-orange-600 px-3 py-2 rounded transition duration-300">Traduci 🇬🇧</a>
            </Link>
          </nav>
        </div>
      </header>

      <div className="relative isolate flex items-center gap-x-6 overflow-hidden rounded-lg px-4 py-3 sm:px-3 sm:before:flex-1" style={{ background: 'linear-gradient(to right, #FFA500, #FF6347)' }}>
        <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true"></div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-white">
            <strong className="font-semibold">Notizia sul giornale!</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current text-orange-200" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            Il progetto a cui sono stato partecipe è stato pubblicato sulla Gazzetta del Sud.
          </p>
          <a href="https://gazzettadelsud.it/?p=1879677" target="_blank" className="flex-none rounded-full bg-red-600 px-3.5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
            Visita! <span aria-hidden="true">&rarr;</span>
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
          <h2 className="text-2xl font-semibold mb-2">Introduzione</h2>
          <p>
            Io e altri ragazzi del Verona Trento abbiamo deciso di candidarci alla borsa di studio che l’Associazione Diplomatici offre; questa borsa di studio permette ai selezionati, scelti tramite colloquio, di partecipare al Change the World Model United Nations (CWMUN).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Cos'è il CWMUN</h2>
          <p>
            Il CWMUN è un programma internazionale a cui partecipano ogni anno più di 10.000 studenti di tutto il mondo desiderosi di dibattere i principali temi dell'agenda politica internazionale. Il CWMUN è il più grande Forum giovanile internazionale del pianeta, che attualmente si svolge a New York City, Abu Dhabi, Dubai, Parigi, Singapore e Roma. L'esperienza è pensata per i giovani che vogliono cambiare il mondo e migliorare se stessi.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">La nostra Destinazione</h2>
          <p>
            Noi abbiamo scelto New York come destinzione in quanto la migliore e la piú suggestiva ma anche la piú numerosa per quanto riguarda i partecipanti per vivere la miglior esperienza possibile. Siamo stati assegnati, a gruppi di due,alle varie delegazioni disponibili distribuite nelle commissioni dell’onu ognuna riguardante un argomento diverso (UNESCO, ECOSOC, UNOOSA,ecc…).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Obiettivo della Conferenza</h2>
          <p>
            Lo scopo della conferenza é stringere collaborazioni con altri paesi per creare una grande commissione per creare il working paper cioé il foglio dove si scrivono le principali problematiche e quelle riscontrate durante la conferenza e le loro eventuali soluzioni.
            Le collaborazioni ovviamente devono avere una coerenza diplomatica, cioé che segue le ricorrenti relazioni tra stati (ad esempio russia e stati uniti non potrebbero collaborare in quanto non condividono le stesse idee).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Benefici dell'Esperienza</h2>
          <p>
            Questa esperienza ti forma, non solo nel parlare inglese, ma anche nel relazionarsi con le altre persone sia in modo diplomatic
            o dentro la conferenza che in modo informale fuori con persone dalle svariate culture.
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