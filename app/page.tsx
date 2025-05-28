import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-12 text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%80%90%E9%AB%98%E8%A7%A3%E5%83%8F%E5%BA%A6%E3%80%91%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E6%96%B0%E3%83%AD%E3%82%B4%E3%80%90%E9%BB%92%E3%80%91.jpg-jGJwCa3HfNXU3pXG4DdPG8tGgUUWid.jpeg"
            alt="会津ブランド館"
            width={200}
            height={100}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 text-gray-800">会津ブランド館 公式サイト</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            会津の厳選された特産品をお届けします。各商品ページからお好みの商品をお選びください。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href="/basashi" className="block">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01AmazonTOP-01.jpg-wQogjS2lbNY9rsiW7SF4GSzpEQIazr.jpeg"
                  alt="会津馬刺し"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">会津ブランド認定 高級馬刺し</h2>
                <p className="text-gray-600">
                  創業400年以上の歴史を誇る会津の馬刺し。国産馬肉のみを使用した極上の逸品。
                </p>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href="/futomenyakisoba" className="block">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8488%EF%BC%88%E4%BF%AE%E6%AD%A3%EF%BC%89.jpg-5GEV98thFaficFwoQByoVzbUZPvuaL.jpeg"
                  alt="極太麺焼きそば"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">極太麺ソース焼きそば</h2>
                <p className="text-gray-600">
                  もちもち食感の極太麺焼きそば。常温5ヶ月保存可能で、飲食店やイベント出店に最適。
                </p>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href="/takikomimeshi" className="block">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%98%85IMG_0168%EF%BC%88%E8%A3%9C%E6%AD%A3%EF%BC%89.jpg-CEQxwR3eeBJpVhsvz1LClUtccTbaSO.jpeg"
                  alt="炊き込みチャーシュー飯"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">炊き込みチャーシュー飯</h2>
                <p className="text-gray-600">
                  本格ラーメン屋の贅沢チャーシューをたっぷり使用。炊飯器に入れるだけの簡単調理。
                </p>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href="/gyoumuyouchasiu" className="block">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%95%E3%83%88%EF%BC%88%E3%83%A1%E3%82%A4%E3%83%B3%EF%BC%89.jpg-1DTMbPKyhjFhqStoXaA6VZJdgcGIq8.jpeg"
                  alt="業務用チャーシュー"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">業務用チャーシュー</h2>
                <p className="text-gray-600">
                  ネット累計10万セット販売の実績。飲食店オーナー様、調理現場責任者様必見の本格チャーシュー。
                </p>
              </div>
            </Link>
          </div>
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>© 2025 会津ブランド館. All rights reserved.</p>
          <p className="mt-2">
            <Link href="https://aizubrandhall.com" className="hover:text-gray-700">
              会津ブランド館公式サイト
            </Link>
          </p>
        </footer>
      </div>
    </div>
  )
}

