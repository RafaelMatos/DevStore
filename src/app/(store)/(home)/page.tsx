import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden
        flex justify-center items-start"
      >
        <Image
          src="/products/moletom-never-stop-learning.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt="moletom-never-stop-learning"
        />
        <div
          className="absolute bottom-28 right-28 h-12
        flex items-center gap-2 max-w-[288px] rounded-full border-2 border-zinc-500
        bg-black/60 p-1 pl-5"
        >
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span
            className="flex h-full items-center justify-center
          rounded-full bg-violet-500 px-4 font-semibold"
          >
            R$129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden
        flex justify-center items-start"
      >
        <Image
          src="/products/moletom-java.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt="moletom-java"
        />
        <div
          className="absolute bottom-10 right-10 h-12
        flex items-center gap-2 max-w-[288px] rounded-full border-2 border-zinc-500
        bg-black/60 p-1 pl-5"
        >
          <span className="text-sm truncate">Moletom Java</span>
          <span
            className="flex h-full items-center justify-center
          rounded-full bg-violet-500 px-4 font-semibold"
          >
            R$129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden
        flex justify-center items-start"
      >
        <Image
          src="/products/moletom-ia-p-devs.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt="moletom-ia-p-devs"
        />
        <div
          className="absolute bottom-10 right-10 h-12
        flex items-center gap-2 max-w-[288px] rounded-full border-2 border-zinc-500
        bg-black/60 p-1 pl-5"
        >
          <span className="text-sm truncate">Moletom IA para Devs</span>
          <span
            className="flex h-full items-center justify-center
          rounded-full bg-violet-500 px-4 font-semibold"
          >
            R$129
          </span>
        </div>
      </Link>
    </div>
  )
}