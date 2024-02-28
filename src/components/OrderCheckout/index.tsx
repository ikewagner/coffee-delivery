import { CreditCard, PercentDiamond, Receipt } from 'lucide-react'

import { Button } from '../ui/button'

export function OrderCheckout() {
  return (
    <>
      <span className="p-5">Complete seu pedido</span>

      {/* Address Section */}
      <div className="mb-4 flex flex-col rounded-lg bg-[#f3f2f2f9] p-10 md:h-[372px] md:w-[640px]">
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-600">
              Endereço de Entrega
            </span>
            <span className="text-sm text-gray-600">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="flex flex-col rounded-lg bg-[#f3f2f2f9] p-10 md:w-[640px]">
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-600">Pagamento</span>
            <span className="text-sm text-gray-600">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>

            <div className="mt-2 flex flex-col md:flex-row md:gap-4">
              <Button variant="outline" className="mb-2 md:mb-0">
                <span className="flex text-xs font-normal text-muted-foreground">
                  <CreditCard className="mr-2 h-4 w-4 text-purple-600" />
                  <span className="font-semibold">Cartão de crédito</span>
                </span>
              </Button>
              <Button variant="outline" className="mb-2 md:mb-0">
                <span className="flex text-xs font-normal text-muted-foreground">
                  <Receipt className="mr-2 h-4 w-4 text-purple-600" />
                  <span className="font-semibold">Dinheiro</span>
                </span>
              </Button>
              <Button variant="outline" className="mb-2 md:mb-0">
                <span className="flex text-xs font-normal text-muted-foreground">
                  <PercentDiamond className="mr-2 h-4 w-4 text-purple-600" />
                  <span className="font-semibold">Pagamento PIX</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
