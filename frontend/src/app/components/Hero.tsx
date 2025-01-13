'use client'

import SearchBar from "./SearchBar"
import { useRouter } from 'next/navigation';

export default function Hero() {

  const router = useRouter();

  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Make your research <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Fluent
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl mb-8 text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">
                To start, enter a paper identifier (Paper Title, Author, or DOI)
              </p>
              <SearchBar onSearch={() => {
                router.push('/search')
              }} term=""/>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  )
}