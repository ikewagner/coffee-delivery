import { Helmet } from 'react-helmet-async'

import CoffeeCard from '@/components/coffee'
import Hero from '@/components/hero'

import { coffees } from '../../../data.json'

export function Dashboard() {
  return (
    <>
      <Helmet title="Coffee Delivery" />
      <Hero />
      <h2 className="p-5 font-medium text-gray-500">Nossos cafés</h2>

      {/* Apply grid styles to this outermost container */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  )
}
