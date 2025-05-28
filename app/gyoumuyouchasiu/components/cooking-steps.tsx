import Image from "next/image"

export default function CookingSteps() {
  const steps = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96TOP-01.jpg-pPqmiyvWZ3im2yuymulYu96K3HjrDk.jpeg",
      description: "パッケージから取り出し、必要な分だけ使用できます。残りは冷蔵保存可能。",
      alt: "チャーシューのパッケージ",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8748%EF%BC%88%E4%BF%AE%E6%AD%A3%EF%BC%89%E3%83%88%E3%83%AA%E3%83%9F%E3%83%B3%E3%82%B0.jpg-DexOgpQXRHtMNT8KKfw1yAYz858AZL.jpeg",
      description: "そのまま使用するか、軽く温めるだけで本格的な味わいが楽しめます。",
      alt: "チャーシューの調理例",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8686%EF%BC%88%E4%BF%AE%E6%AD%A3%EF%BC%89.jpg-YxphSASeboFP8rMzkwyQ11c8rrfktC.jpeg",
      description: "ラーメンのトッピングや丼物、おつまみなど様々な料理に活用できます。",
      alt: "チャーシューを使った料理例",
    },
  ]

  return (
    <div className="py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 relative">
        <span className="relative z-10 px-4">簡単調理で本格チャーシュー</span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-red-500 rounded-full"></span>
      </h2>
      <p className="text-center text-sm sm:text-base mb-8 max-w-3xl mx-auto">
        開封してすぐに使える便利さ。飲食店のメニューやイベント出店に最適です。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative aspect-square w-full max-w-[250px] mb-4 sm:mb-6 bg-pink-50 rounded-lg overflow-hidden">
              <Image src={step.image || "/placeholder.svg"} alt={step.alt} fill className="object-contain p-2" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm w-full">
              <p className="text-center text-sm sm:text-base">
                <span className="inline-block bg-red-500 text-white font-bold rounded-full w-6 h-6 text-center mr-2">
                  {index + 1}
                </span>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

