import { Helmet } from 'react-helmet-async'

import { OrderCheckout } from '@/components/OrderCheckout'

export function Card() {
  return (
    <>
      <Helmet title="Carrinho" />
      <OrderCheckout />
    </>
  )
}
