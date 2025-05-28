import type React from "react"
import Head from "next/head"
import Link from "next/link"

type LayoutProps = {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <Link href="/" className="text-xl font-bold">
            My Multi-LP Site
          </Link>
          <div className="space-x-4">
            <Link href="/lp1" className="hover:underline">
              LP 1
            </Link>
            <Link href="/lp2" className="hover:underline">
              LP 2
            </Link>
            <Link href="/lp3" className="hover:underline">
              LP 3
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4">{children}</main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} My Multi-LP Site. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

