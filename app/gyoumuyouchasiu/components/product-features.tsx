import { Check } from "lucide-react"
import Image from "next/image"

export default function ProductFeatures() {
  const features = [
    "本格ラーメン屋が作る「チャーシュー」を贅沢に使用！業務用サイズでたっぷり使えます。",
    "創業100年「星醸造」の香ばしい醤油だれ仕込みで喜多方ラーメンの風味を再現。",
    "飲食店やイベント出店に最適！お客様を魅了する本格的な味わい。",
    "常温保存可能で賞味期限は製造より1年（6ヶ月以上保証）。防災備蓄食としても安心。",
    "小分けパックで使いやすく、無駄なく使えるのでコスト効率も抜群。",
  ]

  return (
    <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm">
      {/* 商品名を指定された改行で表示し、テキストサイズを調整 */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-900 leading-tight">
        【業務用】ラーメン屋が作る本物のチャーシュー
        <br />
        16kg (400g×40個)
        <br />
        <span className="text-sm sm:text-base md:text-lg mt-1 inline-block">20g換算で1枚原価60円</span>
      </h2>

      {/* 画像を上部に大きく配置 */}
      <div className="relative aspect-[4/3] w-full max-w-3xl mx-auto mb-5 sm:mb-6 rounded-lg overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01Amazon%E4%BB%A5%E5%A4%96TOP%E7%94%BB%E5%83%8F%EF%BC%88%E6%A5%B5%E5%8E%9A8%E6%9E%9A%EF%BC%89-01.jpg-ZazjRU6KZw6BPkAN3h4fxZT0ksH0gx.jpeg"
          alt="業務用 本格チャーシュー 10個入り×2パック"
          fill
          className="object-contain"
        />
      </div>

      {/* 特徴リストのサイズを小さくして一画面に収まるように調整 */}
      <ul className="space-y-1 sm:space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center mr-2 mt-0.5">
              <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
            </div>
            <p className="text-xs sm:text-sm text-gray-800">{feature}</p>
          </li>
        ))}
      </ul>
      <div className="mt-3 sm:mt-4 border-t pt-3 sm:pt-4 border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="text-center md:text-left">
            <p className="text-xl sm:text-2xl font-bold text-red-600">¥3,980</p>
            <p className="text-xs sm:text-sm text-gray-600">税込・送料無料！</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm sm:text-base font-bold">業務用サイズ</p>
            <p className="text-xs text-gray-600">10個入り×2パック</p>
          </div>
        </div>
      </div>
    </div>
  )
}

