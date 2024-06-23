import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { CartWidget } from './cart-widget'
import SearchForm from './search-form'

const Header = () => {
  return (
    <div className="h-10 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          Dev Store
        </Link>

        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/RafaelMatos.png"
            alt="Rafael Matos"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
