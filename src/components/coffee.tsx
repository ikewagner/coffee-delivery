import { MapPin, ShoppingBag, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'

import { QuantityInput } from './Form/QuantityInput'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Input } from './ui/input'

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
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

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
      className="m-3 flex items-center justify-center"
      key={coffee.id}
      style={{ maxWidth: '290px', height: 'auto' }}
    >
      <div className="flex w-full flex-col items-center rounded-b-sm rounded-l-lg rounded-r-sm rounded-t-lg bg-[#F3F2F2] px-2 py-2">
        <div className="m-auto">
          <img className="h-16 w-16" src={coffee.image} alt={coffee.title} />
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
        <div className="flex items-center justify-between pt-3">
          <span className="mr-2 text-xl font-extrabold text-gray-700">
            <span className="text-base text-gray-500">R$</span>{' '}
            {coffee.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1">
            <QuantityInput
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
            <Button
              variant="outline"
              className="flex select-none items-center gap-2 bg-purple-950 hover:bg-purple-600"
            >
              <span className="flex text-xs font-normal text-muted-foreground">
                <ShoppingCart className="h-4 w-4 text-white" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard
