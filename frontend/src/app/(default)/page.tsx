export const metadata = {
  title: 'Home',
  description: 'Page description',
}

import Hero from '../components/Hero'
import Features from '../components/Features'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}