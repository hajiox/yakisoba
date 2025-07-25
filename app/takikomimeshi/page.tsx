"use client"

import Image from "next/image"
import { useEffect } from "react"
import * as gtag from "@/lib/gtag"
import { Badge } from "@/components/ui/badge"
import { Clock, Utensils } from "lucide-react"
import SharedLayout from "@/components/shared-layout"
import ProductCarousel from "./components/product-carousel"
import ProductFeatures from "./components/product-features"
import CookingSteps from "./components/cooking-steps"

export default function BasashiLP() {
  useEffect(() => {
    gtag.event({
      action: "view_basashi_lp",
      category: "engagement",
      label: "Basashi LP View",
    })
  }, [])

  const handlePurchaseClick = (marketplace: string) => {
    gtag.event({
      action: "click_purchase",
      category: "conversion",
      label: `Basashi Purchase Click - ${marketplace}`,
    })
  }

  const reviews = [
    {
      comment:
        "本格的なラーメン屋のチャーシューがたっぷり入っていて、とても贅沢な気分になりました！炊飯器に入れるだけの簡単調理なのに、こんなに美味しいなんて驚きです。家族全員が絶賛していました。",
      rating: 5,
    },
    {
      comment:
        "喜多方ラーメンが好きなので購入しました。醤油だれの香ばしさがご飯に絡んで、本当に美味しい！チャーシューもメンマもうずら卵も入っていて、具だくさんなのが嬉しいです。リピート確定です！",
      rating: 5,
    },
    {
      comment:
        "忙しい日の夕食に重宝しています。炊飯器にセットするだけで本格的な味わいが楽しめるのは、主婦としては本当にありがたい。子どもたちも喜んで食べてくれるので、我が家の定番になりそうです。",
      rating: 5,
    },
    {
      comment:
        "星醸造の醤油だれが本当に香ばしくて、ラーメン屋さんの味を思い出します。チャーシューもたっぷり入っていて食べ応え抜群。ただ、少し塩分が強めなので、4つ星にしました。",
      rating: 4,
    },
    {
      comment:
        "簡単なのに本格的な味わいで感動しました！チャーシューの量も多く、食べ応え十分です。常温保存できるので、非常食としてもストックしています。災害時でも美味しいものが食べられると思うと安心です。",
      rating: 5,
    },
    {
      comment:
        "ラーメン好きの夫へのプレゼントで購入。「これはうまい！」と大絶賛でした。チャーシューがジューシーで、ラーメンの風味がしっかり感じられるとのこと。また買ってほしいとせがまれています。",
      rating: 5,
    },
    {
      comment:
        "味は確かに美味しいのですが、もう少しチャーシューの量が多いと嬉しかったです。それでも炊飯器で簡単に作れて、家族で楽しめたので満足しています。",
      rating: 4,
    },
    {
      comment:
        "キャンプに持っていって作りました！アウトドアでこんな本格的な味が楽しめるなんて感動です。みんなから「どうやって作ったの？」と聞かれるほど好評でした。次回のキャンプにもぜひ持っていきたいです。",
      rating: 5,
    },
    {
      comment:
        "具材の質が良く、特にチャーシューが柔らかくて美味しいです。ただ、個人的には少し味が濃いめだったので、白ごまを追加して調整しました。それでも十分美味しくいただけました。",
      rating: 4,
    },
    {
      comment:
        "一人暮らしの息子に送ったところ、「こんな簡単に美味しいものが作れるなんて！」と喜んでくれました。調理が苦手な息子でも問題なく作れたようで、親としても安心です。リピート購入します！",
      rating: 5,
    },
  ]

  const carouselImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01%E6%A5%BD%E5%A4%A9%E4%BB%96TOP-01.jpg-zRheutcmw8olJeg6tgh6wrekf1YYwu.jpeg",
      alt: "ラーメン屋が作る本物のチャーシュー 炊き込みチャーシュー飯 2合用パッケージ",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02%E3%83%A1%E3%82%A4%E3%83%B3-01.jpg-FwKCr0r0yqXCjYxMKnS0ZRkNAuc2ui.jpeg",
      alt: "炊き込みチャーシュー飯のメイン画像 - チャーシューと香ばしいごはん",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03%E5%96%9C%E5%A4%9A%E6%96%B9%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3-01.jpg-MhqRNyUxFzGgs9hzIb7trjjml6af7k.jpeg",
      alt: "喜多方ラーメンの画像 - あの喜多方ラーメンの味わいをご飯で楽しめる",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04%E5%85%B7%E6%9D%90%E3%81%9F%E3%81%A3%E3%81%B7%E3%82%8A-01.jpg-KHrzJCWzrl7Ebr7wx4iIDEiIaZMjd5.jpeg",
      alt: "具材たっぷりの炊き込みご飯 - チャーシュー・煮卵・メンマ・煮干し",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05%E9%86%A4%E6%B2%B9%E3%81%A0%E3%82%8C-01.jpg-EkDpCP6ZxT48pnhLYNLwsWFwlt0TOy.jpeg",
      alt: "香ばしい醤油ラーメンだれ - 創業100年老舗星醸造の秘伝のたれ",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06%E7%82%8A%E9%A3%AF-01-01.jpg-0nhqasla28S4yMsZO7zfb6oTMYKFoB.jpeg",
      alt: "炊飯器で簡単調理 - 2合分のお米・お水・本商品を入れるだけで簡単調理",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07%E7%AE%B1%E5%A4%96%E8%A6%B32%E9%A3%9F-01.jpg-QxXMeWP8hwkUyhQHVnqWohRi35cguQ.jpeg",
      alt: "ネコポス常温発送 - ポスト投函されるのでお忙しい方も安心",
    },
  ]

  return (
    <SharedLayout>
      {/* TOPページ（ヒーローセクション） */}
      <section className="relative h-[calc(100vh-89px)] mt-[89px]">
        {/* PC用画像 - md以上の画面サイズで表示 */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%98%85IMG_0168%EF%BC%88%E8%A3%9C%E6%AD%A3%EF%BC%89.jpg-CEQxwR3eeBJpVhsvz1LClUtccTbaSO.jpeg"
            alt="炊き込みチャーシュー飯"
            fill
            className="object-cover object-center"
            style={{ objectPosition: "center", transform: "scale(1.1)" }}
            priority
          />
        </div>

        {/* スマホ用画像 - md未満の画面サイズで表示 */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%83%9E%E3%83%9B%E7%94%A8TOP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-l0KOy5qePmdtIkNZS33vxJqCXD7atK.jpeg"
            alt="炊き込みチャーシュー飯 - チャーシューとネギがのった完成品"
            fill
            className="object-cover object-center"
            style={{ objectPosition: "center" }}
            priority
          />
        </div>
      </section>

      {/* タイトルセクション */}
      <section className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-3 sm:mb-4 text-sm sm:text-lg bg-red-600">
            ラーメン屋が作る本物のチャーシューシリーズ
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            ラーメン好きも唸る美味しさ。
            <br className="sm:hidden" />
            チャーシューをまるごと
            <br className="sm:hidden" />
            贅沢に炊き込んだ
            <br className="sm:hidden" />
            新感覚ごはん
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed">
            創業100年「星醸造」の香ばしい醤油だれと
            <br className="sm:hidden" />
            喜多方ラーメンの具材が織りなす、
            <br className="sm:hidden" />
            贅沢な味わいを食卓に。
          </p>
        </div>
      </section>

      {/* 商品情報セクション */}
      <section id="product" className="py-10 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">商品情報</h2>

          {/* 送料無料・即日発送バナー */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="relative aspect-[2/1]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-01.jpg-iSNdD13PzyekHCpfg7RexGLgsgSB8A.jpeg"
                alt="送料無料 沖縄・離島地域除く"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[2/1]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-01.jpg-FwK4BcQFsPNQP35b6xjo2OkxvW0MYv.jpeg"
                alt="14時までのご注文で即日発送"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* 商品情報カード */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 sm:mb-12">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
                  喜多方ラーメン風炊き込みチャーシュー飯
                </h3>

                {/* ProductCarouselコンポーネントは変更済み */}
                <ProductCarousel images={carouselImages} />

                <div className="mt-6 sm:mt-8">
                  <CookingSteps />
                </div>
                <div className="mt-8 sm:mt-12 space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">商品詳細</h3>
                    <div className="space-y-4">
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                        喜多方ラーメンの具材と創業100年「星醸造」の香ばしい醤油だれで作る贅沢な炊き込みご飯の素です。1袋にたっぷり120gのチャーシューが入っており、メンマ、うずら煮卵、煮干しなど豊富な具材が楽しめます。
                      </p>
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                        2合炊飯用（2～3人前）×2個セットで、忙しい日でも手軽に美味しい炊き込みご飯を楽しめます。研いだお米に通常の水量と本製品を加えるだけで簡単調理。早炊きモードにも対応しており、時短料理にも最適です。
                      </p>
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                        常温保存が可能で、備蓄食としても安心。特別な日の一品にもぴったりな贅沢な味わいをぜひお試しください。
                      </p>
                    </div>
                  </div>
                  {/* 商品パッケージ画像と完成品画像を横並びに配置 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LP%E7%94%BB%E5%83%8F1_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-tH5eRBab0Pn8gGnUgDDkyF49JJKrC4.jpeg"
                        alt="喜多方ラーメン風炊き込みチャーシュー飯のパッケージと中身"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LP%E7%94%BB%E5%83%8F3_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-APz7jDFBITikGtnKoXFbZiBsEMThrc.jpeg"
                        alt="炊き込みチャーシュー飯の完成品"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  {/* ProductFeaturesコンポーネントは変更済み */}
                  <ProductFeatures />
                </div>
              </div>
            </div>

            {/* Add new section about proven track record */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 sm:mb-12">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
                  実績で証明！信頼の美味しさ！
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-900 mb-6 sm:mb-8 leading-relaxed">
                  人気商品の「ラーメン屋が作る本物のチャーシュー」で培った間違いのない美味しさ。各ECサイトでの高く評価されたチャーシューをたっぷり使用しています。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* 商品画像（上） */}
                  <div className="flex flex-col gap-6">
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01Amazon%E4%BB%A5%E5%A4%96TOP%E7%94%BB%E5%83%8F%EF%BC%88%E6%A5%B5%E5%8E%9A8%E6%9E%9A%EF%BC%89-01.jpg-ZazjRU6KZw6BPkAN3h4fxZT0ksH0gx.jpeg"
                        alt="極厚チャーシュー8枚"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* 受賞画像（下） */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yahoo%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88BUTA1%E4%BD%8D.jpg-tR6ELh2HkAJQ7woZeznt5uKpukvsMd.jpeg"
                        alt="Yahoo!ショッピング ランキング1位"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96TOP-01.jpg-pPqmiyvWZ3im2yuymulYu96K3HjrDk.jpeg"
                        alt="個包装チャーシュー"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yahoo%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88%E3%83%90%E3%83%A93%E4%BD%8D.jpg-6oCTesaduPLBUQEPBQDZaTwofoNjmu.jpeg"
                        alt="Yahoo!ショッピング ランキング3位"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YAHOO%E7%94%A8TOP%E7%94%BB%E5%83%8F%EF%BC%88%E8%A8%B3%E3%82%A2%E3%83%AA%EF%BC%89-01.jpg-viZbLxvciCzwMut5l9P78qBSk3XlZt.jpeg"
                        alt="訳ありチャーシュー"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%A8%B3%E3%81%82%E3%82%8A1%E4%BD%8D.jpg-BZe7Ius1EzHDuLSLMSsefwmdQLZ8ng.jpeg"
                        alt="楽天市場 ランキング1位"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* こんな方におすすめ！あなたにぴったりの理由 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 sm:mb-12">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
                  こんな方におすすめ！
                  <br className="sm:hidden" />
                  あなたにぴったりの理由
                </h3>

                <div className="space-y-4 sm:space-y-8">
                  {/* ラーメン好きなあなたへ */}
                  <div className="bg-amber-50 p-4 sm:p-6 rounded-xl flex flex-col md:flex-row gap-3 sm:gap-4">
                    <div className="flex-grow">
                      <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 flex items-center">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <Utensils className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                        </div>
                        ラーメン好きなあなたへ
                      </h4>
                      <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                        喜多方ラーメンの本格的な味わいをご飯で楽しめる新感覚グルメ。チャーシューたっぷりの贅沢な一品で、ラーメン好きも思わず唸る美味しさをお届けします！
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-1/4 relative aspect-square md:aspect-auto">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E5%A5%BD%E3%81%8D%E3%81%AE%E3%81%82%E3%81%AA%E3%81%9F%E3%81%B8.jpg-11X43Gq4CHcuKgYgSQgaV4PMp999bG.jpeg"
                        alt="ラーメン好きにおすすめ"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* 忙しい毎日を頑張る主婦の方へ */}
                  <div className="bg-blue-50 p-4 sm:p-6 rounded-xl flex flex-col md:flex-row gap-3 sm:gap-4">
                    <div className="flex-grow">
                      <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 flex items-center">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <Clock className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                        </div>
                        忙しい毎日を頑張る主婦の方へ
                      </h4>
                      <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                        炊飯器に入れるだけで簡単調理。忙しい日でも家族が喜ぶ本格ごちそうが完成します。時短料理で家事の負担を軽減しながら、食卓に笑顔をプラス。
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-1/4 relative aspect-square md:aspect-auto">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BF%99%E3%81%97%E3%81%84%E6%AF%8E%E6%97%A5%E3%82%92%E9%A0%91%E5%BC%B5%E3%82%8B%E4%B8%BB%E5%A9%A6%E3%81%AE%E6%96%B9%E3%81%B8.jpg-L8ysdMyBx2bGcWlpEYtfh3F7wQYO8b.jpeg"
                        alt="忙しい主婦におすすめ"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* 家族みんなで楽しみたい方へ */}
                  <div className="bg-green-50 p-4 sm:p-6 rounded-xl flex flex-col md:flex-row gap-3 sm:gap-4">
                    <div className="flex-grow">
                      <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 flex items-center">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 sm:w-5 sm:h-5 text-white"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          </svg>
                        </div>
                        家族みんなで楽しみたい方へ
                      </h4>
                      <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                        具材たっぷりでボリューム満点！子供から大人まで満足できる味わいで、家族団らんの食事にぴったりです。
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-1/4 relative aspect-square md:aspect-auto">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%AE%B6%E6%97%8F%E3%81%BF%E3%82%93%E3%81%AA%E3%81%A7%E6%A5%BD%E3%81%97%E3%81%BF%E3%81%9F%E3%81%84%E6%96%B9%E3%81%B8.jpg-7mUP6PjagLqxjWzpVhi7AbGcWxYHY2.jpeg"
                        alt="家族みんなで楽しむ食事"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* 非常食や備蓄を考えている方へ */}
                  <div className="bg-amber-100 p-4 sm:p-6 rounded-xl flex flex-col md:flex-row gap-3 sm:gap-4">
                    <div className="flex-grow">
                      <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 flex items-center">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 sm:w-5 sm:h-5 text-white"
                          >
                            <circle cx="12" cy="8" r="7"></circle>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                          </svg>
                        </div>
                        非常食や備蓄を考えている方へ
                      </h4>
                      <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                        常温保存可能＆賞味期限1年だから、災害時や備蓄用としても安心。美味しさを妥協せず、万が一の備えにも最適です。
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-1/4 relative aspect-square md:aspect-auto">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%9D%9E%E5%B8%B8%E9%A3%9F%E3%82%84%E5%82%99%E8%93%84%E3%82%92%E8%80%83%E3%81%88%E3%81%A6%E3%81%84%E3%82%8B%E6%96%B9%E3%81%B8.jpg-7VCLUAtmvFs8HbIVgZY6S0E0jikOz1.jpeg"
                        alt="非常食や備蓄用食品"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section id="reviews" className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">お客様の声</h2>
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/男性イラスト（AI）.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                    alt={`お客様 ${i + 1} のアバター`}
                    width={48}
                    height={48}
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">お客様 {i + 1}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, index) => (
                        <span key={index} className="text-xs sm:text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">「{review.comment}」</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 動画セクション - サムネイル画像とリンク */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">商品紹介動画</h2>
          <div className="max-w-2xl mx-auto">
            <a
              href="https://youtube.com/shorts/Zn5w-Sw-eQ8?feature=share"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LP%E7%94%BB%E5%83%8F3_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-APz7jDFBITikGtnKoXFbZiBsEMThrc.jpeg"
                  alt="炊き込みチャーシュー飯の作り方動画"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 bg-opacity-80 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4">
                <p className="text-center text-sm sm:text-base font-medium text-gray-900">
                  炊き込みチャーシュー飯の魅力紹介動画（YouTubeで見る）
                </p>
              </div>
            </a>
            <p className="text-center text-sm sm:text-base mt-4 text-gray-700">
              炊き込みチャーシュー飯の魅力をご覧ください。ラーメン屋が作る本格チャーシューと特製醤油だれが織りなす贅沢な味わいをぜひ体験してみてください。
            </p>
          </div>
        </div>
      </section>

      {/* ご購入はこちらから セクション */}
      <section className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">ご購入はこちらから</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {/* Yahoo!ショッピング */}
            <div className="bg-red-50 rounded-lg p-4 sm:p-6 text-center">
              <a
                href="https://store.shopping.yahoo.co.jp/aizubrandhall/4571318634806.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Yahoo")}
                className="block"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo購入ボタン-01-MEP8aX6vdnhkm0MalTPsgcj8jbQqA0.png"
                  alt="Yahoo!ショッピング"
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
              </a>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Yahoo!ショッピング</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                PayPayポイントが貯まる使えるショッピングモールはこちら
              </p>
            </div>

            {/* 楽天市場 */}
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 text-center">
              <a
                href="https://item.rakuten.co.jp/aizubrandhall/4571318634806/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Rakuten")}
                className="block"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/楽天購入ボタン-01-991Pc669KycdDKQBzO5S93EuS2I3kg.png"
                  alt="楽天市場"
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
              </a>
              <h3 className="font-bold mb-2 text-sm sm:text-base">楽天市場</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                楽天ポイントが使える国内最大級のショッピングモールはこちら
              </p>
            </div>

            {/* Amazon */}
            <div className="bg-green-50 rounded-lg p-4 sm:p-6 text-center">
              <a
                href="https://www.amazon.co.jp/dp/B0F18G5DNK"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Amazon")}
                className="block"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon購入ボタン-01-mAXYlXivqE7kA5DfbJhHMDX5hkPVNJ.png"
                  alt="Amazon"
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
              </a>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Amazon</h3>
              <p className="text-xs sm:text-sm text-gray-600">世界最大のショッピングモールでのお買い物はこちら</p>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}
