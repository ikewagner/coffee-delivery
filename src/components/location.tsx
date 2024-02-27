import { MapPin } from 'lucide-react'

import { Button } from './ui/button'

export function Location() {
  return (
    <div className="m-2">
      <Button variant="outline" className="flex select-none items-center gap-2">
        <span className="flex text-xs font-normal text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          <span className="font-semibold">Caxias do Sul</span>
        </span>
      </Button>
    </div>
  )
}
