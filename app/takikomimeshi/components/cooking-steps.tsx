import Image from "next/image"

export default function CookingSteps() {
  const steps = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%8A%95%E5%85%A5.jpg-Z5jGixymjCviAIUgncv37kpbacdQsW.jpeg",
      description: "二合分のお米を研ぎ水を通常炊飯量いれ本製品も全て投入します。",
      alt: "炊飯器にお米と商品を投入する様子",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%82%8A%E9%A3%AF%E4%B8%AD.jpg-p2OsVooQnLd5PvnnzyTIApVxxMgsLK.jpeg",
      description: "通常炊飯モード、お急ぎの方は「早炊きモード」で炊飯します。",
      alt: "炊飯中の炊飯器",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%A7%E3%81%8D%E3%81%82%E3%81%8C%E3%82%8A.jpg-C08nLzKGr5PuJka0CdYwCFrl7A8NmZ.jpeg",
      description: "10分ほど蒸らしたら完成！お好みでごまや小ねぎなどを加えてください。",
      alt: "完成した炊き込みチャーシュー飯",
    },
  ]

  return (
    <div className="py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 relative">
        <span className="relative z-10 px-4">簡単3ステップで本格チャーシュー飯</span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-red-500 rounded-full"></span>
      </h2>
      <p className="text-center text-sm sm:text-base mb-8 max-w-3xl mx-auto">
        研いだお米に通常の水量と本製品を加えるだけで簡単調理。早炊きモードにも対応しており、時短料理にも最適です。
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

