import type React from "react"
import Link from "next/link"

const MarketplaceSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">ご購入はこちら</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          href="https://pay.jp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg"
        >
          Pay.jp
        </Link>
        <Link
          href="https://www.rakuten.co.jp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg"
        >
          楽天市場
        </Link>
        <Link
          href="https://www.yahoo.co.jp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 px-6 rounded-lg"
        >
          Yahoo!ショッピング
        </Link>
      </div>
    </div>
  </section>
)

export default MarketplaceSection

