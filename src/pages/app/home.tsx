import { Helmet } from 'react-helmet-async'

import CoffeeCard from '@/components/coffee'
import Hero from '@/components/hero'

import { coffees } from '../../../data.json'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <Hero />
      <h2 className="p-5 text-2xl font-extrabold text-gray-700">
        Nossos cafés
      </h2>

      {/* Apply grid styles to this outermost container */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  )
}
