import { Home, ShoppingBag, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Location } from './location'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <img
              src="/logo.svg"
              alt="Coffee Delivery Logo"
              className="h-10 w-[84.95px]"
            ></img>
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />
          <Location />
          <Link to={'/card'}>
            <div className="flex items-center space-x-1 ">
              <div className="relative">
                <ShoppingBag className="h-6 w-6 flex-shrink-0" />
              </div>
              <p className="text-lg">
                <span className="text-sm ">0</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
