import { Box, CoffeeIcon, ShoppingCart, Truck } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="items-center">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-16">
                  <h1 className="text-4xl font-bold">
                    Encontre o café perfeito para qualquer hora do dia
                  </h1>
                  <span className="text-lg text-gray-500">
                    Com o Coffee Delivery você recebe seu café onde estiver, a
                    qualquer hora
                  </span>
                </div>

                <div className="grid grid-cols-2 items-center justify-center gap-8 text-gray-500">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="h-4 w-6" />
                    <span className="text-sm">Compra simples e segura</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Box className="h-4 w-6" />
                    <span className="text-sm">
                      Embalagem mantém o café intacto
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-6" />
                    <span className="text-sm">Entrega rápida e rastreada</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CoffeeIcon className="h-4 w-6" />
                    <span className="text-sm">
                      O café chega fresquinho até você
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="mx-auto min-w-32 sm:max-w-md md:w-1/2 lg:max-w-xl"
              src="/hero.svg"
              alt="Café do Coffee Delivery"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
