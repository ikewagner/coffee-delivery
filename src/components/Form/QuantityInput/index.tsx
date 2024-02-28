import { Minus, Plus } from 'lucide-react'

type Props = {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  return (
    <div className="flex items-center rounded-md bg-gray-200">
      <button
        className="bg-base-button flex items-center justify-center rounded-l-full p-2"
        onClick={decrementQuantity}
      >
        <Minus
          className="text-purple-950 transition-all duration-200"
          size={14}
        />
      </button>
      <span className="bg-base-button text-base-title rounded-full p-2 text-gray-500">
        {quantity}
      </span>
      <button
        className="bg-base-button flex items-center justify-center rounded-r-full p-2"
        onClick={incrementQuantity}
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
