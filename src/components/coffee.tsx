import React from 'react'

import { Badge } from './ui/badge'
import { Button } from './ui/button'

interface CoffeeProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

const CoffeeCard: React.FC<CoffeeProps> = ({ coffee }) => {
  const tagBadges = coffee.tags.map((tag, index) => (
    <Badge
      key={index}
      style={{
        backgroundColor: '#C47F17',
        color: '#DBAC2C',
        fontSize: '0.57rem',
        textTransform: 'uppercase',
      }}
    >
      {tag}
    </Badge>
  ))

  return (
    <div
      className="m-5 flex items-center justify-center"
      key={coffee.id}
      style={{ maxWidth: '256px', height: '100%' }}
    >
      <div className="flex w-full flex-col items-center rounded-b-sm rounded-l-lg rounded-r-sm rounded-t-lg bg-[#F3F2F2] px-2 py-2">
        <div className="m-auto">
          <img className="h-12 w-12" src={coffee.image} alt={coffee.title} />
        </div>
        <h1 className="mb-2 mt-2 text-center text-lg font-medium text-gray-700">
          {coffee.title}
        </h1>
        <div className="mt-2 flex flex-wrap gap-1">{tagBadges}</div>
        <div className="mt-2">
          <span className="flex w-auto overflow-hidden break-all text-center text-sm text-gray-400">
            {coffee.description}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard
